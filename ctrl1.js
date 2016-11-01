var app = angular.module('myMod');

app.controller('myCtrl', function($scope, myFactory) {

  // var inputs = ['name', 'city', 'school', 'work', 'artist1', 'artist2', 'artist3'];

  $scope.totalInput = function() {

  $scope.paragraph = 'My name is ' + $scope.name + ' and I live in ' + $scope.city + '. I went to ' + $scope.school + ' and I now work at ' + $scope.work + '. My favorite musical artists are ' + $scope.artist1 + ', ' + $scope.artist2 + ' and ' + $scope.artist3 + '.';

  myFactory.setInfo($scope.paragraph);

  console.log($scope.paragraph);
};
});
