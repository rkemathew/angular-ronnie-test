var $q, notify, complete;
var MAX_ROWS_TO_SEARCH_FOR_HEADER, PCT_COLS_TO_MATCH_FOR_HEADER, MAX_COL_LEN_TO_MATCH_FOR_HEADER, DEFAULT_WORKSHEET_NAME,
    DEFAULT_GEN_INFO_WORKSHEET_NAME, DEFAULT_SALARY_REVIEW_DATE_CELL, DEFAULT_COUNTRY_CELL;

angular.module('app').service('ProcAsWebWorker', function() {
    var service = {};

    service.asyncTest = function(file) {
        importScripts("https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js");
        requirejs.config({
            paths: {
                'ronnietest': [ 'http://localhost:8080/libs/ronnietest' ],
                'q': [ 'https://cdnjs.cloudflare.com/ajax/libs/q.js/0.9.2/q.min' ],
                'js-xlsx': [ 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.8/xlsx.full.min' ]
            }
        });

        function init(Q, notifyFn, completeFn) {
            $q = Q;
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
                    if (workbook) {
                        def.resolve(workbook);
                    } else {
                        def.reject('Unable to create workbook object');
                    }
                } catch(e) {
                    def.reject(e);
                }
            };
            reader.readAsBinaryString(file);
            return def.promise;
        }

        function main() {
            var def = $q.defer();
            readXlsx().then(function(workbook) {
                var generalInfoWorksheet = workbook.Sheets[DEFAULT_GEN_INFO_WORKSHEET_NAME];
                if (!generalInfoWorksheet) {
                    def.reject('Unable to find the worksheet \'' + DEFAULT_GEN_INFO_WORKSHEET_NAME + '\' in the Xlsx File');
                    return false;
                } 
                
                def.resolve(workbook);
            }, function(error) {
                throw error;
            });
            return def.promise;
        }
    
        requirejs(['ronnietest', 'q', 'js-xlsx'], function(ronnietest, Q, jsXlsx) {
            init(Q, notify, complete);

            main().then(function(workbook) {
                complete(workbook);
            }, function(error) {
                notify({ error: error });
            });
        });
    }

    return service;
});
