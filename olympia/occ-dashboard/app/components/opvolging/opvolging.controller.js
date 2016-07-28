(function(){
	'use strict'

	angular.module('opvolging.module')
		.controller('opvolgingCntl', opvolgingCntl);

	opvolgingCntl.$inject = ['opvolgingService', 'commonService', '$scope', 'loaderService'];

	function opvolgingCntl(opvolgingService, commonService, $scope, loaderService){
		var vm = this;
		vm.dashboard = []; 

		activate();

		$scope.$on("dateRangePickerChanged", dateRangePickerChanged);

		///////////////////

		function activate(){
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
			commonService.chartCallBack(opvolgingService.drawPieChart(vm.dashboard.gecontacteerdPercent, vm.dashboard.nietGecontacteeredPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart1(vm.dashboard.eenWerkdagPercent, vm.dashboard.tweeWerkdagPercent, vm.dashboard.langerWerkdagPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart2(vm.dashboard.intakegesprekPlaatsgevondenPercent, vm.dashboard.verdereOpvolgingPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart3(vm.dashboard.kandidatenGeplaatstGesprokenChart, vm.dashboard.kandidatenNietGeplaatstGesprokenChart));
			commonService.chartCallBack(opvolgingService.drawPieChart7(vm.dashboard.kandidatenGeplaatstVoorgesteldeChart, vm.dashboard.kandidatenNietGeplaatstVoorgesteldeChart));
			commonService.chartCallBack(opvolgingService.stackedBarChart(vm.dashboard.wsPlaatsingenAangemaaktNumber, vm.dashboard.uitzendPlaatsingenAangemaaktNumber));
			commonService.chartCallBack(opvolgingService.stackedBarChart1(vm.dashboard.contactMomentOneWeekPercent, vm.dashboard.contactMomentOneMaandPercent, vm.dashboard.contactMomentThreeMaandPercent, vm.dashboard.contactVanafSixMaandenPercent));
			commonService.chartCallBack(opvolgingService.columnChart(vm.dashboard.allGespreksDatumCandidates, vm.dashboard.allVoorstelDatumCandidates, vm.dashboard.allSollicitatieIngevoerdCandidates, vm.dashboard.allSollicitatieDatumCandidates, vm.dashboard.allPlaatsingsDatumNormaalWervingCandidates));
			commonService.chartCallBack(opvolgingService.columnChart1(vm.dashboard.allPlaatsingsDatumNormaalCandidates, vm.dashboard.allPlaatsingsDatumWervingCandidates));

			loaderService.toggle(false);	
		}

		function dashboardDataError(error){
			console.log(error);

			loaderService.toggle(false);
		}	
	}
})();