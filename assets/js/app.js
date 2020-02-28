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

$(document).ready(function(){
    var $item = $('#carouselHousesControls .carousel-item'); 
    var $wHeight = $(window).height();
    $item.eq(0).addClass('active');
    $item.height($wHeight); 
    $item.addClass('full-screen');

    $('#carouselHousesControls img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
        'background-image' : 'url(' + $src + ')',
        'background-color' : $color
    });
    $(this).remove();
    });

    $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
    });

    $('#carouselHousesControls .carousel').carousel({
    interval: 10000,
    pause: "true"
    });
});

$(document).ready(function(){

    var totalItems = $('#carouselHousesControls .carousel-item').length;
    var currentIndex = $('#carouselHousesControls .carousel-item.active').index() + 1;
    
    var down_index;
    $('.num').html(''+currentIndex+'/'+totalItems+'');
    
        $(".carousel-control-next").click(function(){
        currentIndex_active = $('#carouselHousesControls .carousel-item.active').index() + 2;
        if (totalItems >= currentIndex_active)
        {
            down_index= $('#carouselHousesControls .carousel-item.active').index() + 2;
            $('.num').html(''+currentIndex_active+'/'+totalItems+'');
        }
    });
});
