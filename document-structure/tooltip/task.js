let toolTips = Array.from(document.querySelectorAll('.has-tooltip'));

function createTip(event) {
  
  event.preventDefault();

  if (event.target.children[0]) {
    event.target.children[0].classList.toggle('tooltip_active');
  }
  else {
    let eventLeft = parseInt(event.target.getBoundingClientRect().left)+10+'px';
    let eventTop = parseInt(event.target.getBoundingClientRect().top)+25+'px';
    event.target.innerHTML += `
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
