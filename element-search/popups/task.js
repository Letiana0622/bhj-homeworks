const firstPopup = document.getElementById('modal_main');
const secondPopup = document.getElementById('modal_success');
const exit = Array.from(document.querySelectorAll('.modal__close'));
const successBtn = document.querySelector('.btn_success');

window.addEventListener('load', () => {
    firstPopup.classList.add('modal_active');
  });

function ToogleModal(event) {
    if (event.target.matches('.show-success')) {
        firstPopup.classList.remove('modal_active');
        secondPopup.classList.add('modal_active');}
    else if (event.target.matches('.modal__close_times')){
        event.target.closest('.modal').classList.remove('modal_active');}
    };
function exitSuccess(event) {
    event.target.closest('.modal').classList.remove('modal_active');
};        

exit.forEach(btn => btn.addEventListener('click', ToogleModal));
successBtn.addEventListener('click', exitSuccess)
