$(document).ready(function(){
    $(window).scroll(function(){
        console.log( $(this).scrollTop() );
        if ($(window).scrollTop() >= 344){
            $(".navigation").removeClass("static");
            $(".navigation").addClass("fixed");
        }
        else if ($(window).scrollTop() < 200){
            $(".navigation").addClass("fixed");
            $(".navigation").addClass("static");
        }
    });
});