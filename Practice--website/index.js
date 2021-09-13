const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navbarLogo = document.querySelector("#navbar-logo");

// mobile menu
const mobileMenu = () => {
   menu.classList.toggle("is-active");
   menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// active menu when scrolling

const highlightMenu = () => {
    const element = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const servicesMenu = document.querySelector("#services-page");
    let scrollPosition = window.scrollY;

    // adds highlight  to menu items
    if (window.innerWidth > 960 && scrollPosition < 600) {
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 1400) {
        homeMenu.classList.remove("highlight");
        aboutMenu.classList.add("highlight");
        servicesMenu.classList.remove("highlight");
        return;
    } else if (window.innerWidth > 960 && scrollPosition < 2345) {
        servicesMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        return;
    }

    if ((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
        element.classList.remove("highlight");
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//closes mobile menu when menu is clicked
const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active")
    if (window.innerWidth <= 960 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener("click", hideMobileMenu);
navbarLogo.addEventListener("click", hideMobileMenu);
