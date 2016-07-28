(function(){
	'use strict'

	angular.module('olympia-app')
		.controller('olympiaCntl', olympiaCntl);

	olympiaCntl.$inject = ['loaderService', 'commonService', '$scope'];

	function olympiaCntl(loaderService, commonService, $scope){
		var vm = this;

		activate();

		$scope.$on("dateRangePickerChanged", dateRangePickerChanged)

		/////////////////////////////

		function activate(){
			dateRangePickerChanged()
		}

		function dateRangePickerChanged(){
			console.log('picker change');

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