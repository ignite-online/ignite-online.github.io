(function(){
	'use strict'

	angular.module('common.module')
		.service('commonService', commonService);

	commonService.$inject = ['$timeout', '$http', '$q', 'enumApp'];

	function commonService($timeout, $http, $q, enumApp){

    this.getRandomMessage = getRandomMessage;
    this.getDashboardData = getDashboardData;

    //////////////////////////////////////////////

    function getRandomMessage(){
      var num = Math.floor(enumApp.RANDOMMESSAGE.length * Math.random());
      return enumApp.RANDOMMESSAGE[num];
    }

    function getDashboardData(){
      var deffered = $q.defer();

      $http({
        url : enumApp.URL + "GetOccDashBoardReports",
        method : "GET",
      })
      .success(function(data){
        deffered.resolve(data);       
      })
      .error(function(){
        deffered.reject("Failed to post data");
      });

      return deffered.promise;
    }
	}

  //commonService.prototype.dashboardData = {"kandidatenCcerapportageNumber":2442,"gecontacteerdNumber":1769,"gecontacteerdPercent":72.4,"nietGecontacteeredNumber":673,"nietGecontacteeredPercent":27.6,"eenWerkdagGesproken":0,"eenWerkdagVoiceMail":0,"eenWerkdagPercent":0.0,"tweeWerkdagGesproken":0,"tweeWerkdagVoiceMail":0,"tweeWerkdagPercent":0.0,"langerWerkdagGesproken":0,"langerWerkdagVoiceMail":0,"langerWerkdagPercent":0.0,"passendeKandidatenNumber":2235,"passendeKandidatenCombinedPercent":91.5,"intakegesprekPlaatsgevondenNumber":22,"intakegesprekPlaatsgevondenPercent":1.0,"verdereOpvolgingNumber":1534,"verdereOpvolgingPercent":68.6,"kandidatenVoorgesteldklantNumber":6,"kandidatenVoorgesteldklantPercent":27.3,"sollicitatiegesprekkenIngeplandKlantNumber":4,"sollicitatiegesprekkenIngeplandKlantPercent":18.2,"sollicitatiegesprekkenIngeplandKlantCombinedPercent":66.7,"sollicitatiegesprekkenPlaatsgevondenKlantNumber":0,"sollicitatiegesprekkenPlaatsgevondenKlantPercent":0.0,"sollicitatiegesprekkenPlaatsgevondenKlantCombinedPercent":0.0,"kandidatenGeplaatstNumber":0,"kandidatenGeplaatstPercent":0.0,"kandidatenGeplaatstCombinedPercent":0.0,"kandidatenNietGeplaatstNumber":22,"kandidatenNietGeplaatstPercent":100.0,"kandidatenNietGeplaatstCombinedPercent":0.0,"kandidatenGeplaatstGesprokenChart":0.0,"kandidatenNietGeplaatstGesprokenChart":100.0,"kandidatenGeplaatstVoorgesteldeChart":0.0,"kandidatenNietGeplaatstVoorgesteldeChart":366.7,"uitzendPlaatsingenAangemaaktNumber":0,"uitzendPlaatsingenAangemaaktPercent":0.0,"wsPlaatsingenAangemaaktNumber":0,"wsPlaatsingenAangemaaktPercent":0.0,"totaalAantalPlaatsingenAangemaakt":0,"uitzendplaatsingenMetUrenbriefjeNumber":0,"uitzendplaatsingenMetUrenbriefjePercent":0.0,"wsPlaatsingenGefactureerdNumber":0,"wsPlaatsingenGefactureerdPercent":0.0,"totaalAantalPlaatsingenPlaatsgevonden":0,"contactMomentOneWeekNumberTotal":122,"contactMomentOneWeekNumberActual":2,"contactMomentOneWeekPercent":1.6,"contactMomentOneMaandNumberTotal":72,"contactMomentOneMaandNumberActual":2,"contactMomentOneMaandPercent":2.8,"contactMomentThreeMaandNumberTotal":5,"contactMomentThreeMaandNumberActual":0,"contactMomentThreeMaandPercent":0.0,"contactVanafSixMaandenNumberTotal":8,"contactVanafSixMaandenNumberActual":0,"contactVanafSixMaandenPercent":0.0}

  commonService.prototype.dashboardData = {};

	commonService.prototype.chartCallBack = function(fn){
			google.charts.setOnLoadCallback(fn);	
	}

	commonService.prototype.stackedBarChart1 = function(){
  	var data = google.visualization.arrayToDataTable([
      ['time', 'green', 'red',
       { role: 'annotation' } ],
      ['1e Wk', 10, 24,''],
      ['1e Mnd', 16, 22,''],
      ['3e Mnd', 28, 19,''],
      ['>6Mnd', 28, 19,'']
    ]);

    var options = {
      width:'100%',
      height: '100%',
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: 'percent',
      colors: ["#009a2d", "#dd4b39"]
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('stackedChart1'));
    chart.draw(data, options);
	}

	commonService.prototype.initializeSelect2 = function(ele){
		$(ele).select2({
			placeholder: "Select a option",
			width:'253'
		});	
	};
  
	commonService.prototype.initializeDateRange = function(ele){
		$(ele).daterangepicker({
			initialText: 'Selecteer periode',
			presetRanges: [{
			    text: 'Afgelopen 7 dagen', //Last 7 days
			    dateStart: function () {
			        return moment().subtract(7, 'days')
			    },
			    dateEnd: function () {
			        return moment()
			    }
			}, {
			    text: 'Deze week', //This week, Monday up to present day of the week.
			    dateStart: function () {
			        return moment().startOf('week').add(1, 'days')
			    },
			    dateEnd: function () {
			        return moment()
			    }
			}, {
			    text: 'Vorige week', //Previous week. So Monday untill Sunday of the previous week
			    dateStart: function () {
			        return moment().subtract(1, 'weeks').startOf('week')
			    },
			    dateEnd: function () {
			        return moment().subtract(1, 'weeks').endOf('week')
			    }
			}, {
			    text: 'Afgelopen 30 dagen', //Take the last 30 days. Should be the same as the standard view
			    dateStart: function () {
			        return moment().subtract(29, 'days')
			    },
			    dateEnd: function () {
			        return moment()
			    }
			}, {
			    text: 'Vorige maand',
			    dateStart: function () {
			        return moment().subtract(1, 'months').startOf('month')
			    },
			    dateEnd: function () {
			        return moment().subtract(1, 'months').endOf('month')
			    }
			}],
			applyButtonText: "Toepassen",
			applyOnMenuSelect: false,
			widget : function(event, data){console.log(event, data);}
		});
	}
})();