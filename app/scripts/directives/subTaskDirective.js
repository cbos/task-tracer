'use strict';

angular.module('taskTracerApp').directive('subtask', function($compile) {
	return {
		replace : true,
		restrict : 'E',
		scope : {
			task : '=',
			'remove' : '&onRemove'
		},
		template : '<div></div>',
		link : function(scope, element, attrs) {
			element.append("<task task='task' on-remove='remove()'></task>");
			$compile(element.contents())(scope)
		}
	};
});
