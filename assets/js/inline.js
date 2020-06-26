//Disabled Dates
var disabledDates = [];

//Disabled Dates
var allRangeDates = [];

// Returns an array of dates between two dates
var getDatesBetween = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
};

// Formats a yyyymmdd date to a yyyy-mm-dd
$.dateformat = function(dateObject) {
    var d = dateObject;
    var day = d.substr(6, 2);
    var month = d.substr(4, 2);
    var year = d.substr(0, 4);
    var date = year + '-' + month + '-' + day;

    return date;
};

$.ajax({
	url: 'http://localhost/cubahostal/code/assets/js/cubasaldo.json',
	dataType: 'json',
    async: false,
	success: function(data) {
		$.each(data.reservas, function(i, item) {
			var fl = $.dateformat(item.fecha_llegada);
			var fs = $.dateformat(item.fecha_salida);

			// Get All Range of Dates
            allRangeDates = getDatesBetween(new Date(fl), new Date(fs));

			// Push multiple date arrays into a master array.
            allRangeDates.forEach(function(date) {
                disabledDates.push( date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2));
            });
		});
	}
});

$('#datepicker-filter-button').dateRangePicker(
{
	inline: true,
	container: '#datepicker-filter-inline',
	alwaysOpen: true,
	language: 'es',
	format: 'MMM D, YYYY',
	// separator: ' ',
	hoveringTooltip: function(days, startTime, hoveringTime)
	{
		if ((days-1) == 0) {
			return '1 noche ';
		}
		if ((days-1) <= 1) {
			return (days-1) + ' noche';
		}
		return (days-1) > 1 ? (days-1) + ' ' + 'noches' : ' ';
	},
	maxDays: 30,
	startDate: new Date(),
	selectForward: true,
	showDateFilter: function(time, date)
	{
		return '<div style="padding:5px;">\
					<span style="font-weight:bold">'+date+'</span>\
					<div style="opacity:0.3;"></div>\
				</div>';
	},
	beforeShowDay: function(d) {
		var year = d.getFullYear(),
			month = ('0' + (d.getMonth() + 1)).slice(-2),
			day = ('0' + (d.getDate())).slice(-2);

		var formatted = year + '-' + month + '-' + day;

		if ($.inArray(formatted, disabledDates) === -1) {
			return [true,'',''];
		} else{
			return [false,'','No disponible'];
		}
	}

});

$('#datepicker-clear').click(function(evt)
{
    evt.stopPropagation();
    $('#datepicker-filter-button').data('dateRangePicker').clear();
});