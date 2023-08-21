let timeLeft = 59;
let elem = document.getElementById('timer');
let timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    alert('Вы победили в конкурсе!');
  } else {
    elem.textContent = Number(elem.textContent) - 1;
    timeLeft--;
  }
}
