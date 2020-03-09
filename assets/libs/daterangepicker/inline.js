$(function()
{
	$('#datepicker-filter-button').dateRangePicker(
		{
			inline: true,
			container: '#datepicker-filter-inline',
			alwaysOpen: true,
			language: 'es',
			format: 'MMM D',
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
			//minDays: 2,
			startDate: new Date(),
			selectForward: true,
			showDateFilter: function(time, date)
			{
				return '<div style="padding:0 5px;">\
							<span style="font-weight:bold">'+date+'</span>\
							<div style="opacity:0.3;"></div>\
						</div>';
			},
	
		});

		

});
