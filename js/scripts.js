window.onscroll = function () {
    scrollNavbar();
}

const navbar = document.getElementById("navbar");
const navbarPos = navbar.offsetTop;

function scrollNavbar() {
    if (window.scrollY >= navbarPos) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky", "");
    }
}

const dropdownBtn = document.querySelector(".navbar-collapse");
const content = document.querySelector(".navbar-collapse-content");

document.addEventListener('click', (evt) => {
    if (!content.contains(evt.target) && !dropdownBtn.contains(evt.target)) {
        content.classList.remove('navbar-collapse-content--opened');
    }
});

dropdownBtn.addEventListener('click', (_evt) => {
    content.classList.toggle('navbar-collapse-content--opened');
});
