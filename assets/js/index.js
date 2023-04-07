// Моб меню
function mobNav () {
    let navbarToggler = document.querySelector(".nav-burger"); 
    let myNavbar = document.querySelector(".nav");
    let burgerPic = document.querySelector(".burger-pic");

    navbarToggler.onclick = function () {
        myNavbar.classList.toggle("nav--active"); /* открытие меню */
        burgerPic.classList.toggle("burger-pic--open"); /* смена бургера на крестик */
    }
};

function secondSlider() {
    let slides = document.querySelectorAll('.second-slider__slide');
  
    slides.forEach(function (item) {
        item.onclick = function() {
            if (!item.classList.contains('second-slider__slide--active')) {
                slides.forEach(function (slide) {
                    slide.classList.remove('second-slider__slide--active');
                });
            item.classList.add('second-slider__slide--active');
            }
        };
    });
}

// function price




mobNav();
secondSlider();

