/**
 * Created by Kaan on 5.09.2016.
 */
$(document).ready(function () {
    var windowHeight = $(window).height();

    $(".container").css("padding-top", windowHeight / 5 + "px");

    $("#findMyWeather").click(function (event) {
        event.preventDefault();

        $('.alert').hide();

        if ($('#city').val() != "") {

            $.get("scraper.php?city=" + $('#city').val(), function (data) {

                if (data == "") {
                    $('#fail').html(data).fadeIn();
                } else {
                    $('#success').html(data).fadeIn();
                }
            })
        } else {
            $('#noCity').fadeIn();
        }
    });
});