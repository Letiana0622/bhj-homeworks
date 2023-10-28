const tab = Array.from(document.querySelectorAll('.tab'));
const text = Array.from(document.querySelectorAll('.tab__content'));

function tabContentToggle(event) {
     tab.forEach((s) => {
        if (s.classList.contains('tab_active')) {s.classList.remove('tab_active')}}
    );
    text.forEach((x) => {
        if (x.classList.contains('tab__content_active')) {x.classList.remove('tab__content_active')}}
    );
    event.target.classList.add('tab_active');
    let index = tab.indexOf(event.target);  
    text[index].classList.add('tab__content_active');
};

tab.forEach(e => e.addEventListener('click', tabContentToggle));
