var app = angular.module('myMod', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'myCtrl',
      templateUrl: 'partials/input.html'
    })
    .when('/display', {
      controller: 'myCtrlTwo',
      templateUrl: 'partials/display.html'
    })
});
