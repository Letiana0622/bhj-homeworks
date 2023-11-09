controls = Array.from(document.querySelectorAll('.font-size'));
book = document.querySelector('.book');

function bookReader(event) {
    controls.forEach((c) => {
        if (c.classList.contains('font-size_active')) {c.classList.remove('font-size_active')}}
    );
    if (event.target.getAttribute('data-size') === 'small') {
        event.target.classList.add('font-size_active');
        book.classList.add('book_fs-small');
    }
    else if (event.target.getAttribute('data-size') === 'big') {
        event.target.classList.add('font-size_active');
        book.classList.add('book_fs-big')}
    else if (event.target.getAttribute('data-size') === none) {
        event.target.classList.add('font-size_active');
    }
    event.preventDefault();
};

controls.forEach(((control) => {control.addEventListener('click', bookReader)}));
