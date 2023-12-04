let toolTips = Array.from(document.querySelectorAll('.has-tooltip'));
let tips = Array.from(document.querySelectorAll('.tooltip'));

function createTip(event) {
  if (event.target.children[0]) {
    event.target.children[0].remove();
  }
  else {
    event.preventDefault();
    let eventLeft = parseInt(event.target.getBoundingClientRect().left)+10+'px';
    let eventTop = parseInt(event.target.getBoundingClientRect().top)+25+'px';
    event.target.innerHTML += `
    <div class="tooltip" style="left: ${eventLeft}; top: ${eventTop}">
      ${event.target.getAttribute('title')}
    </div>
    `;
    document.getElementsByClassName('tooltip')[0].classList.add('tooltip_active'); 
  };
};

toolTips.forEach((toolTip) => {
  toolTip.addEventListener('click', createTip);
  }
);
