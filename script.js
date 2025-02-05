document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".navbarMobile .hamburger");
    const navLinks = document.querySelector(".navbarMobile .nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
