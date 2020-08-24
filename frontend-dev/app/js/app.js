document.addEventListener("DOMContentLoaded", function() {

    // Custom JS

});

jQuery(document).ready(function($) { 
    new WOW().init();

    $('.slick-services').slick({
        dots: true
    
    });

    $('.top-information .close-icon').on('click', function(){
        $('.top-information').remove();
        // alert("close click");
    });

    $('.navbar-toggler').on('click', function(){
        if($(this).hasClass('collapsed')){
            $('.navbar-nav').toggleClass('blured-background');
            alert('click open');
        }
    });
});