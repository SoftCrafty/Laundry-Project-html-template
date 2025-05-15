(function ($) {
    "use strict";

    var windowOn = $(window);
    $(document).ready(function () {


        windowOn.on('load', function () {
        });


        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });


        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });


        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });


        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });


        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

    // ---------------------------------
        // Post Gallery Slider
        $('.post-gallery').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            autoplaySpeed: 4000,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            speed: 2000,
            easing: 'ease-in-out',
        });
        // Cleaning Slider
        var $cleaningSlider = $('.cleaning_container_area');
        $cleaningSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            dotsClass: 'container_area docts-active',
            speed: 2000,
            easing: 'ease-in-out',
            responsive: [
                { breakpoint: 1190, settings: { slidesToShow: 3 } },
                { breakpoint: 924, settings: { slidesToShow: 2 } },
                { breakpoint: 600, settings: { slidesToShow: 1 } }
            ]
        });
        // Review Slider
        var $reviewSlider = $('.customers_reviews_wrapper');
        function initReviewSlider() {
            if ($reviewSlider.hasClass('slick-initialized')) {
                $reviewSlider.slick('unslick');
            }
            $reviewSlider.slick({
                slidesToShow: 3.55,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 0,
                speed: 3000,
                cssEase: "linear",
                infinite: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                responsive: [
                    { breakpoint: 1025, settings: { slidesToShow: 2 } },
                    { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]
            });
        }
        initReviewSlider();
        $(window).on('resize', initReviewSlider);
        // Tab Active Class Toggle
        $(document).on("click", ".tab", function () {
            $(".tab").removeClass("active");
            $(this).addClass("active");
        });
        // Scroll-triggered Counter Animation
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(Math.round(counter.text()) + suffix);
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });
        // Hero Section Slider
        $('.hero_section_area').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            fade: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            speed: 1000,
            cssEase: 'ease-in-out',
        });
        $('.slick-current .hero_contains .heading').addClass('animated');
        $('.slick-current .hero_contains .sub_heading').addClass('animated');
        $('.hero_section_area').on('afterChange', function (event, slick, currentSlide) {
            $('.hero_contains .heading, .hero_contains .sub_heading').removeClass('animated');
            $('.slick-current .hero_contains .heading, .slick-current .hero_contains .sub_heading').addClass('animated');
        });
        $('.testimonial_card_area').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            easing: "ease-in-out",
            responsive: [
                { breakpoint: 1100, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 1 } }
            ]
        });
        $(document).on("mouseenter", ".categories_area.style_1 ul li a", function () {
            $(this).find('.download_btn img').attr('src', './images/service/icon3.png');
            $(this).find('.pdf_btn img').attr('src', './images/service/icon5.png');
        });
        $(document).on("mouseleave", ".categories_area.style_1 ul li a", function () {
            $(this).find('.download_btn img').attr('src', './images/service/icon2.png');
            $(this).find('.pdf_btn img').attr('src', './images/service/icon4.png');
        });
        $(".progress-fill").each(function (index) {
            let bar = $(this);
            let value = bar.data("value");
            let valueText = $(".progress-value").eq(index);
            gsap.to(bar, {
                width: value + "%",
                duration: 2,
                ease: "power2.out"
            });
            gsap.to(valueText[0], {
                innerHTML: value + "%",
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out"
            });
        });
        // FAQ Toggle
        const $faqs = $(".faq");

        if ($faqs.length > 1) {
            $faqs.eq(1).addClass("active");
            $faqs.eq(1).find(".answer").css("max-height", $faqs.eq(1).find(".answer")[0].scrollHeight + "px");
            $faqs.eq(1).find(".icon").text("−");
        }
        $(document).on("click", ".faq", function () {
            const $this = $(this);
            const $answer = $this.find(".answer");
            const $icon = $this.find(".icon");
            if (!$this.hasClass("active")) {
                $faqs.removeClass("active").find(".answer").css("max-height", "0");
                $faqs.find(".icon").text("+");
                $this.addClass("active");
                $answer.css("max-height", $answer[0].scrollHeight + "px");
                $icon.text("−");
            } else {
                $this.removeClass("active");
                $answer.css("max-height", "0");
                $icon.text("+");
            }
        });

        // Remove preloader after page load
       
        // Collect Area Slider
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
        // Video Popup
        $('.playBtn').magnificPopup({
            type: 'iframe',
            disableOn: 700,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
          
    });
        $(window).on("load", function () {
            const preloader = document.querySelector(".preloader_area");
            preloader.style.transition = "all 0.5s ease";
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 300);
        });
   
})(jQuery);
