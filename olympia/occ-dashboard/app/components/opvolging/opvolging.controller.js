(function(){
	'use strict'

	angular.module('opvolging.module')
		.controller('opvolgingCntl', opvolgingCntl);

	opvolgingCntl.$inject = ['opvolgingService', 'commonService'];

	function opvolgingCntl(opvolgingService, commonService){
		var vm = this;

		activate();

		///////////////////

		function activate(){
			commonService.initializeSelect2('.multiSelectOption');
			commonService.initializeDateRange('.calenderRange');
			commonService.chartCallBack(commonService.drawPieChart);
			commonService.chartCallBack(commonService.drawPieChart1);
			commonService.chartCallBack(commonService.drawPieChart2);
			commonService.chartCallBack(commonService.drawPieChart3);
			commonService.chartCallBack(commonService.drawPieChart7);
			commonService.chartCallBack(commonService.stackedBarChart);
			commonService.chartCallBack(commonService.stackedBarChart1);
		}
	}
})();