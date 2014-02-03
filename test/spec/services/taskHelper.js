'use strict';

describe('Service: Taskhelper', function () {

  // load the service's module
  beforeEach(module('taskTracerApp'));

  // instantiate service
  var Taskhelper;
  beforeEach(inject(function (_Taskhelper_) {
    Taskhelper = _Taskhelper_;
  }));

  it('should do something', function () {
    expect(!!Taskhelper).toBe(true);
  });

});
