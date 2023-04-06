

// let mainSlider = new Swiper('.main-slider', {
//     direction: 'horizontal',
//     loop: true,
//     navigation: {
//         nextEl: '.main-slider__button-next',
//         prevEl: '.main-slider__button-prev'
//     },
// });

// let secondSlider = new Swiper('.second-slider', {
//     direction: 'horizontal',
//     loop: true,
//     navigation: {
//         nextEl: 'second-slider__next',
//         prevEl: 'second-slider__prev'
//     }
// });


let navbarToggler = document.querySelector(".nav-burger");
let myNavbar = document.querySelector(".nav");
let burgerPic = document.querySelector(".burger-pic");

navbarToggler.onclick = function () {
    myNavbar.classList.toggle("nav--active");
    burgerPic.classList.toggle("burger-pic--open");
}


/* function addStickyHeader () {
    const t = document.getElementById("primary-website-header");
    if (t) {
        const e = (0,
        a.P)((()=>{
            const e = window.scrollY || window.pageYOffset;
            0 === e ? t.classList.remove("header--sticky") : e > 0 && !t.classList.contains("header--sticky") && !t.classList.contains("header--pinned") && t.classList.add("header--sticky")
        }
        ), 200).call;
        window.addEventListener("scroll", e),
        e()
    }
}

addStickyHeader();
 */