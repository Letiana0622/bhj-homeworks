const textElement = document.getElementById('editor');
const button = document.querySelector('.cleaner');

function saveObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
};

function getObject(key) {
  textElement.value = JSON.parse(localStorage.getItem(key));
};

textElement.addEventListener('keyup', () => {
    saveObject('lastSessionText', textElement.value);
})

button.addEventListener('click', () => {
    textElement.value = '';
    localStorage.clear();
})

document.addEventListener("DOMContentLoaded", getObject('lastSessionText'));
