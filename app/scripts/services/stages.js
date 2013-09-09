'use strict';

angular.module('storyboardApp')
  .service('Stages', function Stages() {
  return [
    "backlog",
    "in progress",
    "done"
  ];
  });
