angular.module('app', ['app.templates', 'ngRoute']);

angular.module('app').controller('AppCtrl', ['$scope', function($scope) {
    var onevar = 'abcd1';
    if (onevar === 'test') {
        onevar = 'none1';
    }
    
    console.log('here');
    console.log(onevar);
}]);
