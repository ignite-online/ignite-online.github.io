(function(app){
	'use strict'

	//CLass
	function prototypeApp(){
		//Constructor
		app.google.charts.load('current', {'packages':['corechart', 'bar']});
	}

	prototypeApp.prototype.init = function(){
	}
	prototypeApp.prototype.chartCallBack = function(fn){
		app.google.charts.setOnLoadCallback(fn);
	}
	prototypeApp.prototype.drawPieChart = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Gecontacteerd',     7],
          ['Neit gecontacteered',      3],
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
	prototypeApp.prototype.drawPieChart1 = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['binnen 1 werkdag', 4],
          ['binnen 2 werkdagen', 3],
          ['binnen 3 werkdagen', 3]
        ]);

        var options = {
          //title: 'My Daily Activities'
          chartArea : {top:'10', width:'75%', height:'75%'},
          legend : {position:'none'},
          height:'100%',
          width:'100%',
          colors: ['#009a2d', '#fda100','#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart.draw(data, options);
	}
	prototypeApp.prototype.drawPieChart2 = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Pool-/intakegesprek gepland', 8],
          ['Pool-/intakegesprek plaatsgevonden', 2],
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
	prototypeApp.prototype.drawPieChart3 = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['% geplaatst', 2],
          ['% afgewezen', 6],
          ['% niet opgevolgd', 2]
        ]);

        var options = {
          //title: 'My Daily Activities'
          chartArea : {top:'10', width:'75%', height:'75%'},
          legend : {position:'none'},
          height:'100%',
          width:'100%',
          colors: ['#009a2d', '#fda100','#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

        chart.draw(data, options);
	}
	prototypeApp.prototype.drawPieChart4 = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['OCC uitzendplaatsingen met uren', 5],
          ['OCC W&S plaatsingen met factuur', 5],
        ]);

        var options = {
          //title: 'My Daily Activities'
          chartArea : {top:'10', width:'75%', height:'75%'},
          legend : {position:'none'},
          height:'100%',
          width:'100%',
          colors: ['#009a2d', '#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart4'));

        chart.draw(data, options);
	}
	prototypeApp.prototype.drawPieChart5 = function(){
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
	prototypeApp.prototype.drawStackedBarChart3 = function(){
		var data = google.visualization.arrayToDataTable([
	        [' ', 'Value', 'Value in %'],
	        ['1e week', 8175000, 8008000],
	        ['1e maand', 3792000, 3694000],
	        ['3 maanden', 2695000, 2896000],
	        ['3 maandelijks', 2099000, 1953000]
	      ]);

		var options = {
			chart: {
			//title: 'Population of Largest U.S. Cities'
			},
			hAxis: {
				title: 'Total Population',
				titlePosition : 'none',
				minValue: 0,
			},
			vAxis: {
				title: 'City'
			},
			bars: 'horizontal',
			legend : {position:'none'},
			colors: ['#ff6412', '#171580']
		};

		var chart3 = new google.charts.Bar(document.getElementById('barchart3'));
		chart3.draw(data, options);
	}
	prototypeApp.prototype.initializeDateRange = function(ele){
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
            applyOnMenuSelect: false
        });
	}
	prototypeApp.prototype.initializePopover = function(ele){
	    $(ele).popover({
	    	html: true
	    });
	};

	//Init
	init();

	function init(){
		var app = new prototypeApp();

		app.chartCallBack(app.drawPieChart);
		app.chartCallBack(app.drawPieChart1);
		app.chartCallBack(app.drawPieChart2);
		app.chartCallBack(app.drawPieChart3);
		app.chartCallBack(app.drawPieChart4);
		app.chartCallBack(app.drawPieChart5);
		app.chartCallBack(app.drawStackedBarChart3);
		app.initializeDateRange('#pickerToUpdate1');
		app.initializePopover('.popoverData');
	}
	
})(window);