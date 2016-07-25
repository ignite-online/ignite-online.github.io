(function(){
	'use strict'

	angular.module('opvolging.module')
		.controller('opvolgingCntl', opvolgingCntl);

	opvolgingCntl.$inject = ['opvolgingService', 'commonService'];

	function opvolgingCntl(opvolgingService, commonService){
		var vm = this;
		vm.dashboard = commonService.dashboardData; 

		activate();

		///////////////////

		function activate(){
			commonService.initializeSelect2('.multiSelectOption');
			commonService.initializeDateRange('.calenderRange');
			commonService.chartCallBack(opvolgingService.drawPieChart(vm.dashboard.gecontacteerdPercent, vm.dashboard.nietGecontacteeredPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart1(vm.dashboard.eenWerkdagPercent, vm.dashboard.tweeWerkdagPercent, vm.dashboard.langerWerkdagPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart2(vm.dashboard.intakegesprekPlaatsgevondenPercent, vm.dashboard.verdereOpvolgingPercent));
			commonService.chartCallBack(opvolgingService.drawPieChart3(vm.dashboard.kandidatenGeplaatstGesprokenChart, vm.dashboard.kandidatenNietGeplaatstGesprokenChart));
			commonService.chartCallBack(opvolgingService.drawPieChart7(vm.dashboard.kandidatenGeplaatstVoorgesteldeChart, vm.dashboard.kandidatenNietGeplaatstVoorgesteldeChart));
			commonService.chartCallBack(opvolgingService.stackedBarChart(vm.dashboard.wsPlaatsingenAangemaaktNumber, vm.dashboard.uitzendPlaatsingenAangemaaktNumber));
			commonService.chartCallBack(opvolgingService.stackedBarChart1(vm.dashboard.contactMomentOneWeekPercent, vm.dashboard.contactMomentOneMaandPercent, vm.dashboard.contactMomentThreeMaandPercent, vm.dashboard.contactVanafSixMaandenPercent));
		}
	}
})();