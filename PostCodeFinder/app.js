/**
 * Created by Kaan on 5.09.2016.
 */
$(document).ready(function () {
    var windowHeight = $(window).height();


    $("#findMyPostcode").click(function (evenr) {
        event.preventDefault();

        var result = 0;

        $(".alert").hide();

        $.ajax({
            type: "GET",
            url: "https://maps.googleapis.com/maps/api/geocode/xml?address=" + encodeURIComponent($('#address').val()) + "&key=API_KEY",
            datatype: "xml",
            success: processXML,
            error: error
        });

        function error() {
            $("#fail").html("I'm sorry. Could not connect to server. Try again!").fadeIn();
        }


        function processXML(xml) {
            $(xml).find("address_component").each(function () {

                if ($(this).find("type").text() == "postal_code") {
                    console.log($(this).find("type").text());
                    $("#success").html("The postalcode you need is <strong>" + $(this).find("long_name").text()).fadeIn() + "</strong>";
                    console.log( $(this).find("long_name").text());
                    result = 1;
                }
            });

            if (result == 0) {
                $("#fail").fadeIn();
            }
        }


    });
});