const ads = Array.from(document.querySelectorAll('.rotator__case'));
const adsCount = ads.length;

function isCurrent(element) {
    return element.classList.contains('rotator__case_active');
};

function showAdd() {
    let index = ads.findIndex(isCurrent);
    ads[index].classList.remove('rotator__case_active');
    index !== adsCount-1? index+=1 : index = 0;
    ads[index].classList.add('rotator__case_active');
};

setInterval(showAdd,1000);
