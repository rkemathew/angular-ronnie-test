var $q, notify, complete;
var MAX_ROWS_TO_SEARCH_FOR_HEADER, PCT_COLS_TO_MATCH_FOR_HEADER, MAX_COL_LEN_TO_MATCH_FOR_HEADER, DEFAULT_WORKSHEET_NAME,
    DEFAULT_GEN_INFO_WORKSHEET_NAME, DEFAULT_SALARY_REVIEW_DATE_CELL, DEFAULT_COUNTRY_CELL, DATE_REGEX, ZIP_CODE_REGEX;

angular.module('app').service('XlsxWebWorkerProcessorService', function() {
    var service = {};

    service.processXlsx = function(file, isIE, locationPath) {
        importScripts("https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js");
        requirejs.config({
            paths: {
                'wwhelpers': [ locationPath + '/dist/wwhelpers.min' ],
                'q':         [ 'https://cdnjs.cloudflare.com/ajax/libs/q.js/0.9.2/q.min' ],
                'lodash':    [ 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min' ],
                'js-xlsx':   [ 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.8/xlsx.full.min' ]
            }
        });

        function init(q, notifyFn, completeFn) {
            $q = q;
            notify = notifyFn;
            complete = completeFn;

            // The following constant defines the number of rows from the top of the range to search for the header row
            MAX_ROWS_TO_SEARCH_FOR_HEADER = 10;
            // The following constant defines the number of cols in the file that should be matched to consider it to be the header row
            PCT_COLS_TO_MATCH_FOR_HEADER = 10;
            // THe following constant defines the maximum characters from the left of the column name in the Xlsx file that must match the predefined column name to identify the column 
            MAX_COL_LEN_TO_MATCH_FOR_HEADER = 40;
            // The default worksheet name that is assumed to contain the data to be parsed.
            DEFAULT_WORKSHEET_NAME = 'Employee Data Requirements';
            // The default worksheet name that contains the general information for the workbook.
            DEFAULT_GEN_INFO_WORKSHEET_NAME = 'General Information';
            // The cell location in the template for the salary reviewed date information
            DEFAULT_SALARY_REVIEW_DATE_CELL = 'E16';
            // The cell location in the template for the country
            DEFAULT_COUNTRY_CELL = 'E14';

            // Regex to test dates against since js-xlsx will not map dates to 'd' type.
            DATE_REGEX = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
            // Regex to test for zip code
            ZIP_CODE_REGEX = /^[0-9]{5}$/;
        }

        function getWorksheetRange(processXlsxObj) {
            var worksheet = processXlsxObj.worksheet;
            var range = XLSX.utils.decode_range(worksheet['!ref']);
    
            // How many rows until we have determined no more data is coming
            var emptyRows = 10;
            // How many columns have to be empty from the left most column to be considered empty
            var emptyColumns = 10;
    
            // Track first empty row
            var firstEmptyRow = null;
            
            for (var i = 0; i <= range.e.r; i++) {
                var isRowEmpty = true;
    
                for (var j = 0; j < emptyColumns; j++) {
                    var cell = getCellByRowCol(worksheet, i, j);
                    if (cell) {
                        var value = cell ? getCellValue(cell): null;
                        if (value === null) {
                            continue;
                        } else {
                            if (XlsxWebWorkerHelper.getCurrency(value)) {
                                // This is currency column autopopulated from general information sheet currency choice.  Do not consider in empty check.
                                continue;
                            }
                        }
    
                        isRowEmpty = false;
                        firstEmptyRow = null;
                        break;
                    }
                }
    
                if (isRowEmpty) {
                    if (firstEmptyRow) {
                        if (i - firstEmptyRow >= emptyRows) {
                            range.e.r = firstEmptyRow - 1;
                            return range;
                        }
                    } else {
                        firstEmptyRow = i;
                    }
                }
            }
    
            return range;
        }

        function getHeader(processXlsxObj) {
            var worksheet = processXlsxObj.worksheet;
            var dataRange = processXlsxObj.dataRange;
            var headerRow = processXlsxObj.headerRow;

            var header = {};
            header.columns = _.cloneDeep(XlsxWebWorkerHelper.getDBColumnsMetaData());
            header.unidentifiedXlsxCells = [];

            var colRangeBegin = dataRange.s.c;
            var colRangeEnd   = dataRange.e.c;
    
            for (var col = colRangeBegin; col <= colRangeEnd; col++) {
                var cell = getCellByRowCol(worksheet, headerRow, col);
                if (!cell) {
                    continue;
                }

                var value = cell ? getCellValue(cell): null;
                if (value === null) {
                    continue;
                }

                var cellRef = _.cloneDeep(cell);
                cellRef.row = headerRow;
                cellRef.col = col;
                cellRef.address = getCellAddr(headerRow, col);
                cellRef.colAddress = getCellColAddr(headerRow, col);
                cellRef.value = cell.v;

                var column = getIdentifiedColumn(value, header.columns);
                if (!column) {
                    header.unidentifiedXlsxCells.push(cellRef);
                    continue;
                }

                column.isIdentified = true;
                column.xlsxCell = cellRef;

                if (!(cellRef.colAddress in processXlsxObj.headerColumnsIndex)) {
                    processXlsxObj.headerColumnsIndex[cellRef.colAddress] = column;
                }
            }
    
            return header;
        }
    
        function getRecords() {
            var records = [];
    
            var rowRangeBegin = headerRow + 1;
            var rowRangeEnd   = dataRange.e.r;
            var colRangeBegin = dataRange.s.c;
            var colRangeEnd   = dataRange.e.c;
            
            // The following variable decides how often to update the progress status records. So we take the number of total rows and divide it by 50
            // The reason for 50 is because we are considering reading the records as 50% of the activity and validating as the other 50%
            // var statusUpdateFreq = Math.round((rowRangeEnd - rowRangeBegin) / 50);
    
            for (var row = rowRangeBegin; row <= rowRangeEnd; row++) {
                var record = {};
                
                for (var col = colRangeBegin; col <= colRangeEnd; col++) {
                    var cell = getCellByRowCol(worksheet, row, col);
                    if (!cell) {
                        continue;
                    }
    
                    var value = cell ? getCellValue(cell): null;
                    if (value === null) {
                        continue;
                    }
    
                    var colAddress = getCellColAddr(headerRow, col);
                    var column = headerColumnsIndex[colAddress];
                    var dataAttributeName = column.dataAttributeName;
    
                    record[dataAttributeName] = {};
                    record[dataAttributeName].value = cell.v
                    record[dataAttributeName].writtenValue = cell.w
                    record[dataAttributeName].type = cell.t
                    record[dataAttributeName].row = row;
                    record[dataAttributeName].col = col;
                    record[dataAttributeName].address = getCellAddr(row, col);
                    record[dataAttributeName].colAddress = colAddress;
                }
    
                if (!isEmpty(record)) {
                    records.push(record);
                }
    
                // When the number of rows reached the statusUpdateFreq threshold, update the progress status records.
                // if (statusUpdateFreq > 0 && (row - rowRangeBegin) % statusUpdateFreq == 0) {
                //     updateFileProcessingStatus('READ', 'RECORDS', 'Reading records');
                // }
            }
    
//            updateFileProcessingStatus('READ', 'RECORDS', 'Finished Reading records', 50);
    
            return records;
        }
    
        function getIdentifiedHeaderRow(processXlsxObj) {
            var worksheet = processXlsxObj.worksheet;
            var dataRange = processXlsxObj.dataRange;

            var rowRangeBegin = dataRange.s.r;
            var rowRangeEnd   = dataRange.e.r < MAX_ROWS_TO_SEARCH_FOR_HEADER ? dataRange.e.r: MAX_ROWS_TO_SEARCH_FOR_HEADER;
            var colRangeBegin = dataRange.s.c;
            var colRangeEnd   = dataRange.e.c;

            for (var row = rowRangeBegin; row < rowRangeEnd; row++) {
                var numColsIdentified = 0;
                for (var col = colRangeBegin; col < colRangeEnd; col++) {
                    var cell = getCellByRowCol(worksheet, row, col);
                    var value = cell ? getCellValue(cell): null;
                    var type = cell ? getCellType(cell): null;
                    if (value && type && type === 's' && getIdentifiedColumn(value, XlsxWebWorkerHelper.getDBColumnsMetaData())) {
                        numColsIdentified++;
                        if (getPctColsIdentified(numColsIdentified) >= PCT_COLS_TO_MATCH_FOR_HEADER) {
                            return row;
                        }
                    }
                }
            }
    
            return null;
        }
    
        function getPctColsIdentified(numColsIdentified) {
            return numColsIdentified / XlsxWebWorkerHelper.getDBColumnsCount() * 100;
        }
    
        function getIdentifiedColumn(potentialColumnName, source) {
            var normalizedColumnName = getNormalizedColumnName(potentialColumnName);
            return source.find(function(columnMetaData) {
                return (columnMetaData.normalizedColumnName.substring(0, MAX_COL_LEN_TO_MATCH_FOR_HEADER) === normalizedColumnName.substring(0, MAX_COL_LEN_TO_MATCH_FOR_HEADER)) ? true: false;
            });
        }
    
        function getNormalizedColumnName(columnName) {
            return columnName.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        }
    
        function getCellAddr(row, col) {
            return XLSX.utils.encode_cell({r: row, c: col});
        }
    
        function getCellColAddr(row, col) {
            var cellAddr = getCellAddr(row, col);
            return cellAddr.replace(+(row+1), '');
        }
    
        function getCellValue(cell) {
            return cell.v;
        }
    
        function getCellType(cell) {
            return cell.t;
        }
    
        function getCellByAddr(worksheet, addr) {
            return (worksheet[addr] ? worksheet[addr] : undefined);
        }
    
        function getCellByRowCol(worksheet, row, col) {
            return getCellByAddr(worksheet, getCellAddr(row, col));
        }

        function readXlsx() {
            var def = $q.defer();
            var reader = new FileReader();
            reader.onload = function (e) {
                var workbook = null;
                try {
                    var bstr = isIE ? reader.content : reader.result;
                    // var bstr = reader.result;                    
                    workbook = XLSX.read(bstr, {type:'binary', cellText: false, cellDates: true});
                    if (!workbook) {
                        throw 'Could not create Workbook Object';
                    }
                    def.resolve(workbook);
                } catch(e) {
                    def.reject('Unable to process file. Please ensure that this is a valid Microsoft Excel Workbook of the Xlsx Format');
                }
            };
            reader.readAsBinaryString(file);
            return def.promise;
        }

        function processXlsx() {
            var def = $q.defer();

            var processXlsxObj = {
                file: file,
                workbook: null,
                generalInfoWorksheet:null,
                worksheet: null,
                dataRange: null,
                headerRow: null,
                header: null,
                headerColumnsIndex: {},
                records: null
            };
    
            readXlsx().then(function(workbook) {
                processXlsxObj.workbook = workbook;

                var generalInfoWorksheet = workbook.Sheets[DEFAULT_GEN_INFO_WORKSHEET_NAME];
                processXlsxObj.generalInfoWorksheet = generalInfoWorksheet;

                if (!generalInfoWorksheet) {
                    def.reject('Unable to find the worksheet \'' + DEFAULT_GEN_INFO_WORKSHEET_NAME + '\' in the Xlsx File');
                    return false;
                } 
                
                // TODO: Determine if we need to use a more robust check for salary review date (such as if cell can move?)
                var salaryReviewDate = generalInfoWorksheet[DEFAULT_SALARY_REVIEW_DATE_CELL] ? generalInfoWorksheet[DEFAULT_SALARY_REVIEW_DATE_CELL].v : null;
                if (salaryReviewDate === null) {
                    def.reject('Unable to find the salary review date in the \'' + DEFAULT_GEN_INFO_WORKSHEET_NAME + '\' worksheet.');
                    return false;
                } else {
                    var writtenSalaryReviewDate = generalInfoWorksheet[DEFAULT_SALARY_REVIEW_DATE_CELL] ? generalInfoWorksheet[DEFAULT_SALARY_REVIEW_DATE_CELL].w : null;
                    if (writtenSalaryReviewDate === null || !DATE_REGEX.test(writtenSalaryReviewDate)) {
                        def.reject('The salary review date in the \'' + DEFAULT_GEN_INFO_WORKSHEET_NAME + '\' worksheet is not formatted as MM/DD/YYYY.');
                        return false;
                    }
                }

                // TODO: Determine if we need to use a more robust check for currency (such as if cell can move?)
                var country = generalInfoWorksheet[DEFAULT_COUNTRY_CELL] ? generalInfoWorksheet[DEFAULT_COUNTRY_CELL].v : null;
                if (country === null) {
                    def.reject('Unable to find the country in the \'' + DEFAULT_GEN_INFO_WORKSHEET_NAME + '\' worksheet.');
                    return false;
                } else if (XlsxWebWorkerHelper.getCountry(country) === undefined) {
                    def.reject('Unknown ISO country code found for country in the \'' + DEFAULT_GEN_INFO_WORKSHEET_NAME + '\' worksheet.');
                    return false;
                }

                var worksheet = workbook.Sheets[DEFAULT_WORKSHEET_NAME];
                processXlsxObj.worksheet = worksheet;

                if (!worksheet) {
                    def.reject('Unable to find the worksheet \'' + DEFAULT_WORKSHEET_NAME + '\' in the Xlsx File');
                    return false;
                } 

                if (!worksheet['!ref']) {
                    def.reject('Unable to find the header Row or content in the Xlsx File');
                    return false;
                }

                var dataRange = getWorksheetRange(processXlsxObj);
                processXlsxObj.dataRange = dataRange;

                var headerRow = getIdentifiedHeaderRow(processXlsxObj);
                processXlsxObj.headerRow = headerRow;

                if (!headerRow) {
                    def.reject('Unable to find header Row in Xlsx File');
                    return false;
                }

                var header = getHeader(processXlsxObj);
                processXlsxObj.header = header;

                if (header.unidentifiedXlsxCells.length > 0) {
                    def.resolve(processXlsxObj);
                    return false;
                }

                def.resolve(processXlsxObj);
                return true;
            }, function(error) {
                def.reject(error);
            });

            return def.promise;
        }
    
        requirejs(['wwhelpers', 'q', 'lodash', 'js-xlsx'], function(wwhelpers, q, _, jsXlsx) {-
            init(q, notify, complete);

            processXlsx().then(function(workbook) {
                complete(workbook);
            }, function(error) {
                notify({ error: error });
            });
        });
    }

    return service;
});
