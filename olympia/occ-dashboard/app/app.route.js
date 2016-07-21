(function(){
	'use strict'
	angular.module('app.module')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function appConfig($stateProvider, $urlRouterProvider){
		//States
		$stateProvider
			.state('Opvolging', {
				url : "/opvolging",
				templateUrl : "app/components/opvolging/opvolging.html",
				controller: 'opvolgingCntl',
        		controllerAs: 'olympia'
			})
			.state('Kengetallen', {
				url : "/kengetallen",
				templateUrl : "app/components/kengetallen/kengetallen.html",
				controller: 'kengetallenCntl',
        		controllerAs: 'olympia'
			});

		$urlRouterProvider.otherwise("/opvolging");
	}	
})();