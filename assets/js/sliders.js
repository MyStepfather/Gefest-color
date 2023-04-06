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