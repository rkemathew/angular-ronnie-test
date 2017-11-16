angular.module('app', ['app.templates', 'ngRoute', 'ngWebworker', 'angularFileUpload'])
.config(['WebworkerProvider', function (WebworkerProvider) {
    WebworkerProvider.setHelperPath("./bower_components/ng-webworker/src/worker_wrapper.min.js");
}]);

angular.module('app').controller('AppCtrl', ['$scope', function($scope) {
    
}]);
