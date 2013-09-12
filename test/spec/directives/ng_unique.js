'use strict';

describe('Directive: ngUnique', function () {

  // load the directive's module
  beforeEach(module('storyboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-unique></ng-unique>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngUnique directive');
  }));
});
