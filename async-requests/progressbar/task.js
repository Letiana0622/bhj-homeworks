if (typeof document !== 'undefined') {
  const formElement = document.getElementById('form');
  const progressBar = document.getElementById('progress');

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.OPENED) {progressBar.setAttribute('value','0.25')};
      if (xhr.readyState === xhr.HEADERS_RECEIVED) {progressBar.setAttribute('value','0.5')};
      if (xhr.readyState === xhr.LOADING) {progressBar.setAttribute('value','0.75')};
      if (xhr.readyState === xhr.DONE) {
        console.log(xhr.responseText);
        progressBar.setAttribute('value','1');
        setTimeout(() => {progressBar.setAttribute('value','0.0')}, 3000);
      };
    });
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const formData = new FormData(formElement);
    xhr.send(formData);
  });
};
