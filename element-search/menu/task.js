const MENU_LINK = Array.from(document.querySelectorAll('.menu__link'));

function menuToggle(event) {

   let next = event.target.nextElementSibling;
    if (next !== null && next.classList.contains('menu_sub')) {
        event.preventDefault();
        next.classList.toggle('menu_active');
    }
};

MENU_LINK.forEach(e => e.addEventListener('click', menuToggle));
