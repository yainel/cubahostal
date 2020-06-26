var huespedes = 0;

$(document).ready(function () {
    //Guest Adult Counter
    $('.Adultcount').prop('disabled', true);
    $(document).on('click', '.Adultplus', function () {
        $('.Adultcount').val(parseInt($('.Adultcount').val()) + 1);
    });
    $(document).on('click', '.Adultminus', function () {
        $('.Adultcount').val(parseInt($('.Adultcount').val()) - 1);
        if ($('.Adultcount').val() == 0) {
            $('.Adultcount').val(1);
        }
    });

    //Guest Child Counter
    $('.Childrencount').prop('disabled', true);
    $(document).on('click', '.Childrenplus', function () {
        $('.Childrencount').val(parseInt($('.Childrencount').val()) + 1);
    });
    $(document).on('click', '.Childrenminus', function () {
        $('.Childrencount').val(parseInt($('.Childrencount').val()) - 1);
        if ($('.Childrencount').val() <= 0) {
            $('.Childrencount').val(0);
        }
    });

    //Guests Enfant Counter
    $('.Enfantcount').prop('disabled', true);
    $(document).on('click', '.Enfantplus', function () {
        $('.Enfantcount').val(parseInt($('.Enfantcount').val()) + 1);
    });
    $(document).on('click', '.Enfantminus', function () {
        $('.Enfantcount').val(parseInt($('.Enfantcount').val()) - 1);
        if ($('.Enfantcount').val() <= 0) {
            $('.Enfantcount').val(0);
        }
    });

});

//Collapse filter windows
$('.toggleDate').click(function () {
    $('#GuestCollapse').removeClass('show')
});

$('.toggleGuest').click(function () {
    $('#DateCollapse').removeClass('show')
});

$('#guestSave').click(function () {
    $('#GuestCollapse').removeClass('show')
});

$(document).ready(function () {
    $('.month-wrapper').addClass('mx-auto');
});

$(document).on('click', '#dateSave', function () {
    $("#dateButton .default-date").empty();
    $("#dateButton .start-day").empty();
    $("#dateButton .end-day").empty();
    $("#dateButton .date-divider").removeClass("d-none");
    $(".start-day").clone().appendTo("#dateButton .set-start-day").html();
    $(".end-day").clone().appendTo("#dateButton .set-end-day").html();
});

$(document).on('click', '#guestSave', function () {
    var Adultcount = parseInt($('.Adultcount').val());
    var Childrencount = parseInt($('.Childrencount').val());
    var Enfantcount = parseInt($('.Enfantcount').val());

    huespedes = Adultcount + Childrencount;

    $("#guestButton .default-guest").empty();
    $("#guestButton .set-guest-adult").empty();
    $("#guestButton .set-guest-children").empty();
    $("#guestButton .guest-divider").removeClass("d-none");

    if (Childrencount + Enfantcount < 1) {
        $("#guestButton .guest-divider").addClass("d-none");
    }

    if (Adultcount > 1) {
        $("#guestButton .set-guest-adult").html(Adultcount + ' Adultos');
    } else {
        $("#guestButton .set-guest-adult").html(Adultcount + ' Adulto');
    }

    if (Childrencount + Enfantcount == 1) {
        $("#guestButton .set-guest-children").html(Childrencount + Enfantcount + ' Niño');
    }

    if (Childrencount + Enfantcount > 1) {
        $("#guestButton .set-guest-children").html(Childrencount + Enfantcount + ' Niños');
    }
});

$(document).click(function (e) {
    if (!$(e.target).is('#GuestCollapse *')) {
        $('.collapse').collapse('hide');
    }
});

$('.button-all-sliders').on('click', function () {
    $('.lightgallery>a').trigger('click');
});

$('.markerDiv').on('click', function () {
    var checkbox = $(this).children('input[type="checkbox"]');
    checkbox.prop('checked', !checkbox.prop('checked'));
});

//Response
$('.reserva').on('click', function () {
    var fechas = $('#datepicker-filter-button').val();
    fechas = fechas.split(' a ');
    var fechaLlegada = fechas[0];
    var fechaSalida = fechas[1];

    if (huespedes < 1) {
        alert('No ha seleccionado el número de huéspedes.');
    } else if (fechas == '') {
        alert('No ha completado el tiempo de reserva.');
    } else {
        $.getJSON('https://www.cubasaldo.com/tmp/?f=reservas&id_hostal=1&cantidad_huespedes=' + huespedes)
            .done(function (response) {
                alert(
                    'Llegada: ' + fechaLlegada + ' Salida: ' + fechaSalida + ' huespedes: ' + huespedes);
                console.log(response);
            })
            .error(function (error) {
                console.log(error);
            })
            .always(function () {

            });
    }
});
