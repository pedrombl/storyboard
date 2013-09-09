'use strict';

angular.module('storyboardApp').controller('StageCtrl', function ($scope, Stages) {
  $scope.stages = Stages;

  $scope.addStage = function () {
    $scope.stages.push($scope.stagename);
  }

  $scope.up = function(index)  { 
    var tmp = $scope.stages[index];
    $scope.stages[index] = $scope.stages[index-1];
    $scope.stages[index-1] = tmp;
  }

  $scope.down = function(index)  { 
    var tmp = $scope.stages[index];
    $scope.stages[index] = $scope.stages[index+1];
    $scope.stages[index+1] = tmp;
  }
});
