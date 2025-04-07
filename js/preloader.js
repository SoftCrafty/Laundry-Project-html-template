// Remove preloader after page load
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    preloader.style.transition = "all 0.5s ease";
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 600); 
});
