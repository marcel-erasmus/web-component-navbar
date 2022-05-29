document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById("nav-menu")
    const buttonMenu = document.getElementById("button-menu")
    const navLinks = document.querySelectorAll('.nav-link')

    buttonMenu.addEventListener('click', () => executeNavAction())
    navLinks.forEach(navLink => navLink.addEventListener('click', () => executeNavAction()))

    const executeNavAction = () => {
        navMenu.classList.toggle("nav-menu-active")
        buttonMenu.classList.toggle("ri-menu-3-line")
        buttonMenu.classList.toggle("ri-close-line")
    }
});

window.onscroll = () => {
    const buttonTop = document.getElementById("button-top");

    const posY = window.pageYOffset;
    if (posY >= 500) {
        buttonTop.classList.add("button-top-active")
        buttonTop.classList.remove("button-top-inactive")
    } else {
        buttonTop.classList.remove("button-top-active")
        buttonTop.classList.add("button-top-inactive")
    }
}
