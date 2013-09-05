var myApp = angular.module("myApp", []);

myApp.factory('Stages', function () {
  return [
    {name: "backlog", id: 1},
    {name: "in progress", id: 2},
    {name: "done", id: 3},
  ];
})

function StoryCtrl($scope, Stages) {
  $scope.stages = Stages;

  $scope.stories = [
    {title: "first story", description: "description", points: 4, stage_id: 1},
    {title: "second story", description: "description", points: 2, stage_id: 1},
    {title: "story in progress", description: "description", points: 2, stage_id: 2},
    {title: "story done", description: "description", points: 2, stage_id: 3}
  ];
  
  $scope.addstory = function () {
    $scope.newstory.stage_id = 1;
    $scope.stories.push($scope.newstory);
    $scope.newstory = {}
  };

  $scope.move = function (story) {
    story.stage_id++;
  };
}
function StageCtrl($scope, Stages) {
  $scope.stages = Stages;

  $scope.addStage = function () {
    $scope.stages.push({name:$scope.stagename, id:$scope.stages.length + 1});
  }
  
}