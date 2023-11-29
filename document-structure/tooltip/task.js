let toolTips = Array.from(document.querySelectorAll('.has-tooltip'));
let tips = Array.from(document.querySelectorAll('.tooltip'));

function createTip(event) {
  event.preventDefault();
  let isNextNotExists = event.target.nextElementSibling === null;
  const isNextContainsTooltip = event.target.nextElementSibling !== null? event.target.nextElementSibling.classList.contains('tooltip'): null;
  
  if (isNextNotExists || !isNextContainsTooltip) {
    let tip = document.createElement('div');
    tip.innerText = event.target.getAttribute('title');
    tip.classList.add('tooltip');
    event.target.insertAdjacentElement('afterend', tip);
    let eventLeft = event.target.getBoundingClientRect().left;
    let eventTop = event.target.getBoundingClientRect().top;
    event.target.nextElementSibling.style.left = (parseInt(eventLeft)+10)+'px';
    event.target.nextElementSibling.style.top = (parseInt(eventTop)+25)+'px';
  };

    event.target.nextElementSibling.classList.toggle('tooltip_active');
};

toolTips.forEach((toolTip) => {
  toolTip.addEventListener('click', createTip);
  }
);
