const toolTips = Array.from(document.querySelectorAll('.has-tooltip'));
let tips = Array.from(document.querySelectorAll('.tooltip'));

toolTips.forEach((tool) => {
    let tip = document.createElement('div');
    let tipText = tool.getAttribute('title');
    tip.innerText = tipText;
    tool.insertAdjacentElement('afterend', tip);
    tip.classList.add('tooltip');
});

function activateTip(event) {
   event.preventDefault();
   let eventLeft = event.target.getBoundingClientRect().left;
   let eventTop = event.target.getBoundingClientRect().top;

   event.target.nextElementSibling.style.left = (parseInt(eventLeft)+10)+'px';
   event.target.nextElementSibling.style.top = (parseInt(eventTop)+25)+'px';
   event.target.nextElementSibling.classList.toggle('tooltip_active');
};

toolTips.forEach((toolTip) => {toolTip.addEventListener('click', activateTip)});
