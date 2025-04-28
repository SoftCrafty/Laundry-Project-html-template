// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to initialize all GSAP animations
function initGSAPAnimations() {
    // Only run animations if the window width is greater than 768px
    if (window.innerWidth > 768) {
        // Animation for .about_card_wrapper (multiple elements)
        animateAboutCardWrapper();

        // Animation for .about_page_overly_card (single element)
        animateAboutPageOverlyCard();
    }

    // General animations that don't depend on window width
    animatePackagesTitleWrapper();
    animateBlogNewsContains();
    animateTeamMemberCardWrapper();
    animateInnerPageOverlySpan();
}

// Animation for .about_card_wrapper (Multiple elements)
function animateAboutCardWrapper() {
    const aboutCardWrappers = document.querySelectorAll(".about_card_wrapper");  // Select all elements
    if (aboutCardWrappers.length > 0) {
        gsap.from(aboutCardWrappers, {
            scrollTrigger: {
                trigger: ".about_counting_card_area",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            x: -400,
            opacity: 0,
            rotate: 360,
            duration: 1,
            stagger: 0.3,  // Stagger animation between multiple elements
        });
    }
}

// Animation for .about_page_overly_card (Single element)
function animateAboutPageOverlyCard() {
    const aboutPageOverlyCard = document.querySelector(".about_page_overly_card");  // Select the single element
    if (aboutPageOverlyCard) {
        gsap.to(aboutPageOverlyCard, {
            x: 150,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "power1.inOut",
        });
    }
}

// Animation for .packages_title_wrapper (Multiple elements)
function animatePackagesTitleWrapper() {
    const packagesTitleWrapper = document.querySelectorAll(".packages_title_wrapper");  // Select all elements
    if (packagesTitleWrapper.length > 0) {
        gsap.from(packagesTitleWrapper, {
            scrollTrigger: {
                trigger: ".price_packages_area",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,  // Stagger animation between multiple elements
        });
    }
}

// Animation for .blog_news_contains (Multiple elements)
function animateBlogNewsContains() {
    const blogNewsContains = document.querySelectorAll(".blog_news_contains");  // Select all elements
    if (blogNewsContains.length > 0) {
        gsap.from(blogNewsContains, {
            scrollTrigger: {
                trigger: ".blog_news_container",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,  // Stagger animation between multiple elements
        });
    }
}

// Animation for .team_member_card_wrapper (Multiple elements)
function animateTeamMemberCardWrapper() {
    const teamMemberCardWrappers = document.querySelectorAll(".team_member_card_wrapper");  // Select all elements
    if (teamMemberCardWrappers.length > 0) {
        gsap.from(teamMemberCardWrappers, {
            scrollTrigger: {
                trigger: ".team_member_card_area",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.4,  // Stagger animation between multiple elements
        });
    }
}

// Animation for .inner_page_overly .container-xxl h1 span (Multiple elements)
function animateInnerPageOverlySpan() {
    const innerPageOverlySpans = document.querySelectorAll(".inner_page_overly .container-xxl h1 span");  // Select all elements
    if (innerPageOverlySpans.length > 0) {
        gsap.from(innerPageOverlySpans, {
            x: 100,
            opacity: 0,
            duration: 2,
            stagger: 0.3,
            ease: "power3.out",
        });
    }
}

// Initialize all animations when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    initGSAPAnimations();
});
