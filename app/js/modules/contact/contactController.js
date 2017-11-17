angular.module('app').controller('ContactCtrl', [
    '$scope', 'Webworker', 'FileUploader', 'BrowserService', 'XlsxWebWorkerProcessorService',
    function($scope, Webworker, FileUploader, BrowserService, XlsxWebWorkerProcessorService) {

    $scope.uploader = new FileUploader({});
    
    $scope.uploader.onAfterAddingFile = function(fileItem) {
        processFileAsWebWorker(fileItem._file);
    };

    $scope.$on('sheetjs:file:uploaded', function(event, file) {
        processFileAsWebWorker(file);
    });

    function processFileAsWebWorker(file) {
        var webworker = Webworker.create(XlsxWebWorkerProcessorService.processXlsx, { async: true });
        webworker.run(file, BrowserService.ie).then(function(data) {
            processData(data);
        }, null, function(message) {
            if (message.error) {
                processError(message.error)
            } else if (message.notification) {
                processNotification(message.notification);
            }
        });
    }

    function processData(data) {
        console.log('RKEM: Data from Web Worker', data);
    }

    function processError(error) {
        console.log('RKEM: Error from Web Worker', error);
    }

    function processNotification(notification) {
        console.log('RKEM: Notification from Web Worker', notification);
    }
}]);
