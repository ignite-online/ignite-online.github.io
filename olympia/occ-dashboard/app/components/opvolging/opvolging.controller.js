(function(){
	'use strict'

	angular.module('opvolging.module')
		.controller('opvolgingCntl', opvolgingCntl);

	opvolgingCntl.$inject = ['opvolgingService', 'commonService', '$scope', 'loaderService', '$timeout'];

	function opvolgingCntl(opvolgingService, commonService, $scope, loaderService, $timeout){
		var vm = this;

		vm.isKandidaten = false;
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
			vm.isKandidaten = opvolgingService.isKandidatenShow();

			commonService.dashboardData = data;

			vm.dashboard = commonService.dashboardData; 
			commonService.chartCallBack(opvolgingService.drawPieChart(vm.dashboard.gecontacteerdPercent, vm.dashboard.nietGecontacteeredPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart1(vm.dashboard.eenWerkdagPercent, vm.dashboard.tweeWerkdagPercent, vm.dashboard.langerWerkdagPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart2(vm.dashboard.intakegesprekPlaatsgevondenPercent, vm.dashboard.verdereOpvolgingPercent));
			commonService.chartCallBack(opvolgingService.stackedBarChart(vm.dashboard.wsPlaatsingenGefactureerdNumber, vm.dashboard.uitzendplaatsingenMetUrenbriefjeNumber));

			if(vm.isKandidaten){
				$timeout(function(){
					commonService.chartCallBack(opvolgingService.drawPieChart3(vm.dashboard.kandidatenGeplaatstGesprokenChart, vm.dashboard.kandidatenNietGeplaatstGesprokenChart, 'enable'));
					commonService.chartCallBack(opvolgingService.drawPieChart7(vm.dashboard.kandidatenGeplaatstVoorgesteldeChart, vm.dashboard.kandidatenNietGeplaatstVoorgesteldeChart, 'enable'));	
				});
			}else{
				$timeout(function(){
					commonService.chartCallBack(opvolgingService.drawPieChart3(vm.dashboard.kandidatenGeplaatstGesprokenChart, vm.dashboard.kandidatenNietGeplaatstGesprokenChart, 'disable'));
					commonService.chartCallBack(opvolgingService.drawPieChart7(vm.dashboard.kandidatenGeplaatstVoorgesteldeChart, vm.dashboard.kandidatenNietGeplaatstVoorgesteldeChart, 'disable'));	
				});
			}

			loaderService.toggle(false);	
		}

		function dashboardDataError(error){
			console.log(error);

			loaderService.toggle(false);
		}	
	}
})();