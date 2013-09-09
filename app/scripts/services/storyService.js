'use strict';

angular.module('storyboardApp')
  .service('storyService', 
  
  function storyService() {
    var api = {};
    var stories = [];
    
    api.addStory = function(newStory) {
      var story = {
        title:newStory.title,
        description:newStory.description,
        points:newStory.points,
        stage:newStory.stage
      };
      stories.push(story);
    };

    api.stories = function() {return stories};
    
    return api;
  });
