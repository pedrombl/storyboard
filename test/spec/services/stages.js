'use strict';

describe('Service: stages', function () {

  // load the service's module
  beforeEach(module('storyboardApp'));

  // instantiate service
  var stages;
  beforeEach(inject(function (_stages_) {
    stages = _stages_;
  }));

  it('should do something', function () {
    expect(!!stages).toBe(true);
  });

});
