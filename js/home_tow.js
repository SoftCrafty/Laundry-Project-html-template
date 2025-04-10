(function ($) {
    "use strict";
    $(document).ready(function () {
    $('.hero_section_area.home_tow_area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        dots: true,
        speed: 2000,
        easing: 'ease-in-out',
        dotsClass: 'home_two_dots',
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.slick-current .hero_contains .heading').addClass('animated');
    $('.slick-current .hero_contains .paragraph').addClass('animated');

    $('.hero_section_area').on('afterChange', function (event, slick, currentSlide) {
        $('.hero_contains .heading').removeClass('animated'); 
        $('.slick-current .hero_contains .heading').addClass('animated'); 
    });
    $('.hero_section_area').on('afterChange', function (event, slick, currentSlide) {
        $('.hero_contains .sub_heading').removeClass('animated'); 
        $('.slick-current .hero_contains .sub_heading').addClass('animated'); 
    });


$('.testimonial_card_area').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    autoplay: true,
    autoplaySpeed: 3000,
    speed:2000,
    easing: "ease-in-out",

    responsive: [
        {
            breakpoint: 1100,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
        },
        {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
        }
    ]
});


    });
})(jQuery);

$('.collect_area').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    speed: 2000,
    easing: 'ease-in-out',
    dotsClass: 'docts-active-collect',
});