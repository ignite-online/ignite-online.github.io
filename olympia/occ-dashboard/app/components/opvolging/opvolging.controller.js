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
		}
	}
})();