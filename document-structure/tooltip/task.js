let toolTips = Array.from(document.querySelectorAll('.has-tooltip'));

function createTip(event) {
  event.preventDefault();
  let isSiblingExists = event.target.nextElementSibling !== null;
  const isTipClicked = isSiblingExists? event.target.getAttribute('title') === event.target.nextElementSibling.textContent: false;

  if (isTipClicked) {
    event.target.nextElementSibling.classList.toggle('tooltip_active');
  }
  else {
    let eventLeft = parseInt(event.target.getBoundingClientRect().left)+10+'px';
    let eventTop = parseInt(event.target.getBoundingClientRect().top)+25+'px';
    event.target.insertAdjacentHTML('afterend',`
    <div class="tooltip tooltip_active" style="left: ${eventLeft}; top: ${eventTop}">
      ${event.target.getAttribute('title')}
    </div>
    `;
  }
}

toolTips.forEach((toolTip) => {
  toolTip.addEventListener('click', createTip);
  }
);
