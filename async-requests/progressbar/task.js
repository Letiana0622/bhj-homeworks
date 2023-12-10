if (typeof document !== 'undefined') {
  const formElement = document.getElementById('form');
  const progressBar = document.getElementById('progress');
  const fileChosen = document.getElementById('file');
  const fileDescr = document.querySelector('.input__wrapper-desc');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();

    xhr.upload.onloadstart = function() {
      progressBar.setAttribute('value','0.1')
    };
    
    xhr.upload.onprogress = function(event) {
      progressBar.setAttribute('value',event.loaded);
    };
    
    xhr.upload.onload = function() {
      console.log(xhr.responseText);
      progressBar.setAttribute('value','1');
      setTimeout(() => {
        progressBar.setAttribute('value','0.0');
        fileChosen.value = '';
        fileDescr.textContent = '';
      }
      , 3000);
    };
    
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const formData = new FormData(formElement);
    xhr.send(formData);
  });
};
