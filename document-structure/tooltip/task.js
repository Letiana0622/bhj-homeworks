const toolTips = Array.from(document.querySelectorAll('.has-tooltip'));
let tips = Array.from(document.querySelectorAll('.tooltip'));

function createTip (event) {
        event.preventDefault(event.target.nextElementSibling);
        console.log(event.target.nextElementSibling)
        if (event.target.nextElementSibling === null)
            {let tip = document.createElement('div');
            let tipText = event.target.getAttribute('title');
            tip.innerText = tipText;
            event.target.insertAdjacentElement('afterend', tip);
            tip.classList.add('tooltip');
            let eventLeft = event.target.getBoundingClientRect().left;
            let eventTop = event.target.getBoundingClientRect().top;
            event.target.nextElementSibling.style.left = (parseInt(eventLeft)+10)+'px';
            event.target.nextElementSibling.style.top = (parseInt(eventTop)+25)+'px';
            event.target.nextElementSibling.classList.toggle('tooltip_active');}

        else 
            {event.target.nextElementSibling.classList.toggle('tooltip_active')};
};

toolTips.forEach((toolTip) => {toolTip.addEventListener('click', activateTip)});
