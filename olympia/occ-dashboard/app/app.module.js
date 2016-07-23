(function(){
	'use strict'

	//Manual bootstrap application
	google.charts.load('current', {'packages':['corechart', 'bar']});

	google.charts.setOnLoadCallback(function() {
	  angular.bootstrap(document.body, ['olympia-app']);
	});

	angular.module('olympia-app', [
		//Third party dependencies
		'ui.router',
		//Application
		'loader.module',
		'common.module',
		'opvolging.module',
		'kangetallen.module'
	]);
})();