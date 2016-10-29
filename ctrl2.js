var app = angular.module('myMod');

app.controller('myCtrlTwo', function($scope, myFactory){

  $scope.factoryInfo = myFactory.getInfo();

  console.log($scope.factoryInfo);

});
