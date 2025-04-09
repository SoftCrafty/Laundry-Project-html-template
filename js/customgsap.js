// About Seciton counting
if (window.innerWidth > 768) {
gsap.from(".about_card_wrapper", {
    scrollTrigger: { trigger: ".about_counting_card_area", start: "top 80%", toggleActions: "play none none reverse" },
    x: -400,
    opacity: 0,
    rotate: 360,
    duration: 1,
    stagger: 0.3,
});

    gsap.to(".about_page_overly_card", {
        x: 150,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });
}
gsap.from(".packages_title_wrapper", {
    scrollTrigger: { trigger: ".packages_contains", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.3,
});
gsap.from(".blog_news_contains", {
    scrollTrigger: { trigger: ".blog_news_container", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.3,
});
gsap.from(".team_member_card_wrapper", {
    scrollTrigger: { trigger: ".team_member_card_area", start: "top 80%", toggleActions: "play none none reverse" },
    opacity: 0, y: 50, duration: 1, stagger: 0.4,
});
gsap.from(".inner_page_overly .container_area h1 span", {
    x: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out"
});