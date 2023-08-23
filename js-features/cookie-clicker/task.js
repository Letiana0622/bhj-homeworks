let clicks = 0;
function increment() {
    clicks += 1;
    const clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent = clicks;
    return clicks;
    };

const img = document.getElementById('cookie');
let lastClick = 0;

img.onclick = () => {
    let d = new Date();
    let t = d.getTime();
    let timeDiff = Math.round(t - lastClick);
    increment();
    const clickerSpeed = document.getElementById('clicker__speed');
    clickerSpeed.textContent = Math.round(1/(timeDiff/1000));
    if (clicks%2 > 0) {
        img.width += 20;
        img.height += 20;
        }
    else {
        img.width -= 20;
        img.height -= 20;
    };
    lastClick = t;
};
