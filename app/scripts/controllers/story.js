'use strict';

angular.module('storyboardApp').controller('StoryCtrl', function ($scope, Stages, storyService) {
  $scope.stages = Stages;

  $scope.stories = storyService.stories();
  
  $scope.totalPoints = function (stage) {
    var total = 0;
    $scope.stories.forEach(function (story) {
      if(story.stage == stage)
        total+=story.points;
    });
    return total;
  }
  
  $scope.addStory = function () {
    $scope.newstory.stage = $scope.stages[0];
    storyService.addStory($scope.newstory);
    $scope.newstory = {}
  };

  $scope.move = function (story) {
    var oldIndex = $scope.stages.indexOf(story.stage);
    story.stage = $scope.stages[oldIndex+1];
  };

});
