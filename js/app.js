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

    // $('.navbar-toggler').on('click', function(){
    //     // if($(this).hasClass('collapsed')){
    //     //     $('.slick-prev, .slick-next').css('display','none');

    //     // }else{
    //     //     $('.slick-prev, .slick-next').css('display','static');
    //     // }
    // });
});