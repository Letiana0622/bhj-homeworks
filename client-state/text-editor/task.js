const textElement = document.getElementById('editor');
const button = document.querySelector('.cleaner');

function saveObject(key, object) {
  localStorage.setItem(key, object);
};

function getObject() {
  textElement.value = localStorage.getItem('lastSessionText');
};

textElement.addEventListener('keyup', () => {
    saveObject('lastSessionText', textElement.value);
})

button.addEventListener('click', () => {
    textElement.value = '';
    localStorage.removeItem('lastSessionText');
})

document.addEventListener("DOMContentLoaded", getObject);
