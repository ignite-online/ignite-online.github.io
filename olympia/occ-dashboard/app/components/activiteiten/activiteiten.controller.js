(function(){
	'use strict'

	angular.module('activiteiten.module')
		.controller('activiteitenCntl', activiteitenCntl);

	activiteitenCntl.$inject = ['activiteitenService', 'commonService', '$scope', 'loaderService', '$timeout'];

	function activiteitenCntl(activiteitenService, commonService, $scope, loaderService, $timeout){
		var vm = this;

		vm.isKandidaten = false;
		vm.dashboard = []; 

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
			vm.isKandidaten = activiteitenService.isKandidatenShow();

			commonService.dashboardData = data;

			vm.dashboard = commonService.dashboardData; 
			commonService.chartCallBack(activiteitenService.stackedBarChart1(vm.dashboard.contactMomentOneWeekPercent, vm.dashboard.contactMomentOneMaandPercent, vm.dashboard.contactMomentThreeMaandPercent, vm.dashboard.contactVanafSixMaandenPercent));
			commonService.chartCallBack(activiteitenService.columnChart(vm.dashboard.allGespreksDatumCandidates, vm.dashboard.allVoorstelDatumCandidates, vm.dashboard.allSollicitatieIngevoerdCandidates, vm.dashboard.allSollicitatieDatumCandidates, vm.dashboard.allPlaatsingsDatumNormaalWervingCandidates));
			commonService.chartCallBack(activiteitenService.columnChart1(vm.dashboard.allPlaatsingsDatumNormaalCandidates, vm.dashboard.allPlaatsingsDatumWervingCandidates));			

			loaderService.toggle(false);	
		}

		function dashboardDataError(error){
			console.log(error);

			loaderService.toggle(false);
		}	
	}
})();