(function(){
	'use strict'

	angular.module('olympia-app')
		.controller('olympiaCntl', olympiaCntl);

	olympiaCntl.$inject = ['loaderService', 'commonService', '$scope', '$rootScope'];

	function olympiaCntl(loaderService, commonService, $scope, $rootScope){
		var vm = this;

		activate();

		/////////////////////////////

		function activate(){
			
		}	
	}
})();