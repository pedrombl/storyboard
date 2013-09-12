'use strict';

angular.module('storyboardApp')
  .directive('ngUnique', function () {
    return {
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        scope.$watch(attrs.ngModel, function() {
          ngModel.$setValidity('unique', (scope[attrs.ngUnique].indexOf(element.val()) == -1));
        });
      }
    };
  });
