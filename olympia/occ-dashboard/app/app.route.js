(function(){
	'use strict'
	angular.module('olympia-app')
		.config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function appConfig($stateProvider, $urlRouterProvider){
		//States
		$stateProvider
			.state('Funnel', {
				url : "/funnel",
				templateUrl : "app/components/opvolging/opvolging.html",
				controller: 'opvolgingCntl',
        		controllerAs: 'olympia'
			})
			.state('Activiteiten', {
				url : "/activiteiten",
				templateUrl : "app/components/activiteiten/activiteiten.html",
				//controller: 'opvolgingCntl',
        		//controllerAs: 'olympia'
			})
			.state('Kengetallen', {
				url : "/kengetallen",
				templateUrl : "app/components/kengetallen/kengetallen.html",
				controller: 'kengetallenCntl',
        		controllerAs: 'olympia'
			});

		$urlRouterProvider.otherwise("/funnel");
	}	
})();