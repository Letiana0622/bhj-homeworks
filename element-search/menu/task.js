const menuLink = Array.from(document.querySelectorAll('.menu__link'));

function MenuToggle(event) {

   let next = event.target.nextElementSibling;
    if (next !== null && next.classList.contains('menu_sub')) {
        event.preventDefault();
        next.classList.toggle('menu_active');
    }
};

menuLink.forEach(e => e.addEventListener('click', MenuToggle));
