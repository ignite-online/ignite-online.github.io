(function(){
	'use strict'

	angular.module('kangetallen.module')
		.controller('kengetallenCntl', kengetallenCntl);

	kengetallenCntl.$inject = ['kengetallenService', 'commonService'];

	function kengetallenCntl(kengetallenService, commonService){
		var vm = this;

		vm.printPage = commonService.printPage;

		activate();

		///////////////////

		function activate(){
			commonService.initializeSelect2('.multiSelectOption');
			commonService.initializeDateRange('.calenderRange');
			commonService.chartCallBack(commonService.drawPieChart5);
		}
	}
})();