(function(){
	'use strict'

	angular.module('opvolging.module')
		.service('opvolgingService', opvolgingService);

	opvolgingService.$inject = ['commonService'];

	function opvolgingService(commonService){
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

	opvolgingService.prototype.drawPieChart = function(a, b){
		return function(){
			var data = google.visualization.arrayToDataTable([
	          ['Task', 'Hours per Day'],
	          ['Gecontacteerd',     a],
	          ['Niet gecontacteered',      b],
	        ]);

	        var options = {
	          //title: 'My Daily Activities'
	          chartArea : {top:'10', width:'75%', height:'75%'},
	          legend : {position:'none'},
	          height:'100%',
	          width:'100%',
	          colors: ['#009a2d', '#dd4b39']
	        };

	        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	        chart.draw(data, options);	
		}
	}

	opvolgingService.prototype.drawPieChart1 = function(a,b,c){
		return function(){
			var data = google.visualization.arrayToDataTable([
	          ['Task', 'Hours per Day'],
	          ['Binnen 1 werkdag', a],
	          ['Binnen 2 werkdagen', b],
	          ['Langer dan 2 werkdagen', c]
	        ]);

	        var options = {
	          //title: 'My Daily Activities'
	          chartArea : {top:'10', width:'75%', height:'75%'},
	          legend : {position:'none'},
	          height:'100%',
	          width:'100%',
	          colors: ['#009a2d', '#e88275', '#dd4b39']
	        };

	        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

	        chart.draw(data, options);
		}
	}

	opvolgingService.prototype.drawPieChart2 = function(a, b){
		return function(){
			var data = google.visualization.arrayToDataTable([
	          ['Task', 'Hours per Day'],
	          ['Pool-/intakegesprek plaatsgevonden', a],
	          ['Geenverdereopvolging', b],
	        ]);

	        var options = {
	          //title: 'My Daily Activities'
	          chartArea : {top:'10', width:'75%', height:'75%'},
	          legend : {position:'none'},
	          height:'100%',
	          width:'100%',
	          colors: ['#009a2d', '#dd4b39']
	        };

	        var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

	        chart.draw(data, options);
		}
	}

	opvolgingService.prototype.drawPieChart3 = function(a, b, c){
		return function(){
			var data = google.visualization.arrayToDataTable([
	          ['Task', 'Hours per Day'],
	          ['Kandidaten geplaatst', a],
	          ['Kandidaten niet geplaatst', b],
	        ]);

	        var options = {
	          title: 'Gesproken kandidaten geplaatst',
	          titleTextStyle : {
	            fontSize : 12,
	          },
	          chartArea : {top:'20', width:'80%', height:'100%'},
	          legend : {position:'none'},
	          height:'100%',
	          width:'100%',
	        };

	        if(c === 'disable'){
        		options.colors = ['#ccc']
	        }else{
	        	options.colors = ['#009a2d', '#dd4b39']
	        }

	        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

	        chart.draw(data, options);	
		}
	}

	opvolgingService.prototype.drawPieChart7 = function(a, b, c){
		return function(){
			var data = google.visualization.arrayToDataTable([
				['Task', 'Hours per Day'],
				['Kandidaten geplaatst', a],
				['Kandidaten niet geplaatst', b],
			]);

			 var options = {
	          title: 'Voorgestelde kandidaten geplaatst',
	          titleTextStyle : {
	            fontSize : 12,
	          },
	          chartArea : {top:'20', width:'80%', height:'100%'},
	          legend : {position:'none'},
	          height:'100%',
	          width:'100%',
	        };

	        if(c === 'disable'){
        		options.colors = ['#ccc']
	        }else{
	        	options.colors = ['#009a2d', '#dd4b39']
	        }

			var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

			chart.draw(data, options);
		}	
	}

	opvolgingService.prototype.stackedBarChart = function(a, b, c){
		return function(){
			console.log(a, b);
			var data = google.visualization.arrayToDataTable([
		      ['year', 'Uitzendplaatsingen met urenbriefje', 'W&S plaatsingengefactureerd',
		       { role: 'annotation' } ],
		      ['Plaatsingen', a, b, ''],
		    ]);

		    var options = {
		      width:'100%',
		      height: '100%',
		      legend: { position: 'top', maxLines: 3 },
		      bar: { groupWidth: '75%' },
		      isStacked: true,
		      colors: ["#171580", "#cccccc"]
		    };

		    if(c === 'disable'){
        		options.colors = ['#ccc']
	        }else{
	        	options.colors = ["#171580", "#cccccc"]
	        }

		    var chart = new google.visualization.ColumnChart(document.getElementById('stackedChart'));
		    chart.draw(data, options);	
		}
	}

})();