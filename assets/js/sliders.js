var mainSlider = new Swiper('.swiper-container.main-slider', {
    // параметры слайдера
    autoplay: true,
    delay: 300,
    loop: true,
    speed: 500,
    spaceBetween: 200,
    navigation: {
        nextEl: '.main-slider__button-next',
        prevEl: '.main-slider__button-prev'
    },
});

var secondSlider = new Swiper('.swiper-container.second-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 20,
    controller: true,
    slidesPerView: "auto",
    pagination: {
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-prev'
    },
});

var managerSlider = new Swiper('.swiper-container.managers-slider', {
    loop: false,
    speed: 500,
    spaceBetween: 20,
    controller: true,
    slidesPerView: "auto",
    pagination: {
        el: '.swiper-pagination.managers-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: "auto",
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3
        }
    },
})

var servicesSlider = new Swiper('.swiper-container.services-container', {
    loop: false,
    speed: 500,
    spaceBetween: 20,
    controller: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.services__button-next',
        prevEl: '.services__button-prev'
    },

})

var reviewsSlider = new Swiper('.swiper-container.reviews__slider', {
    loop: false,
    speed: 500,
    spaceBetween: 200,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev'
    },
})

var topicsSlider = new Swiper('.swiper-container.topics__container', {
    loop: false,
    speed: 500,
    spaceBetween: 40,
    centeredSlides: false,
    // slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 3
        }
    },
    navigation: {
        nextEl: '.topics__button-next',
        prevEl: '.topics__button-prev'
    },
})

var clientsSlider = new Swiper('.swiper-container.clients-container', {
    autoplay: true,
    loop: false,
    speed: 500,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto"
})