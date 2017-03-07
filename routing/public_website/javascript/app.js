var app = angular.module('myApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'home_controller',
      templateUrl: 'home_view.html'
    })
    .otherwise({
      redirectTo : '/'
    });
}).controller('indexController', function($scope) {});
