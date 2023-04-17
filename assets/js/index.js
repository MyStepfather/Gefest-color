function smoothScroll() {
    // выберите все ссылки на якоря на странице
    let links = document.querySelectorAll('a[href^="#"]');

    // обрабатываем каждую ссылку на якорь
    links.forEach(link => {
        link.addEventListener('click', event => {
            // отменяем стандартное поведение ссылки
            event.preventDefault();

            // получаем id якоря из атрибута href ссылки
            const id = link.getAttribute('href').slice(1);

            // находим элемент с нужным якорем на странице
            const target = document.getElementById(id);

            // проверяем, существует ли такой элемент
            if (target) {
            // вычисляем координаты элемента на странице
                const top = target.getBoundingClientRect().top + window.pageYOffset;

                // плавно перемещаемся к элементу
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        });
    });
}






// Моб меню
function mobNav () {
    let navbarToggler = document.querySelector(".nav-burger"); 
    let myNavbar = document.querySelector(".nav");
    let burgerPic = document.querySelector(".burger-pic");
    let body = document.querySelector('body');
    let links = document.querySelectorAll('a[href^="#"]');

    navbarToggler.onclick = function () {
        myNavbar.classList.toggle("nav--active"); /* открытие меню */
        burgerPic.classList.toggle("burger-pic--open"); /* смена бургера на крестик */
        links.forEach(function (link) {
            link.addEventListener('click' , function() {
                burgerPic.classList.remove("burger-pic--open");
                myNavbar.classList.remove("nav--active");
                body.style.overflowY = 'auto';
            })
        })
        if (myNavbar.classList.contains("nav--active")) {
            body.style.overflowY = 'hidden';
        } else {
            body.style.overflowY = 'auto';
        }
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


function circleReasons () {
    // Получаем все элементы prilol__pic и prilol__item
    const pics = document.querySelectorAll('.prikol__pic');
    const items = document.querySelectorAll('.prikol__item');

    // Первый элемент prilol__pic всегда отображается
    items[0].classList.add('prikol__item--active');

    // Функция для отображения соответствующего элемента prilol__item и скрытия остальных
    function showItem(index) {
        for (let i = 0; i < items.length; i++) {
            if (i === index) {
                items[i].classList.add('prikol__item--active');
            } else {
                items[i].classList.remove('prikol__item--active');
            }
        }
    }

// Обработчик события для наведения/клика на prilol__pic
    for (let i = 0; i < pics.length; i++) {
        if (window.innerWidth >= 767) { // для ширины экрана больше или равной 767px используем наведение
            pics[i].addEventListener('mouseover', () => {
                showItem(i);
                for (let j = 0; j < pics.length; j++) {
                    if (j !== i) {
                        pics[j].classList.remove('prikol__item--active');
                    }
                }
                pics[i].classList.add('prikol__item--active');
            });
        } else { // для ширины экрана меньше 767px используем клик
            pics[i].addEventListener('click', () => {
                if (pics[i].classList.contains('prikol__item--active')) {
                    pics[i].classList.remove('prikol__item--active');
                    items[i].classList.remove('prikol__item--active');
                } else {
                    showItem(i);
                    for (let j = 0; j < pics.length; j++) {
                        if (j !== i) {
                            pics[j].classList.remove('active');
                            items[j].classList.remove('active');
                        }
                    }
                    pics[i].classList.add('active');
                }
            });
        }
    }
}

function services() {
    let items = document.querySelectorAll('.accordeon__item');

    items.forEach(item => {
        item.addEventListener('click', function() {
        // Удаляем классы активных элементов
            items.forEach(i => {
                if (i !== item) {
                    i.classList.remove('accordeon__item--active');
                    i.querySelector('.accordeon__img').classList.remove('accordeon__img--active');
                    i.querySelector('.accordeon__descr').classList.remove('accordeon__descr--active');
                    i.style.color = "rgba(51, 51, 51, 0.4)";
                    i.querySelector('.accordeon__right-part').classList.remove('rotate');
                }
            });
            
            // Добавляем классы активному элементу
            item.classList.add('accordeon__item--active');
    
            if (item.classList.contains('accordeon__item--active')) {
                item.querySelector('.accordeon__img').classList.add('accordeon__img--active');
                item.querySelector('.accordeon__descr').classList.add('accordeon__descr--active');
                item.style.color = "#000";
                item.querySelector('.accordeon__right-part').classList.add('accordeon__right-part--active');
                item.querySelector('.accordeon__right-part').classList.add('rotate');
            }
        });
    });
}

function navSticky() {
    let nav = document.querySelector('.navigate');
    let headerHeight = document.querySelector('.header').clientHeight;

    function navActive() {
        if(document.body.clientWidth > 768) {
            if (window.pageYOffset > headerHeight) {
                nav.classList.add('navigate--sticky');
            } else {
                nav.classList.remove('navigate--sticky');
            }
        } else {
            nav.classList.remove('navigate--sticky');
        }
    }
    if (nav) {
        navActive();
    }
    addEventListener("scroll", (event) => {
        navActive();
    });
}

smoothScroll();
navSticky();
services();
mobNav();
secondSlider();
circleReasons();
// topics();