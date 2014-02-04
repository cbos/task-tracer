'use strict';

angular.module('taskTracerApp.services', []).value('Datastorage', {
	tasks : [],
	storeData : function() {
		localStorage.setItem("task-tracer-data", angular.toJson(this.tasks, false));
	},
	loadData : function() {
		this.tasks = angular.fromJson(localStorage.getItem("task-tracer-data"));
		if(this.tasks == null)
		{
			this.tasks = [];
		}
		return this.tasks;
	}
});