$(document).ready(function () {
    var windowHeight = $(window).height();
    var menuBarHeight = $("#menuBar").height();
    var codeContainerHeight = windowHeight - menuBarHeight;

    $(".codeContainer").height(codeContainerHeight+"px");



    $(".toggle").click(function () {
        $(this).toggleClass("selected");

        var activeDiv = $(this).html();

        $("#" + activeDiv + "Container").toggle();

        var showingDivs = $(".codeContainer").filter(function () {
            return($(this).css("display") != "none");
        }).length;

        var width = 100/showingDivs;

        $(".codeContainer").css("width", width + "%");
    });
    
    $(".runButton").click(function () {
        $("iframe").contents().find("html").html('<style>' + $("#css").val() + '</style>' +$("#html").val());

        document.getElementById("resultFrame").contentWindow.eval($("#js").val());

    });
});