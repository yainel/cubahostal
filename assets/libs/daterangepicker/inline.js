$(function()
{
	$('#datepicker-filter-button').dateRangePicker(
		{
			inline: true,
			container: '#datepicker-filter-inline',
			alwaysOpen:true,
			language: 'es',
			format: 'MMM D',
	
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
