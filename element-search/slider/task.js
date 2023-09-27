const slides = Array.from(document.querySelectorAll('img'));
const slideCount = slides.length;
const arrL = document.querySelector('.slider__arrow_prev');
const arrR = document.querySelector('.slider__arrow_next');
let slideIndex = 0;

arrL.addEventListener('click',showPreviousSlide);
arrR.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.parentElement.classList.remove('slider__item_active');
          return;}
      });
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
};         

function showNextSlide() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.parentElement.classList.remove('slider__item_active');
          return;}
      });
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
};

function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.parentElement.classList.add('slider__item_active');
        return;}
    });
  }

updateSlider();
