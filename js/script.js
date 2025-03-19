$(document).ready(function () {

    // Sidebar (Off-Canvas Menu) Toggle
    $(".mobile-menu-toggle-btn, .mobile-menu-bar").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").addClass("active");
    });

    $(".menu-sidebar-close-btn, .cross_btn, .body-overlay").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").removeClass("active");
    });
    

    // Sticky Navbar
    function addStickyNav(navSelector, scrollOffset = 200, activeClass = 'active') {
        let nav = $(navSelector);
        $(window).on('scroll', function () {
            $(window).scrollTop() > scrollOffset ? nav.addClass(activeClass) : nav.removeClass(activeClass);
        });
    }
    addStickyNav('#top_nav');
    $(window).on("scroll", function () {
        $("#header_area").toggleClass("scrolled", $(window).scrollTop() > 100);
    });


document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtns = document.querySelectorAll(".dropdown_btn");

    dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const dropdown = this.parentElement.nextElementSibling;

            if (dropdown.classList.contains("active")) {
                dropdown.classList.remove("active");
                this.innerHTML = '<i class="fal fa-plus"></i>';
            } else {
               
                document.querySelectorAll(".dropdown").forEach((drop) => drop.classList.remove("active"));
                document.querySelectorAll(".dropdown_btn i").forEach((icon) => icon.classList.replace("fa-minus", "fa-plus"));

 
                dropdown.classList.add("active");
                this.innerHTML = '<i class="fal fa-minus"></i>';
            }
        });
    });
});

    $('.hero_section_area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });
 
    $(document).ready(function () {
        var $slider = $('.cleaning_container_area');

        $slider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            dots: true,
            dotsClass: 'container_area docts-active',
            responsive: [
                {
                    breakpoint: 1190,
                    settings: { slidesToShow: 3, slidesToScroll: 1 }
                },
                {
                    breakpoint: 924,
                    settings: { slidesToShow: 2, slidesToScroll: 1 }
                },
                {
                    breakpoint: 600,
                    settings: { slidesToShow: 1, slidesToScroll: 1 }
                }
            ]
        });

        $(window).on('resize', function () {
            $slider.slick('refresh');
        });
    });

   
    $(document).ready(function () {
        var $slider = $('.customers_reviews_wrapper');

        function initSlick() {
            if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
            }

            $slider.slick({
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
        }

        initSlick();

        $(window).on('resize', function () {
            initSlick();
        });
    });


})

gsap.from(".header_contact_area .social_media span",{
    x: -200,
    opacity: 0,
    duration:1,
    delay: 0.5,
})
gsap.from(".header-area .logo a",{
    x: -200,
    display: "none",
        duration: 1,
    delay: 0.3,
})

gsap.from(".header-area .btn_wrapper",{
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
 let tl = gsap.timeline();
tl.from(".header_contact_area .social_media li, .review_card_wapper li",{
         y: 50,
         opacity: 0,
         duration: 0.5,
         delay: 0.5,
         stagger:0.1
 })
 
 let ctl = gsap.timeline();
ctl.from(".contact_info_wrapper, .review_card_wapper p",{
         y: -100,
         opacity: 0,
         duration: 1,
         delay: 0.2,
         stagger:0.3
 })
 let menutl = gsap.timeline();
menutl.from(".header-area .main_menu li",{
    // y:30,
    opacity:0,
    duration:1,
    delay:0.4,
    stagger:0.1
})
gsap.from(".sub_heading h4",{
    x:-290,
    duration:1,
    delay:0.6,
    opacity:0,

})

let hedingh1 = gsap.timeline();
hedingh1.from(".heading h1",{
    x:-400,
    opacity:0,
    duration:2,
    delay:0.5,
    stagger:0.4,
})

let pictl = gsap.timeline();
pictl.from(".hero_user_meta img",{
    x: 100,
    opacity:0,
    duration: 1,
    delay:0.5,
    stagger: 0.2
})







$(document).ready(function () {
    // Tab Active Class Toggle
    $(".tab").click(function () {
        $(".tab").removeClass("active");
        $(this).addClass("active");
    });
});