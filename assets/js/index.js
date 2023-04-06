
let navbarToggler = document.querySelector(".nav-burger");
let myNavbar = document.querySelector(".nav");
let burgerPic = document.querySelector(".burger-pic");

navbarToggler.onclick = function () {
    myNavbar.classList.toggle("nav--active");
    burgerPic.classList.toggle("burger-pic--open");
}