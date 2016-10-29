var app = angular.module('myMod');

app.factory('myFactory', function(){

  var myObj = {};

  // function to get data from controller
  var setInfo = function(paragraph) {
    console.log(paragraph);
    myObj.inputParagraph = paragraph;
    console.log(myObj.inputParagraph);
  }

  //  function to send data back to controller
  var getInfo = function() {
    console.log(myObj);
    return myObj;
  }

  return {
    setInfo: setInfo,
    getInfo: getInfo
  };

})
