(function(){
	'use strict'
	angular.module('app.module')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function appConfig($stateProvider, $urlRouterProvider){
		//States
		$stateProvider
			.state('Opvolging', {
				url : "/Opvolging",
				templateUrl : "app/components/kengetallen/kengetallen.html"
			})
			.state('Kengetallen', {
				url : "/kengetallen",
				templateUrl : "app/components/opvolging/opvolging.html"
			});

		$urlRouterProvider.otherwise("/kengetallen");
	}	
})()