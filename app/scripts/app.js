'use strict';

angular.module('storyboardApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/story', {
        templateUrl: 'views/story.html',
        controller: 'StoryCtrl'
      })
      .when('/stage', {
        templateUrl: 'views/stage.html',
        controller: 'StageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
