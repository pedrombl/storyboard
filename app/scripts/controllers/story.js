'use strict';

angular.module('storyboardApp').controller('StoryCtrl', function ($scope, Stages) {
  $scope.stages = Stages;

  $scope.stories = [
    {title: "first story", description: "description", points: 4, stage: "backlog"},
    {title: "second story", description: "description", points: 2, stage: "backlog"},
    {title: "story in progress", description: "description", points: 2, stage: "in progress"},
    {title: "story done", description: "description", points: 2, stage: "done"}
  ];
  
  $scope.totalPoints = function (stage) {
    var total = 0;
    $scope.stories.forEach(function (story) {
      if(story.stage == stage)
        total+=story.points;
    });
    return total;
  }
  
  $scope.addstory = function () {
    $scope.newstory.stage = $scope.stages[0];
    $scope.stories.push($scope.newstory);
    $scope.newstory = {}
  };

  $scope.move = function (story) {
    var oldIndex = $scope.stages.indexOf(story.stage);
    story.stage = $scope.stages[oldIndex+1];
  };

});
