'use strict';

describe('Controller: StageCtrl', function () {

  // load the controller's module
  beforeEach(module('storyboardApp'));

  var StageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StageCtrl = $controller('StageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
