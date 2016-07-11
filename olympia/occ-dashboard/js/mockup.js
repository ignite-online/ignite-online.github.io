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
          ['Niet gecontacteered',      3],
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
          ['Binnen 1 werkdag', 4],
          ['Binnen 2 werkdagen', 3],
          ['Langer dan 2 werkdagen', 3]
        ]);

        var options = {
          //title: 'My Daily Activities'
          chartArea : {top:'10', width:'75%', height:'75%'},
          legend : {position:'none'},
          height:'100%',
          width:'100%',
          colors: ['#009a2d', '#dd4b39', '#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

        chart.draw(data, options);
	}
	prototypeApp.prototype.drawPieChart2 = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Pool-/intakegesprek plaatsgevonden', 2],
          ['Geenverdereopvolging', 2],
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
          ['Kandidaten geplaatst', 4],
          ['Kandidaten niet geplaatst', 6],
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
          colors: ['#009a2d', '#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart3'));

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
  prototypeApp.prototype.drawPieChart7 = function(){
    var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Kandidaten geplaatst', 8],
          ['Kandidaten niet geplaatst', 6],
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
          colors: ['#009a2d', '#dd4b39']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart7'));

        chart.draw(data, options);
  }
  prototypeApp.prototype.stackedBarChart = function(){
    var data = google.visualization.arrayToDataTable([
        ['year', 'Uitzendplaatsingen met urenbriefje', 'W&S plaatsingengefactureerd',
         { role: 'annotation' } ],
        ['Plaatsingen', 10, 18, ''],
      ]);

      var options = {
        width:'100%',
        height: '100%',
        legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true,
        colors: ["#171580", "#cccccc",]
      };
      var chart = new google.visualization.ColumnChart(document.getElementById('stackedChart'));
      chart.draw(data, options);
  }
  prototypeApp.prototype.stackedBarChart1 = function(){
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
            applyOnMenuSelect: false,
            widget : function(event, data){console.log(event, data);}
        });
	}
	prototypeApp.prototype.initializePopover = function(ele){
	    $(ele).popover({
	    	html: true
	    });
	}
  prototypeApp.prototype.initializeSelect2 = function(ele){
      $(ele).select2({
        placeholder: "Select a option",
        width:'253'
      });
  }

	//Init
	init();

	function init(){
		var app = new prototypeApp();

		app.chartCallBack(app.drawPieChart);
		app.chartCallBack(app.drawPieChart1);
		app.chartCallBack(app.drawPieChart2);
		app.chartCallBack(app.drawPieChart3);
		app.chartCallBack(app.drawPieChart5);
    app.chartCallBack(app.drawPieChart7);
    app.chartCallBack(app.stackedBarChart);
    app.chartCallBack(app.stackedBarChart1);
		app.initializeDateRange('.calenderRange');
		app.initializePopover('.popoverData');

    app.initializeSelect2('.multiSelectOption');
	}
	
})(window);