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
    pagination: {
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-prev'
    },
});