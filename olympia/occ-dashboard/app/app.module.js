(function(){
	'use strict'

	//Manual bootstrap application
	google.load('visualization', '1', {packages:['corechart', 'line', 'table']});

	google.setOnLoadCallback(function() {
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