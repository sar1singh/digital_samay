var app = angular.module('digital_samay', ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when('/',{
        templateUrl : 'pages/home.html',
    })
    .when('/signin',{
        templateUrl : 'pages/signin.html',
    })
    .when('/signup',{
        templateUrl : 'pages/signup.html',
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
})