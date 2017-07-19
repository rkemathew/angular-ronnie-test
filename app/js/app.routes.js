angular.module('app').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/templates/home/homeView.html',
            controller: 'HomeCtrl'
        })

        .when('/about', {
            templateUrl: 'app/templates/about/aboutView.html',
            controller: 'AboutCtrl'
        })

        .when('/contact', {
            templateUrl: 'app/templates/contact/contactView.html',
            controller: 'ContactCtrl'
        });
});
