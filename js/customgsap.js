// ✅ Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// ✅ Header Social Media Span
gsap.from(".header_contact_area .social_media span", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

// ✅ Header Logo
gsap.from(".header-area .logo a", {
    x: -200,
    display: "none", 
    duration: 1,
    delay: 0.3,
});

// ✅ Header Button Wrapper
gsap.from(".header-area .btn_wrapper", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});

// ✅ Header Social Media List Timeline
let tl = gsap.timeline();
tl.from(".header_contact_area .social_media li", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1,
});

// ✅ Contact Info & Review Card Wrapper
let ctl = gsap.timeline();
ctl.from(".contact_info_wrapper, .review_card_wapper p", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.3,
});

// ✅ Header Main Menu
let menutl = gsap.timeline();
menutl.from(".header-area .main_menu li", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    stagger: 0.1,
});

// ✅ Sub Heading
gsap.from(".sub_heading h4", {
    x: -290,
    duration: 1,
    delay: 0.6,
    opacity: 0,
});

// ✅ Heading H1
let hedingh1 = gsap.timeline();
hedingh1.from(".heading h1", {
    x: -400,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    stagger: 0.4,
});

// ✅ Hero User Meta Image
let pictl = gsap.timeline();
pictl.from(".hero_user_meta img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2,
});



// ✅ H2 Headings Scroll Animation
document.querySelectorAll("h2").forEach((h2) => {
    gsap.from(h2, {
        x: -100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: h2,
            start: "top 80%",
            toggleActions: "play none none none",
        },
    });
});

// ✅ Blog News Section (Scroll)
// gsap.from(".blog_news_contains", {
//     x: -400,
//     opacity: 0,
//     duration: 2,
//     stagger: 0.5,
//     scrollTrigger: {
//         trigger: ".blog_news_section",
//         start: "top 80%",
//         end: "top 0%",
//         toggleActions: "play none none none",
//     },
// });
gsap.registerPlugin(ScrollTrigger);

// LEFT theke asbe (style_1)
gsap.from(".price_packages_card_wrapper", {
    x: -400,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    rotate: 70,
    scrollTrigger: {
        trigger: ".price_packages_card_area",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
    },
});
gsap.from(".about_card_wrapper", {
    x: -400,
    opacity: 0,
    rotate: 360,
    duration: 1.5,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".about_counting_card_area",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
    },
});
gsap.from(".counting_info", {
    x: -200,
    opacity: 0,
    rotate: 360,
    duration: 2,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".counting_info_wrapper",
        start: "top 80%",
        toggleActions: "play none none none",
        // markers: true,
    },
});
gsap.from(".service_icon_1", {
    x: -100,
    opacity: 0,
    rotate: 360,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".service_card_img",
        start: "top 90%",
        toggleActions: "play none none none",
        // markers: true,
    },
});
gsap.to(".about_page_overly_card",{
    x: 150,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"

})


// Initialize GSAP ScrollTrigger



// ✅ Pricing Card Section (Scroll)
// let boxlt = gsap.timeline();
// boxlt.from(".price_packages_card_wrapper", {
//     x: -200,
//     duration: 2,
//     scrollTrigger: {
//         trigger: ".blog_news_section",
//         start: "top 80%",
//         end: "top 0%",
//         toggleActions: "play none none none",
//     },
// });

// ✅ Optional (p and img scroll animations, uncomment if needed)
/*
document.querySelectorAll("p").forEach((p) => {
    gsap.from(p, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        scrollTrigger: {
            trigger: p,
            start: "top 85%",
            toggleActions: "play none none none",
        }
    });
});

*/
document.querySelectorAll(".reveal_image img").forEach((img) => {
    gsap.from(img, {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none none",
        }
    });
});

gsap.from(".blog_news_contains", {
    scrollTrigger: { trigger: ".blog_news_container", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.3,
});
gsap.from(".packages_title_wrapper", {
    scrollTrigger: { trigger: ".packages_contains", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.3,
});
gsap.from(".premium_service_info", {
    scrollTrigger: { trigger: ".premium_service_wrapper", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.4,
});
gsap.from(".team_member_card_wrapper", {
    scrollTrigger: { trigger: ".team_member_card_area", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.4,
});
gsap.from(".blog_news_card", {
    scrollTrigger: { trigger: ".blog_news_card_wrapper", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, x: 50, duration: 2, stagger: 0.4,
});
gsap.from(".principle_text_wrapper", {
    scrollTrigger: { trigger: ".principle_text_area", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 2, stagger: 0.4,
});
gsap.from(".principle_img_wrapper", {
    scrollTrigger: { trigger: ".principle_img_wrapper", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, x: -300, duration: 2, stagger: 0.4,
});
gsap.from(".faq_card_wrapper", {
    scrollTrigger: { trigger: ".faq_card_wrapper", start: "top 60%", toggleActions: "play none none reverse" },
    opacity: 0, x: -300, duration: 2, stagger: 0.4,
});
gsap.from(".faq", {
    scrollTrigger: { trigger: ".faq_area", start: "top 60%", toggleActions: "play none none reverse" },
    opacity: 0, x: 300, duration: 2, stagger: 0.4,
});
gsap.from(".sidebar_wrapper", {
    scrollTrigger: { trigger: ".sidebar_wrapper", start: "top 70%", toggleActions: "play none none reverse" },
    opacity: 0, y: 100, duration: 2, stagger: 0.7,
});
gsap.from(".blog_details_summery", {
    scrollTrigger: { trigger: ".blog_details_summery", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 100, duration: 2, stagger: 0.7,
});
gsap.from(".founder_img_wrapper img", {
    scrollTrigger: { trigger: ".founder_img_wrapper", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, x: -100, duration: 2, stagger: 0.3,
});
gsap.from(".founder_info_wrapper ul li", {
    scrollTrigger: { trigger: ".founder_img_wrapper", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, x: 100, duration: 1, stagger: 0.3,
});
gsap.from(".blog_tag_wrapper ul li",{
    scrollTrigger: { trigger: ".blog_tag_social_area", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, x: 100, duration: 1, stagger: 0.3,
});
gsap.from(".blog_social_wrapper ul li",{
    scrollTrigger: { trigger: ".blog_tag_social_area", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 30, duration: 1, stagger: 0.3,
});

gsap.from(".founder_info_wrapper h4, .founder_info_wrapper h5, .founder_info_wrapper p", {
    scrollTrigger: { trigger: ".founder_info_wrapper", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 40, duration: 1, stagger: 0.3,
});

// ✅ Check List Area (on scroll)
let checktl = gsap.timeline({
    scrollTrigger: {
        trigger: ".check_list_area",
        start: "top 80%",
        // end: "bottom 50%",
        toggleActions: "play none none none",
    },
});
checktl.from(".check_list_area ul li", {
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
});