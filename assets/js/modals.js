let body = document.querySelector('body');
let html = document.querySelector('html');
let bcg = document.querySelector('.overlay');

function price1 () {
    let buttons = document.querySelectorAll('.accordeon__right-part');
    let modal = document.querySelector('#price-1');
    let cross = document.querySelector('.modal__cross');
    
    buttons.forEach(button => {
        function openModal() {
            body.classList.add('overflow-y-hidden');
            html.classList.add('overflow-y-hidden');
            modal.classList.add('show');
            bcg.classList.add('show');
            let priceBtn = modal.querySelector('.btn-green');
            let form = document.querySelector('#form-main');
            priceBtn.addEventListener('click', function() {
                modal.classList.remove('show');
                form.classList.add('show');
            })
        }
        function closeModal() {
            body.classList.remove('overflow-y-hidden');
            html.classList.remove('overflow-y-hidden');
            modal.classList.remove('show');
            bcg.classList.remove('show');
        }

        button.addEventListener('click', openModal);
        cross.addEventListener('click', closeModal);
        bcg.addEventListener('click', closeModal);
    });
}

function article() {
    let buttons = document.querySelectorAll('.topic__btn');
    let modal = document.querySelector('#article-1');
    let cross = document.querySelector('.article__cross');
    
    buttons.forEach(button => {
        function openModal() {
            body.classList.add('overflow-y-hidden');
            html.classList.add('overflow-y-hidden');
            modal.classList.add('show');
            bcg.classList.add('show');
        }
        function closeModal() {
            body.classList.remove('overflow-y-hidden');
            html.classList.remove('overflow-y-hidden');
            modal.classList.remove('show');
            bcg.classList.remove('show');
        }

        button.addEventListener('click', openModal);
        cross.addEventListener('click', closeModal);
        bcg.addEventListener('click', closeModal);
    });
}

function form() {
    let buttons = document.querySelectorAll('.form-trig-btn');
    let form = document.querySelector('#form-main');
    let cross = document.querySelector('.form__cross');
    let nav = document.querySelector('#nav');
    let burger = document.querySelector('.burger-pic');
    
    buttons.forEach(button => {
        function openModal() {
            body.classList.add('overflow-y-hidden');
            html.classList.add('overflow-y-hidden');
            form.classList.add('show');
            bcg.classList.add('show');
        }
        function closeModal() {
            if (nav.classList.contains('nav--active')) {
                form.classList.remove('show');
                bcg.classList.remove('show');
                body.classList.add('overflow-y-hidden');
                html.classList.add('overflow-y-hidden');
            } else {
                form.classList.remove('show');
                bcg.classList.remove('show');
                body.classList.remove('overflow-y-hidden');
                html.classList.remove('overflow-y-hidden');
            }
        }
        button.addEventListener('click', openModal);
        cross.addEventListener('click', closeModal);
        bcg.addEventListener('click', closeModal);
    });
}

price1 ();
article ();
form ();