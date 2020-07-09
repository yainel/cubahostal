//Disabled Dates
var disabledDates = [];

//Disabled Dates
var allRangeDates = [];

// Returns an array of dates between two dates
var getDatesBetween = function (startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function (days) {
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
$.dateformat = function (dateObject) {
    var d = dateObject;
    var day = d.substr(6, 2);
    var month = d.substr(4, 2);
    var year = d.substr(0, 4);
    var date = year + '-' + month + '-' + day;

    return date;
};

$.ajax({
    url: 'https://www.cubasaldo.com/tmp/?f=reservas&id_hostal=1&cantidad_huespedes=2',
    dataType: 'json',
    async: false,
    success: function (data) {
        $.each(data.reservas, function (i, item) {
            var fl = $.dateformat(item.fecha_llegada);
            var fs = $.dateformat(item.fecha_salida);

            // Get All Range of Dates
            allRangeDates = getDatesBetween(new Date(fl), new Date(fs));

            // Push multiple date arrays into a master array.
            allRangeDates.forEach(function (date) {
                disabledDates.push(date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + (date.getDate())).slice(-2));
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
        hoveringTooltip: function (days, startTime, hoveringTime) {
            if ((days - 1) === 1) {
                return '1 noche ';
            }
            return (days - 1) > 1 ? (days - 1) + ' ' + 'noches' : ' ';
        },
        stickyMonths: true,
        startDate: new Date(),
        minDays: 2,
        selectForward: true,
        showDateFilter: function (time, date) {
            return '<div style="padding:5px;">\
					<span style="font-weight:bold">' + date + '</span>\
					<div style="opacity:0.3;"></div>\
				</div>';
        },
        beforeShowDay: function (d) {
            var year = d.getFullYear(),
                month = ('0' + (d.getMonth() + 1)).slice(-2),
                day = ('0' + (d.getDate())).slice(-2);

            var formatted = year + '-' + month + '-' + day;

            if ($.inArray(formatted, disabledDates) === -1) {
                return [true, '', ''];
            } else {
                return [false, '', 'No disponible'];
            }
        }

    }).bind('datepicker-change', function (event, obj) {
    $('#datepicker-clear').show();
})
    .find('.date-picker-wrapper .month-wrapper table .day').removeClass('real-today');

$('#datepicker-clear').click(function (evt) {
    $(this).hide();
    $('#datepicker-filter-button').data('dateRangePicker').clear();
    evt.stopPropagation();
});

//Next action
var $next = $('#datepicker-filter-inline').find('.next').on('click', function () {
        console.log('capture plugin next action');
        return false;
    }),
    clickNextListener = $._data($next[0], 'events').click[0];

$next.off('click');

$next.click(function () {
    $('.month1').hide('slide', {direction: 'left'}, 100);
    $('.month2').hide('slide', {direction: 'left'}, 100);
    setTimeout(function () {
        clickNextListener.handler();
    }, 50);
    $('.month1').show('slide', {direction: 'right'}, 100);
    $('.month2').show('slide', {direction: 'right'}, 100);
});

//Prev action
var $prev = $('#datepicker-filter-inline').find('.prev').on('click', function () {
        console.log('capture plugin prev action');
        return false;
    }),
    clickPrevListener = $._data($prev[0], 'events').click[0];

$prev.off('click');

$prev.click(function () {
    $(".month1").hide('slide', {direction: 'right'}, 100);
    $(".month2").hide('slide', {direction: 'right'}, 100);
    setTimeout(function () {
        clickPrevListener.handler();
    }, 50);
    $('.month1').show('slide', {direction: 'left'}, 100);
    $('.month2').show('slide', {direction: 'left'}, 100);
});
