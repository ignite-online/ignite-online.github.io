(function(){
	'use strict'

	angular.module('common.module')
		.constant('enumApp', {
			'URL' : '//olympia-jobapplicationprediction-api-test.azurewebsites.net/api/',
			'RANDOMMESSAGE' : [
				{
					'message' : 'Dat de titel van een vacature de meeste impact heeft op hoeveel kandidaten de vacature zien.',
					'link' : 'https://www.athena-intranet.nl/online'
				},
				{
					'message' : 'Dat Olympia het meest zichtbare uitzendbureau van Nederland is bij mensen die op Google zoeken naar “uitzendbureau + plaats”.',
					'link' : 'https://www.athena-intranet.nl/online'
				},
				{
					'message' : 'Dat het aanmaken van meerdere vacatures voor 1 positie veel meer kandidaten aantrekt.',
					'link' : 'https://www.athena-intranet.nl/online'
				},
				{
					'message' : 'Bij functies waarbij zowel parttimers als fulltimers gezocht worden het veel effectiever is om daar aparte vacatures voor aan te maken.',
					'link' : 'https://www.athena-intranet.nl/online'
				},
			]
		});
})();