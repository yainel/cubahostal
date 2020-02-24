$('#BookingDateRange').datepicker({
    todayHighlight: true,
    autoclose: true,
    format: 'D, dd MM',
    startDate: "today",
    clearBtn: true,
    }).on('changeDate', function (ev) {
        $("#end").focus();
    });
    $('#end').datepicker({
    startDate: $("#start").datepicker(),
});

$(document).ready(function(){
    $('.Adultcount').prop('disabled', true);
    $(document).on('click','.Adultplus',function(){
        $('.Adultcount').val(parseInt($('.Adultcount').val()) + 1 );
    });
    $(document).on('click','.Adultminus',function(){
        $('.Adultcount').val(parseInt($('.Adultcount').val()) - 1 );
            if ($('.Adultcount').val() == 0) {
                $('.Adultcount').val(1);
            }
        });
});

$(document).ready(function(){
    $('.Childrencount').prop('disabled', true);
    $(document).on('click','.Childrenplus',function(){
        $('.Childrencount').val(parseInt($('.Childrencount').val()) + 1 );
    });
    $(document).on('click','.Childrenminus',function(){
        $('.Childrencount').val(parseInt($('.Childrencount').val()) - 1 );
            if ($('.Childrencount').val() <= 0) {
                $('.Childrencount').val(0);
            }
        });
});

$(document).ready(function(){
    $('.Enfantcount').prop('disabled', true);
    $(document).on('click','.Enfantplus',function(){
        $('.Enfantcount').val(parseInt($('.Enfantcount').val()) + 1 );
    });
    $(document).on('click','.Enfantminus',function(){
        $('.Enfantcount').val(parseInt($('.Enfantcount').val()) - 1 );
            if ($('.Enfantcount').val() <= 0) {
                $('.Enfantcount').val(0);
            }
        });
});

$('.toggleDate').click(function() {
    $('#GuestCollapse').removeClass('show')
});

$('.toggleGuest').click(function() {
    $('#DateCollapse').removeClass('show')
});

