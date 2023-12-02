let preloader = document.getElementById('loader');
let getExRates = new XMLHttpRequest();

getExRates.addEventListener('readystatechange', () => {
  if(getExRates.readyState === getExRates.DONE) {
    preloader.classList.remove('loader_active');
    let dataExRates = JSON.parse(getExRates.responseText);
    let  item = document.getElementById('items')
    Object.keys(dataExRates.response.Valute).forEach(function(key) {
      item.innerHTML +=
        `<div class="item">
          <div class="item__code">
            ${dataExRates.response.Valute[key].CharCode}
          </div>
          <div class="item__value">
            ${dataExRates.response.Valute[key].Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
        </div>`
    });
  };
});

getExRates.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
getExRates.send();
