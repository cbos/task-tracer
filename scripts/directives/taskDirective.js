'use strict';

angular.module('taskTracerApp').directive(
		'task',
		function() {
			return {
				templateUrl : 'views/task.html',
				restrict : 'E',
				scope : {
					task : '=',
					'remove' : '&onRemove'
				},
				controller : [
						"$scope",
						"Datastorage",
						"Taskhelper",
						function($scope, Datastorage, Taskhelper) {
							$scope.saveChanges = function() {
								Taskhelper.updateTask($scope.task);
							}

							$scope.addSubTask = function() {
								Taskhelper.addTask($scope.task, "");
							}

							$scope.deleteSubTask = function(task) {
								Taskhelper.removeTask(task,
										$scope.task.subtasks);
							}
						} ],
				link : function postLink(scope, element, attrs, controller) {
					// element.text('this is the taskDirective directive' +
					// scope.task.text);

				}
			};
		});