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
// noinspection JSUnusedLocalSymbols
dropdownBtn.addEventListener("blur", evt => {
    content.classList.remove("navbar-collapse-content--opened");
})
// noinspection JSUnusedLocalSymbols
dropdownBtn.addEventListener('click', (event) => {
    content.classList.toggle('navbar-collapse-content--opened');
});
