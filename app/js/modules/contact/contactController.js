angular.module('app').controller('ContactCtrl', [
    '$scope', 'Webworker', 'FileUploader', 'ProcAsWebWorker', function($scope, Webworker, FileUploader, ProcAsWebWorker) {

    $scope.uploader = new FileUploader({});
    
    $scope.uploader.onAfterAddingFile = function(fileItem) {
        processFileAsWebWorker(fileItem._file);
    };

    $scope.$on('sheetjs:file:uploaded', function(event, file) {
        processFileAsWebWorker(file);
    });

    function processFileAsWebWorker(file) {
        var webworker = Webworker.create(ProcAsWebWorker.asyncTest, { async: true });
        webworker.run(file).then(function(data) {
            processData(data);
        }, function(error) {
            processError(error);
        }, function(notification) {
            processNotification(notification);
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
