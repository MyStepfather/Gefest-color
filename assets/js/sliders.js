var mainSlider = new Swiper('.swiper-container.main-slider', {
    // параметры слайдера
    loop: false,
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
    slidesPerView: 1,
    breakpoints: {
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