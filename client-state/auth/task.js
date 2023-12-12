function serializeForm(formNode) {
  const data = new FormData(formNode);
  return data;
}

function saveObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
};

function getObject() {
  idStored = JSON.parse(localStorage.getItem('id'));
  if(idStored) {
    authDiv.classList.toggle('signin_active');
    welcomeDiv.classList.toggle('welcome_active');
    welcomeDiv.innerText = `Добро пожаловать, пользователь ${idStored}`;
    /*setTimeout(() => {clearData()}, 3000);*/
  };
};

function clearData() {
  formRows.forEach((row) => {row.value = '';});
  localStorage.removeItem('id');
};
      
function handleFormSubmit(event) {
  event.preventDefault();
  
  const dataSerialized = serializeForm(event.target);
  const xhr = new XMLHttpRequest();
  xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(dataSerialized);
  
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
      let result = JSON.parse(xhr.responseText);
      let id = result['user_id'];
      let authResult = result['success'];
        if(authResult === true) {
          authDiv.classList.toggle('signin_active');
          welcomeDiv.classList.toggle('welcome_active');
          welcomeDiv.innerText = `Добро пожаловать, пользователь ${id}`;
          saveObject('id',id);
        }
        else {
          alert('Неверный логин/пароль');
        };
    };
  });
};
      
const authForm = document.getElementById('signin__form')
const authDiv = document.getElementById('signin');
const welcomeDiv = document.getElementById('welcome');
const formRows = Array.from(document.querySelectorAll('.control'));
authForm.addEventListener('submit', handleFormSubmit)
document.addEventListener("DOMContentLoaded", getObject);
