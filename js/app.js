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
            $('header').css('position','static');

        }else{
            $('header').css('position','relative');
        }
    });
});