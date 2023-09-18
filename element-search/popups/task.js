const first = document.getElementById('modal_main');
const second = document.getElementById('modal_success');
first.addEventListener('click', function() {
  first.classList.remove('modal_active');
  second.classList.add('modal_active');
});
second.addEventListener('click', function() {
    second.classList.remove('modal_active');
  });

const clickExit = (evt) => {
    closePopup(evt.target.closest(".modal"));
  };
const exit = Array.from(document.querySelectorAll(".modal__close_times")).forEach(
    (element) => {
      element.addEventListener("click", clickExit);
    }
  );
