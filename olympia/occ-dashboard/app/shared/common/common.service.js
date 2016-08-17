(function(){
	'use strict'

	angular.module('common.module')
		.service('commonService', commonService);

	commonService.$inject = ['$timeout', '$http', '$q', 'enumApp', '$rootScope'];

	function commonService($timeout, $http, $q, enumApp, $rootScope){

		this.rootScope = $rootScope;
		this.timeout = $timeout;

		this.sendItems = {
			'startDate' : '',
			'endDate' : '',
			'officesList' : []
		};

		this.init = init;
	    this.getRandomMessage = getRandomMessage;
	    this.getDashboardData = getDashboardData;
	    this.dateParser = dateParser;

	    //////////////////////////////////////////////

	    function init(){
	    	this.sendItems = {
				'startDate' : this.sendItems.startDate.length > 0 ? this.sendItems.startDate : "",
				'endDate' : this.sendItems.endDate.length > 0 ? this.sendItems.endDate : "",
				'officesList' : []
			};
	    }

	    function getRandomMessage(){
	      var num = Math.floor(enumApp.RANDOMMESSAGE.length * Math.random());
	      return enumApp.RANDOMMESSAGE[num];
	    }

	    function getDashboardData(){

	      var deffered = $q.defer();

	      $http({
	        url : enumApp.URL + "GetOccDashBoardReports",
	        method : "GET",
	        params : {
	        	'officesList' : checkForEmptyOrNull(this.sendItems.officesList),
	        	'startDate' : checkForEmptyOrNull(this.sendItems.startDate),
	        	'endDate' : checkForEmptyOrNull(this.sendItems.endDate)
	        }
	      })
	      .success(function(data){
	        deffered.resolve(data);       
	      })
	      .error(function(){
	        deffered.reject("Failed to post data");
	      });

	      return deffered.promise;
	    }

	    function dateParser(dateTimeToParse, format){
			if(typeof dateTimeToParse === 'undefined')
				return false;

			var parsed = moment(dateTimeToParse).format("DDMMYYYY");
			return parsed;
		}

		function checkForEmptyOrNull(val){
			if(val !== null && val.length > 0){
				return val;
			}else{
				return null;
			}
		}
	}

  //commonService.prototype.dashboardData = {"kandidatenCcerapportageNumber":2442,"gecontacteerdNumber":1769,"gecontacteerdPercent":72.4,"nietGecontacteeredNumber":673,"nietGecontacteeredPercent":27.6,"eenWerkdagGesproken":0,"eenWerkdagVoiceMail":0,"eenWerkdagPercent":0.0,"tweeWerkdagGesproken":0,"tweeWerkdagVoiceMail":0,"tweeWerkdagPercent":0.0,"langerWerkdagGesproken":0,"langerWerkdagVoiceMail":0,"langerWerkdagPercent":0.0,"passendeKandidatenNumber":2235,"passendeKandidatenCombinedPercent":91.5,"intakegesprekPlaatsgevondenNumber":22,"intakegesprekPlaatsgevondenPercent":1.0,"verdereOpvolgingNumber":1534,"verdereOpvolgingPercent":68.6,"kandidatenVoorgesteldklantNumber":6,"kandidatenVoorgesteldklantPercent":27.3,"sollicitatiegesprekkenIngeplandKlantNumber":4,"sollicitatiegesprekkenIngeplandKlantPercent":18.2,"sollicitatiegesprekkenIngeplandKlantCombinedPercent":66.7,"sollicitatiegesprekkenPlaatsgevondenKlantNumber":0,"sollicitatiegesprekkenPlaatsgevondenKlantPercent":0.0,"sollicitatiegesprekkenPlaatsgevondenKlantCombinedPercent":0.0,"kandidatenGeplaatstNumber":0,"kandidatenGeplaatstPercent":0.0,"kandidatenGeplaatstCombinedPercent":0.0,"kandidatenNietGeplaatstNumber":22,"kandidatenNietGeplaatstPercent":100.0,"kandidatenNietGeplaatstCombinedPercent":0.0,"kandidatenGeplaatstGesprokenChart":0.0,"kandidatenNietGeplaatstGesprokenChart":100.0,"kandidatenGeplaatstVoorgesteldeChart":0.0,"kandidatenNietGeplaatstVoorgesteldeChart":366.7,"uitzendPlaatsingenAangemaaktNumber":0,"uitzendPlaatsingenAangemaaktPercent":0.0,"wsPlaatsingenAangemaaktNumber":0,"wsPlaatsingenAangemaaktPercent":0.0,"totaalAantalPlaatsingenAangemaakt":0,"uitzendplaatsingenMetUrenbriefjeNumber":0,"uitzendplaatsingenMetUrenbriefjePercent":0.0,"wsPlaatsingenGefactureerdNumber":0,"wsPlaatsingenGefactureerdPercent":0.0,"totaalAantalPlaatsingenPlaatsgevonden":0,"contactMomentOneWeekNumberTotal":122,"contactMomentOneWeekNumberActual":2,"contactMomentOneWeekPercent":1.6,"contactMomentOneMaandNumberTotal":72,"contactMomentOneMaandNumberActual":2,"contactMomentOneMaandPercent":2.8,"contactMomentThreeMaandNumberTotal":5,"contactMomentThreeMaandNumberActual":0,"contactMomentThreeMaandPercent":0.0,"contactVanafSixMaandenNumberTotal":8,"contactVanafSixMaandenNumberActual":0,"contactVanafSixMaandenPercent":0.0}

  	commonService.prototype.dashboardData = {};

	commonService.prototype.chartCallBack = function(fn){
			google.charts.setOnLoadCallback(fn);	
	}
	
	commonService.prototype.drawPieChart5 = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['0-39 ‘niet passend', 2],
          ['40-75 ‘passend’', 6],
        ]);

        var options = {
          //title: 'My Daily Activities'
          chartArea : {top:'10', width:'75%', height:'75%'},
          legend : {position:'none'},
          height:'100%',
          width:'100%',
          colors: ['#009a2d', '#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart5'));

        chart.draw(data, options);
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
		var self = this;
		$(ele).select2({
			placeholder: "Select a option",
			width:'253'
		});	

		$(ele).on('change', function (evt) {
		  // Do something
		  var selectedValue = $(ele).val();

		  self.sendItems.officesList = selectedValue;

		  self.rootScope.$broadcast('dateRangePickerChanged');
		});
	};
	commonService.prototype.initializeDateRange = function(ele){
		var self = this,
			last30Day = moment().subtract(29, 'days').toDate(),
			today = moment().toDate();

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
			onChange: callBack,
			setRange : {
				'start' : moment().subtract(29, 'days'),
				'end' : moment()
			},
			widget : function(event, data){console.log(event, data);}
		});

		if(this.sendItems.startDate.length == 0 || this.sendItems.endDate.length == 0){
			$(ele).daterangepicker("setRange", {'start': last30Day, 'end': today});
			callBack();
		}
		else{
			$(ele).daterangepicker("setRange", 
				{
					'start': moment(this.sendItems.startDate, "DDMMYYYY").toDate(), 
					'end': moment(this.sendItems.endDate, "DDMMYYYY").toDate()
				});
		}

		function callBack(){
			var dateRange = $(ele).daterangepicker("getRange"),
				startDate = self.dateParser(dateRange.start, "DDMMYYYY"),
				endDate = self.dateParser(dateRange.end, "DDMMYYYY");

			//set startdate and enddate
			self.sendItems.startDate =startDate;
			self.sendItems.endDate =endDate;

			self.rootScope.$broadcast('dateRangePickerChanged');
		}
	}
})();