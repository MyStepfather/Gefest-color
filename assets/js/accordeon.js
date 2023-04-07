const accordionItems = document.querySelectorAll('.accordion-item');



accordionItems.forEach((item, index) => {
  const bgImage = item.dataset.bgImage;
  
  if (index === 0) { // если это первый элемент, то установить фоновую картинку и высоту
    item.style.backgroundImage = `url(${bgImage})`;
    item.style.height = '200px'; // пример
    item.classList.add('active');
  }
  
  item.addEventListener('mouseover', () => {
    if (!item.classList.contains('active')) {
      item.style.transitionDelay = '0.3s'; // задержка перед появлением
      item.style.backgroundImage = `url(${bgImage})`;
      item.style.height = '150px'; // пример
    }
  });
  
  item.addEventListener('mouseout', () => {
    if (!item.classList.contains('active')) {
      item.style.transitionDelay = '0s'; // убрать задержку перед исчезновением
      item.style.backgroundImage = 'none';
      item.style.height = '100px'; // возврат к начальной высоте
    }
  });
  
  item.addEventListener('click', () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.style.transitionDelay = '0s'; // убрать задержку перед исчезновением
        otherItem.style.backgroundImage = 'none';
        otherItem.style.height = '100px';
      }
    });
    
    item.classList.toggle('active');
    
    if (item.classList.contains('active')) {
      item.style.transitionDelay = '0.3s'; // задержка перед появлением
      item.style.backgroundImage = `url(${bgImage})`;
      item.style.height = '200px'; // пример
    } else {
      item.style.transitionDelay = '0s'; // убрать задержку перед исчезновением
      item.style.backgroundImage = 'none';
      item.style.height = '100px'; // возврат к начальной высоте
    }
  });
});
