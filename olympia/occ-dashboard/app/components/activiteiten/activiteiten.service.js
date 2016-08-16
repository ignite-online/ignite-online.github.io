(function(){
	'use strict'

	angular.module('activiteiten.module')
		.service('activiteitenService', activiteitenService);

	activiteitenService.$inject = ['commonService'];

	function activiteitenService(commonService){
		var vm = this;

		vm.isKandidatenShow = isKandidatenShow;

		///////////////////////

		function isKandidatenShow(){
			var response = commonService.sendItems,
				previousMonth = commonService.dateParser(moment().subtract(2, 'months')), //Last Month
				currentMonth = moment().subtract(0, 'months'),
				end = moment(response.endDate, "DDMMYYYY"), //response.endDate;
				start = moment(response.startDate, "DDMMYYYY");

			//Check if enddate or startdate is empty
			if(response.startDate === "" || response.endDate === ""){
				return false;
			}

			//Condition: 
			//- The selected date range is at least 3 months
			//- The newest date is at least 1 month old"
			if(end.diff(start, "months") >= 2 && currentMonth.diff(end, 'months') >=1){
				return true;
			}else{
				return false;
			}
		}
	}

	activiteitenService.prototype.stackedBarChart1 = function(a, b, c, d){
		return function(){
			var data = google.visualization.arrayToDataTable([
		      ['time', 'Verricht', 'Niet verricht',
		       { role: 'annotation' } ],
		      ['1e Wk', a, (100-a),''],
		      ['1e Mnd', b, (100-b),''],
		      ['3e Mnd', c, (100-c),''],
		      ['>6Mnd', d, (100-d),'']
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
	}

	activiteitenService.prototype.columnChart = function(a, b, c, d, e){
		return function(){
			var data = google.visualization.arrayToDataTable([
		      ['', ''],
		      ['Gespreksdatum', a],
		      ['Voorsteldatum', b],
		      ['Sollicitatieingevoerd', c],
		      ['Sollicitatiedatum', d],
		      ['Plaatsingsdatum_normaal Plaatsingdatum_wervings', e]
		    ]);

		    var options = {
		      width:'100%',
		      height: '100%',
		      legend: { position: 'none'},
		      colors: ["#009a2d", "#dd4b39"]
		    };
		    var chart = new google.visualization.ColumnChart(document.getElementById('columnChart'));
		    chart.draw(data, options);	
		}
	}

	activiteitenService.prototype.columnChart1 = function(a, b){
		return function(){
			var data = google.visualization.arrayToDataTable([
		      ['', '', {role: 'style'}],
		      ['Uitzendplaatsingen aangemaakt', a, "#171580"],
		      ['W&S plaatsingen aangemaakt', b, "#cccccc"]
		    ]);

		    var options = {
		      width:'100%',
		      height: '100%',
		      legend: { position: 'none'}
		    };
		    var chart = new google.visualization.ColumnChart(document.getElementById('columnChart1'));
		    chart.draw(data, options);	
		}
	}
})();