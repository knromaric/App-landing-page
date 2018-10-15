$(document).ready(function(){

    $('.card-body').hover(function () {
            $(this).animate({
                marginTop: "-3%",
            }, 200);
        }, function () {
            $(this).animate({
                marginTop: "0%",
            }, 200);
        }
    );
});