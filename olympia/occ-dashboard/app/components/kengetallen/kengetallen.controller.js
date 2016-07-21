(function(){
	'use strict'

	angular.module('kangetallen.module')
		.controller('kengetallenCntl', kengetallenCntl);

	kengetallenCntl.$inject = ['kengetallenService', 'commonService'];

	function kengetallenCntl(kengetallenService, commonService){
		var vm = this;

		activate();

		///////////////////

		function activate(){
			commonService.initializeSelect2('.multiSelectOption');
		}
	}
})();