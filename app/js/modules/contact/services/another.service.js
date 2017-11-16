angular.module('app').service('AnotherService', function() {
    var service = {};

    service.testMethod = function() {
        return 'This is a test';
    }

    return service;
});
