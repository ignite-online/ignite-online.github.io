(function(){
	'use strict'

	angular.module('kangetallen.module')
		.controller('kengetallenCntl', kengetallenCntl);

	kengetallenCntl.$inject = ['kengetallenService', 'commonService', 'loaderService', '$scope'];

	function kengetallenCntl(kengetallenService, commonService, loaderService, $scope){
		var vm = this;
		vm.dashboard = [];

		vm.printPage = commonService.printPage;

		activate();

		$scope.$on("dateRangePickerChanged", dateRangePickerChanged);

		///////////////////

		function activate(){
			commonService.init();
			commonService.initializeSelect2('.multiSelectOption');
			commonService.initializeDateRange('.calenderRange');
			dateRangePickerChanged();
		}

		function dateRangePickerChanged(){
			loaderService.toggle(true);

			commonService.getDashboardData()
				.then(dashboardDataSuccess, dashboardDataError);
		}

		function dashboardDataSuccess(data){
			commonService.dashboardData = data;
			vm.dashboard = commonService.dashboardData; 

			commonService.chartCallBack(commonService.drawPieChart5(vm.dashboard.nietPassendNumber, vm.dashboard.passendNumber, vm.dashboard.overgekWalificeerdNumber));
			
			loaderService.toggle(false);	
		}

		function dashboardDataError(error){
			console.log(error);

			loaderService.toggle(false);
		}	
	}
})();