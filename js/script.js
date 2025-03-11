$(document).ready(function () {

    // Sidebar (Off-Canvas Menu) Toggle
    $(".mobile-menu-toggle-btn, .mobile-menu-bar").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").addClass("active");
    });

    $(".menu-sidebar-close-btn, .cross_btn, .body-overlay").on("click", function () {
        $(".menu-sidebar-area, .body-overlay").removeClass("active");
    });
    

    // Sticky Navbar
    function addStickyNav(navSelector, scrollOffset = 120, activeClass = 'active') {
        let nav = $(navSelector);
        $(window).on('scroll', function () {
            $(window).scrollTop() > scrollOffset ? nav.addClass(activeClass) : nav.removeClass(activeClass);
        });
    }
    addStickyNav('#top_nav');
    $(window).on("scroll", function () {
        $("#header-area").toggleClass("scrolled", $(window).scrollTop() > 100);
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


    gsap.timeline({ repeat: -1, repeatDelay: 0 })
        .to(".brand-marquee-wrapper", {
            x: "-100%", 
            duration: 10, 
            ease: "none", 
        })
        .set(".brand-marquee-wrapper", { x: "100%" });

    // document.querySelectorAll(".single_what_do").forEach(item => {
    //     item.addEventListener("mouseenter", () => {
    //         gsap.to(item.querySelector("img"), {
    //             opacity: 1,
    //             rotation: 0,
    //             x: 10,
    //             duration: 0.5,
    //             ease: "power2.out"
    //         });
    //     });

    //     item.addEventListener("mouseleave", () => {
    //         gsap.to(item.querySelector("img"), {
    //             opacity: 0,
    //             rotation: -20,
    //             x: 0,
    //             duration: 0.5,
    //             ease: "power2.out"
    //         });
    //     });
    // });


    

});




