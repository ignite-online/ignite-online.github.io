(function(){
	'use strict'

	angular.module('olympia-app')
		.service('olympiaService', olympiaService);

	olympiaService.$inject = ['$cookies', '$http', '$q'];

	function olympiaService($cookies, $http, $q){
		var _this = this;

		_this.getCookies = getCookies;

		_this.verifyTokenAuthentication = verifyTokenAuthentication;

		/////////////////////////////////////

		function getCookies(){
			//Get token Cookie and return
			// var invalidToken = '97bca05f3a9efaebec3c8897ac355c3d';
			//var validToken = '120373b95c1f973b4fb2233688bbdc24';

			var token = $cookies.token;

			if(token === null){
				return 'abcd';
			}else{
				return token;
			}
		}

		function verifyTokenAuthentication(token, permission){
			var deffered = $q.defer();

			$http({
				url : 'http://olympia-wervingscockpit.ignite.online/wp-token.php',
				method : "GET",
				params : {
					token : token,
					sp : 1
				}
			})
			.success(function(data){
				deffered.resolve(data);
			})
			.error(function(){
				deffered.reject("Failed to get Analyzed data");
			});

			return deffered.promise;
		}

		function isLogin(data) {
			console.log();
		}
	}
})();