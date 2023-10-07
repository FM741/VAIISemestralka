window.onscroll = function () {
    scrollNavbar()
}

let navbar = document.getElementById("navbar");

const navbarPos = navbar.offsetTop;

function scrollNavbar() {
    if (window.scrollY >= navbarPos) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky", "");
    }
}