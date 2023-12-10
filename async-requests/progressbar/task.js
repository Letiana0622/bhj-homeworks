if (typeof document !== 'undefined') {
  const formElement = document.getElementById('form');
  const progressBar = document.getElementById('progress');
  const fileChosen = document.getElementById('file');
  const fileDescr = document.querySelector('.input__wrapper-desc');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.onloadstart = function() {
      progressBar.setAttribute('value','0.3');
      console.log("Начало загрузки данных");
    };
    
    xhr.upload.onprogress = function(event) {
      progressBar.setAttribute('value','0.7');
      console.log(`Отправлено ${event.loaded} из ${event.total} байт`);
    };
    
    xhr.upload.onload = function() {
      progressBar.setAttribute('value','1');
      console.log("Данные успешно отправлены");
      setTimeout(() => {
        progressBar.setAttribute('value','0.0');
        fileChosen.value = '';
        fileDescr.textContent = '';
      }
      , 3000);
    };

    xhr.upload.onerror = function() {
      console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
    };
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const formData = new FormData(formElement);
    xhr.send(formData);
    xhr.onload = () => console.log(xhr.response);
  });
};
