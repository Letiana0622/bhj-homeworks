const menuItems = Array.from(document.querySelectorAll('.dropdown__item'));
const menu = document.querySelector('ul');
const menuName = document.querySelector('.dropdown__value');

function openMenu() {
    menu.classList.toggle('dropdown__list_active');
};

function menuCloseRename(event) {

    event.preventDefault();

    const dropDown = event.target.closest('.dropdown').querySelector('.dropdown__value');
  
    textNew = event.target.textContent;
    dropDown.textContent = textNew;
   
};

menuName.addEventListener('click', openMenu);
menuItems.forEach(e => e.addEventListener('click', menuCloseRename));
