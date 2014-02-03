'use strict';

angular.module('taskTracerApp').controller('MainCtrl',
		function($scope, $http, $sce, Datastorage, Taskhelper) {

			// https://github.com/angular-ui/ui-sortable
			// https://github.com/angular-ui/ui-tinymce -> al geinstalleerd nog
			// niet geinclude

			var date = new Date();

			var startDate = new Date();
			startDate.setDate(startDate.getDate() - 14);

			var range = d3.time.day.range(startDate, new Date());
			range.reverse();

			$scope.tasks = Datastorage.loadData();

			$scope.calculateTaskList = function() {
				$scope.taskDays = [];
				$scope.todos = [];
				
				for ( var dayIndex in range) {
					var dayDate = range[dayIndex];
					var dayOfTheWeek = parseInt(Taskhelper.dayOfTheWeekFormat(dayDate), 10)
					if (dayOfTheWeek > 0 && dayOfTheWeek < 6) {
						var workDay = { date: dayDate, dateString : Taskhelper.dayFormat(dayDate), tasks : []}
						$scope.taskDays.push(workDay);
					}
				}
				
				for ( var taskIndex in $scope.tasks) {
					var task = $scope.tasks[taskIndex];
					if(task.startDate)
					{
						for ( var dayIndex in $scope.taskDays)
						{
							if($scope.taskDays[dayIndex].dateString == task.startDate)
							{
								$scope.taskDays[dayIndex].tasks.push(task);
							}
						}
					}
					else
					{
						$scope.todos.push(task)
					}
				}
			}
			$scope.calculateTaskList();
			
			$scope.showAddTask = function(dateString)
			{
				return dateString == Taskhelper.dayFormat(date);
			}
						
			$scope.addTodo = function(date, text) {
				Taskhelper.addTask({
					subtasks : $scope.tasks
				}, text, date);
				$scope.todoText = '';
				$scope.calculateTaskList();
			};

			$scope.deleteSubTask = function(task) {
				Taskhelper.removeTask(task, $scope.tasks);
				$scope.calculateTaskList();
			}
		});
