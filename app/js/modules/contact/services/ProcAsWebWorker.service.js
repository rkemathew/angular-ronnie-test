var $q, notify, complete;
var MAX_ROWS_TO_SEARCH_FOR_HEADER, PCT_COLS_TO_MATCH_FOR_HEADER, MAX_COL_LEN_TO_MATCH_FOR_HEADER, DEFAULT_WORKSHEET_NAME,
    DEFAULT_GEN_INFO_WORKSHEET_NAME, DEFAULT_SALARY_REVIEW_DATE_CELL, DEFAULT_COUNTRY_CELL, DATE_REGEX, ZIP_CODE_REGEX;

angular.module('app').service('ProcAsWebWorker', function() {
    var service = {};

    service.asyncTest = function(file) {
        importScripts("https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js");
        requirejs.config({
            paths: {
                'wwhelpers': [ 'http://localhost:8080/dist/wwhelpers.min' ],
                'q': [ 'https://cdnjs.cloudflare.com/ajax/libs/q.js/0.9.2/q.min' ],
                'js-xlsx': [ 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.8/xlsx.full.min' ]
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

        function pause(milliseconds) {
            var dt = new Date();
            while ((new Date()) - dt <= milliseconds) {}
        }
        
        function getRandomArbitrary(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        function readXlsx() {
            var def = $q.defer();
            var reader = new FileReader();
            reader.onload = function (e) {
                var workbook = null;
                try {
                    //var bstr = BrowserService.ie ? reader.content : reader.result;
                    var bstr = reader.result;
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

            readXlsx().then(function(workbook) {
                var generalInfoWorksheet = workbook.Sheets[DEFAULT_GEN_INFO_WORKSHEET_NAME];
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
                if (!worksheet) {
                    def.reject('Unable to find the worksheet \'' + DEFAULT_WORKSHEET_NAME + '\' in the Xlsx File');
                    return false;
                } 
                
                if (!worksheet['!ref']) {
                    def.reject('Unable to find the header Row or content in the Xlsx File');
                    return false;
                }

                def.resolve(workbook);
            }, function(error) {
                def.reject(error);
            });

            return def.promise;
        }
    
        requirejs(['wwhelpers', 'q', 'js-xlsx'], function(wwhelpers, q, jsXlsx) {
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
