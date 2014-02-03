'use strict';

var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

angular.module('taskTracerApp.taskHelper', ['taskTracerApp.services']).factory('Taskhelper', function(Datastorage) {
	
	var TaskHelper = {
			dayOfTheWeekFormat : d3.time.format("%w"),
			dayFormat : d3.time.format("%m/%d/%Y"),
			removeTask : function(task, arrayOfTasks)
			{
				var index = arrayOfTasks.indexOf(task);
				arrayOfTasks.splice(index, 1);
				Datastorage.storeData();
			},
			updateTask : function(task)
			{
				var text = task.text;
				if (URL_REGEXP.test(text)) {
					task.url = text;
					var indexOfLastSlash = text.lastIndexOf("/");
					var lastPart = text.substring(indexOfLastSlash+1);
					task.text = lastPart;
				}
					
//												$scope.url = $sce
//														.trustAsResourceUrl($scope.todoText);
				Datastorage.storeData();
			},
			addTask : function(task, text, date)
			{
				if (task.subtasks == null) {
					task.subtasks = [];
				}
				var newTask = {
						text : text,
						done : false
					};
				if(angular.isString(date))
				{
					newTask.startDate = date;
				}
				task.subtasks.push(newTask);
				this.updateTask(newTask);
			}
	};
	return TaskHelper;
});