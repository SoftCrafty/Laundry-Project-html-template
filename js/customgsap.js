gsap.from(".header_contact_area .social_media span", {
    x: -200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})
gsap.from(".header-area .logo a", {
    x: -200,
    display: "none",
    duration: 1,
    delay: 0.3,
})

gsap.from(".header-area .btn_wrapper", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
let tl = gsap.timeline();
tl.from(".header_contact_area .social_media li, .review_card_wapper li", {
    y: 50,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.1
})

let ctl = gsap.timeline();
ctl.from(".contact_info_wrapper, .review_card_wapper p", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.3
})
let menutl = gsap.timeline();
menutl.from(".header-area .main_menu li", {
    // y:30,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    stagger: 0.1
})
gsap.from(".sub_heading h4", {
    x: -290,
    duration: 1,
    delay: 0.6,
    opacity: 0,

})

let hedingh1 = gsap.timeline();
hedingh1.from(".heading h1", {
    x: -400,
    opacity: 0,
    duration: 2,
    delay: 0.5,
    stagger: 0.4,
})

let pictl = gsap.timeline();
pictl.from(".hero_user_meta img", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.2
})

