document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".navbarMobile .hamburger");
    const navLinks = document.querySelector(".navbarMobile .nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
document.getElementById("form-content").addEventListener("submit", function (event) {
    let isValid = true;

    let firstName = document.getElementById("fname").value.trim();
    let lastName = document.getElementById("lname").value.trim();
    let country = document.getElementById("country").value;
    let subject = document.getElementById("subject").value.trim();

    // Reset previous error messages
    document.getElementById("fname-error").innerText = "";
    document.getElementById("lname-error").innerText = "";
    document.getElementById("country-error").innerText = "";
    document.getElementById("subject-error").innerText = "";

    if (firstName === "") {
        document.getElementById("fname-error").innerText = "First name is required.";
        isValid = false;
    }

    if (lastName === "") {
        document.getElementById("lname-error").innerText = "Last name is required.";
        isValid = false;
    }

    if (country === "") {
        document.getElementById("country-error").innerText = "Please select a country.";
        isValid = false;
    }

    if (subject.length < 10) {
        document.getElementById("subject-error").innerText = "Subject must be at least 10 characters long.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});