(function(){
	'use strict'

	//Manual bootstrap application
	console.log(google);
	google.charts.load('current', {'packages':['corechart', 'bar']});

	google.charts.setOnLoadCallback(function() {
	  angular.bootstrap(document.body, ['app.module']);
	});

	angular.module('app.module', [
		//Third party dependencies
		'ui.router',
		//Application
		'common.module',
		'opvolging.module',
		'kangetallen.module'
	]);
})();