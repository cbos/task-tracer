'use strict';

describe('Directive: taskDirective', function () {

  // load the directive's module
  beforeEach(module('taskTracerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<task-directive></task-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the taskDirective directive');
  }));
});
