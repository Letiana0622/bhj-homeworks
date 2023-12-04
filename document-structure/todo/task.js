let input = document.getElementById('task__input');
let tasksList = document.querySelector('.tasks__list');
let button = document.querySelector('.tasks__add');

function removeTask(customDiv) {
  for (let i=0; i < customDiv.length; i++) {
    customDiv[i].addEventListener('click', () => {
      if (customDiv.length > 1) {
        customDiv[i].parentElement.remove();
      }
      else {
        document.querySelector('.task').remove();
      };
    });
  };
};

function addTask(event) {
  event.preventDefault();
  let newToDo = input.value.trim();
  if (newToDo) {
    tasksList.innerHTML +=
     `<div class="task"> <div class="task__title"> ${newToDo} </div> <a href="#" class="task__remove">&times;</a> </div>`
  };
  input.value = '';
  let customDiv = document.getElementsByClassName('task__remove');
  removeTask(customDiv);
};

button.addEventListener('click', addTask);
