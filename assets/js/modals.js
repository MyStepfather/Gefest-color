let body = document.querySelector('body');
let bcg = document.querySelector('.overlay');

function price1 () {
    let buttons = document.querySelectorAll('.accordeon__right-part');
    let modal = document.querySelector('#price-1');
    let cross = document.querySelector('.modal__cross');
    
    buttons.forEach(button => {
        function openModal() {
            body.style.overflowY = 'hidden';
            modal.classList.add('show');
            bcg.classList.add('show');
        }
        function closeModal() {
            body.style.overflowY = 'visible';
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
            body.style.overflowY = 'hidden';
            modal.classList.add('show');
            bcg.classList.add('show');
        }
        function closeModal() {
            body.style.overflowY = 'visible';
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
    
    buttons.forEach(button => {
        function openModal() {
            body.style.overflowY = 'hidden'; 
            form.classList.add('show');
            bcg.classList.add('show');
        }
        function closeModal() {
            body.style.overflowY = 'visible';
            form.classList.remove('show');
            bcg.classList.remove('show');
        }
        button.addEventListener('click', openModal);
        cross.addEventListener('click', closeModal);
        bcg.addEventListener('click', closeModal);
    });
}

price1 ();
article ();
form ();