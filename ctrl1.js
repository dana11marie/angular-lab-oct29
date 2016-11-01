var app = angular.module('myMod');

app.controller('myCtrl', function($scope, myFactory) {

  // var inputs = ['name', 'city', 'school', 'work', 'artist1', 'artist2', 'artist3'];

  $scope.totalInput = function() {

  $scope.paragraph = ' ' + $scope.name + ' ' + $scope.city + ' ' + $scope.school + ' ' + $scope.work + ' ' + $scope.artist1 + ' ' + $scope.artist2 + ' ' + $scope.artist3;

  myFactory.setInfo($scope.paragraph);

  console.log($scope.paragraph);
};
});
