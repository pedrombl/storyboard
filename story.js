var myApp = angular.module('myApp', []).
  config(function($routeProvider) {
    $routeProvider.
      when('/story', {templateUrl: 'story.html', controller: StoryCtrl}).
      when('/stage', {templateUrl: 'stage.html', controller: StageCtrl}).
      otherwise({redirectTo:'/story'});
  });
 
myApp.factory('Stages', function () {
  return [
    "backlog",
    "in progress",
    "done"
  ];
})

function StoryCtrl($scope, Stages) {
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
}
function StageCtrl($scope, Stages) {
  $scope.stages = Stages;

  $scope.addStage = function () {
    $scope.stages.push($scope.stagename);
  }

  $scope.up = function(index)
  { 
    var tmp = $scope.stages[index];
    $scope.stages[index] = $scope.stages[index-1];
    $scope.stages[index-1] = tmp;
  }

  $scope.down = function(index)
  { 
    var tmp = $scope.stages[index];
    $scope.stages[index] = $scope.stages[index+1];
    $scope.stages[index+1] = tmp;
  }
  
}
