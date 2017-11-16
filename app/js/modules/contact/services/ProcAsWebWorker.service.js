var $q, notify, complete;

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
            readXlsx().then(function(data) {
                complete(data);
            }, function(error) {
                throw error;
            });
        }
    
        requirejs(['ronnietest', 'q', 'js-xlsx'], function(ronnietest, Q, jsXlsx) {
            init(Q, notify, complete);
            main();
        });
    }

    return service;
});
