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

function topics () {
// выбираем все элементы с классом "topic"
    let topics = document.querySelectorAll('.topic');
    // выбираем все кнопки с классом "button"
    let buttons = document.querySelectorAll('.topic__btn');

    // перебираем все элементы "topic" и добавляем на каждый обработчик события "click"
    topics.forEach(function(topic) {
        topic.addEventListener('click', function() {
            // добавляем класс "topic--active" только на текущий элемент
            topic.classList.add('topic--active');

            // перебираем все кнопки и устанавливаем для каждой атрибут "style", чтобы она не отображалась
            buttons.forEach(function(button) {
                button.setAttribute('style', 'display: none;');
            });

            // находим кнопку, которая соответствует текущему топику
            let button = topic.querySelector('.topic__btn');
            if (button) {
            // устанавливаем для найденной кнопки атрибут "style", чтобы она отображалась
                button.setAttribute('style', 'display: flex;');
            }

            // перебираем все элементы "topic" и удаляем класс "topic--active" у всех, кроме текущего
            topics.forEach(function(slide) {
                if (slide !== topic) {
                    slide.classList.remove('topic--active');
                }
            });
        });
    });
}


// function price
topics();
mobNav();
secondSlider();

