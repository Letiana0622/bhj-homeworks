const SLIDES = Array.from(document.querySelectorAll('img'));
const SLIDE_COUNT = SLIDES.length;
const ARR_L = document.querySelector('.slider__arrow_prev');
const ARR_R = document.querySelector('.slider__arrow_next');

ARR_L.addEventListener('click',showPreviousSlide);
ARR_R.addEventListener('click', showNextSlide);

function isCurrent(element) {
    return element.parentElement.classList.contains('slider__item_active');
};

function showNextSlide() {
    let indexR = SLIDES.findIndex(isCurrent);
    SLIDES[indexR].parentElement.classList.remove('slider__item_active');
    indexR !== SLIDE_COUNT-1? indexR+=1 : indexR = 0;
    SLIDES[indexR].parentElement.classList.add('slider__item_active');
};

function showPreviousSlide() {
    let indexL = SLIDES.findIndex(isCurrent);
    SLIDES[indexL].parentElement.classList.remove('slider__item_active');
    indexL !== 0? indexL-=1 : indexL = SLIDE_COUNT-1;
    SLIDES[indexL].parentElement.classList.add('slider__item_active');
};
