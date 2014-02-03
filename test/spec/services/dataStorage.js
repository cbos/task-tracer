'use strict';

describe('Service: Datastorage', function () {

  // load the service's module
  beforeEach(module('taskTracerApp'));

  // instantiate service
  var Datastorage;
  beforeEach(inject(function (_Datastorage_) {
    Datastorage = _Datastorage_;
  }));

  it('should do something', function () {
    expect(!!Datastorage).toBe(true);
  });

});
