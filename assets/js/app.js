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

$(document).on('click','#dateSave',function(){
    $( "#dateButton .default-date" ).empty();
    $( "#dateButton .start-day" ).empty();
    $( "#dateButton .end-day" ).empty();
    $( "#dateButton .date-divider" ).removeClass("d-none");
    $( ".start-day" ).clone().appendTo( "#dateButton .set-start-day" ).html();
    $( ".end-day" ).clone().appendTo( "#dateButton .set-end-day" ).html();
});

$(document).on('click','#guestSave',function(){

    var Adultcount = parseInt($('.Adultcount').val()) ;
    var Childrencount = parseInt($('.Childrencount').val());
    var Enfantcount = parseInt($('.Enfantcount').val());

    $("#guestButton .default-guest").empty();
    $("#guestButton .set-guest-adult").empty();
    $("#guestButton .set-guest-children").empty();
    $("#guestButton .guest-divider").removeClass("d-none");

    if(Childrencount + Enfantcount < 1 ) {
        $("#guestButton .guest-divider").addClass("d-none");
    }
    

    if (Adultcount > 1 ) {
        $("#guestButton .set-guest-adult").html(Adultcount + ' Adultos');
    }   else {
        $("#guestButton .set-guest-adult").html(Adultcount + ' Adulto');
    }

    if(Childrencount + Enfantcount == 1 ) {
        $("#guestButton .set-guest-children").html(Childrencount + Enfantcount + ' Niño');
    }

    if(Childrencount + Enfantcount > 1 ) {
        $("#guestButton .set-guest-children").html(Childrencount + Enfantcount + ' Niños');
    }
});

$(document).click(function(e) {
	if (!$(e.target).is('#GuestCollapse *')) {
    	$('.collapse').collapse('hide');	    
    }
});