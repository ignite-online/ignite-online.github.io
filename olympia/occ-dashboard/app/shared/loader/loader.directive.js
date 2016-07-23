(function(){
	'use strict';
	angular.module('loader.module')
		.directive('olympiaLoader', olympiaLoader);

	olympiaLoader.$inject = ['loaderService', 'commonService'];

	function olympiaLoader(loaderService, commonService) {
	    var directive =  {
	        restrict : 'E',
	        templateUrl : './app/shared/loader/loader.html',
	        scope : false,
	        replace: true,
	        link : function(scope, element, attrs){
	        	var _this = scope;

	        	_this.randomMessage = {}

	        	_this.$watch(
        			function(){
        				return loaderService.isLoader;
        			},

	        		function(){
		        		var flag = loaderService.isLoader;
		        		if(flag){
		        			angular.copy(commonService.getRandomMessage(), _this.randomMessage);
		        			element.show();
		        		}else{
			        		element.hide();
			        	}
	        		}
	        	);
	        }
	    };
	    return directive;
	}
})();

