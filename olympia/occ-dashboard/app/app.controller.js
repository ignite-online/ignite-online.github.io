(function(){
	'use strict'

	angular.module('olympia-app')
		.controller('olympiaCntl', olympiaCntl);

	olympiaCntl.$inject = ['loaderService', 'commonService'];

	function olympiaCntl(loaderService, commonService){
		var vm = this;

		activate();

		/////////////////////////////

		function activate(){
			loaderService.toggle(true);	

			commonService.getDashboardData()
				.then(dashboardDataSuccess, dashboardDataError);
		}

		function dashboardDataSuccess(data){
			console.log(data);

			commonService.dashboardData = data;

			loaderService.toggle(false);	
		}

		function dashboardDataError(error){
			console.log(error);

			loaderService.toggle(false);
		}
	}
})();