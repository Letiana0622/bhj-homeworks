let input = document.getElementById('task__input');
let tasksList = document.querySelector('.tasks__list');
let button = document.querySelector('.tasks__add');

function removeTask(removeButton) {
    removeButton.addEventListener('click', () => {
      removeButton.parentElement.remove();
    })
  };

function addTask(event) {
  event.preventDefault();
  let newToDo = input.value.trim();
  if (newToDo) {
    tasksList.insertAdjacentHTML( 'beforeend',
     `<div class="task"> 
     <div class="task__title"> ${newToDo} </div> 
     <a href="#" class="task__remove">&times;</a> 
     </div>`
    )
  };
  let removeButtons = Array.from(document.querySelectorAll('.task__remove'))
  let removeButton = removeButtons[removeButtons.length - 1];
  input.value = '';
  removeTask(removeButton);
};

button.addEventListener('click', addTask);
