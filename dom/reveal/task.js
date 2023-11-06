revealList = Array.from(document.querySelectorAll('.reveal'));


function Reveal() {
    let windowHeight = document.documentElement.clientHeight;
    revealList.forEach((i) => {
        top = i.getBoundingClientRect().top;
        bottom = i.getBoundingClientRect().bottom;
        if (top > 0 && top < windowHeight || bottom < windowHeight && bottom > 0) {
        i.classList.toggle('reveal_active');}
    });
    };


window.addEventListener('scroll', Reveal);
