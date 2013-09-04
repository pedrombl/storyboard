function StoryCtrl($scope) {
  $scope.backlogstories = [
    {title: "first story", description: "description", points: 4},
    {title: "second story", description: "description", points: 2}
  ];
  
  $scope.inprogressstories = [
    {title: "first story", description: "description", points: 4},
    {title: "second story", description: "description", points: 2}
  ];
  
  $scope.donestories = [
    {title: "first story", description: "description", points: 4},
    {title: "second story", description: "description", points: 2}
  ];
  
  $scope.addstory = function () {
    $scope.backlogstories.push({title: $scope.storytitle, description: $scope.storydescription, points: $scope.storypoints});
    $scope.storytitle = '';
    $scope.storydescription = '';
    $scope.storypoints = '';
  }
}