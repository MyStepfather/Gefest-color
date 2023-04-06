// swiper element
const swiperEl = document.querySelector('swiper-container');


// swiper parameters
const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    on: {
        init() {
        // ...
        },
    },
    /* injectStylesUrls: ['/to/one.css'], */
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);

// and now initialize it
swiperEl.initialize();