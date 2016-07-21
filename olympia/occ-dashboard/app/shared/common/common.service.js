(function(){
	'use strict'

	angular.module('common.module')
		.service('commonService', commonService);

	commonService.$inject = ['$timeout'];

	function commonService($timeout){
		this.initializeSelect2 = function(ele){
			$timeout(function(){
				$(ele).select2({
					placeholder: "Select a option",
					width:'253'
				});	
			});
		}
	}
})();