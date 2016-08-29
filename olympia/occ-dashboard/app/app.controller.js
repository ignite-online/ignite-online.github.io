(function(){
	'use strict'

	angular.module('olympia-app')
		.controller('olympiaCntl', olympiaCntl);

	olympiaCntl.$inject = ['olympiaService', '$window'];

	function olympiaCntl(olympiaService, $window){
		var vm = this;
		vm.isLoggedIn = false;

		activate();

		/////////////////////////////

		function activate(){
			debugger;
			var token = olympiaService.getCookies();	

			//validate this token
			olympiaService.verifyTokenAuthentication(token).then(successVerify);

			function successVerify(data){
				if (data.result === 'Invalid'){
					//$window.location.href = "http://olympia-wervingscockpit.ignite.online/wp-login.php";
				}else if(data.result === 'Valid'){

				}
			}		
		}	
	}
})();