'use strict';

angular
    .module('e2eProtractorApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .service('appService', function(){
        this.form = {};
    })
    .controller('LoginCtrl', (function ($scope, $location, appService) {

        //create a object to hold form element
        $scope.form = {};

        $scope.login = function () {

            //for sake of simplicity, we will use $location instead of $http service
            if ($scope.form.email === 'admin@gmail.com' && $scope.form.password === '1234') {
                appService.form = $scope.form;
                $location.path('/dashboard');
            }

        }

    }))
    .controller('DashboardCtrl', (function ($scope, appService) {

        $scope.user = appService.form;

    }))


