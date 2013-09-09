'use strict';

describe('Controller: StoryCtrl', function () {

  // load the controller's module
  beforeEach(module('storyboardApp'));

  var StoryCtrl,
    scope,
    Stages,
    storyService;
        
  var stories = [
    {title: "first story", description: "description", points: 4, stage: "backlog"},
    {title: "second story", description: "description", points: 2, stage: "backlog"},
    {title: "story in progress", description: "description", points: 2, stage: "in progress"},
    {title: "story done", description: "description", points: 2, stage: "done"}];
    

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _storyService_) {
    scope = $rootScope.$new();
    Stages = ["backlog", "in progress"];
    
    storyService = _storyService_;
    spyOn(storyService, 'stories').andReturn(stories);
    spyOn(storyService, 'addStory');
    
    StoryCtrl = $controller('StoryCtrl', {
      $scope: scope,
      Stages: Stages,
      storyService: storyService
    });
  }));

  it('should calculate total points for a stage', function () {
    expect(scope.totalPoints("backlog")).toBe(6);
  });
  
  it('should add story in storyboard', function(){
    expect(scope.stories.length).toBe(4);
    scope.newstory={title: "New story", description: "description", points: 4};
    scope.addStory();
    expect(storyService.addStory).toHaveBeenCalledWith({title: "New story", description: "description", points: 4, stage: "backlog"});
  });
  
  it('should move story to next stage', function() {
    scope.move(stories[0]);
    expect(stories[0].stage).toBe("in progress");
  });
  

});
