let input = document.getElementById('task__input');
let tasksList = document.querySelector('.tasks__list');
let button = document.querySelector('.tasks__add');

function delay(customDiv) {
  customDiv.addEventListener('click', ()=> {
    customDiv.remove();
    }
  );
};

function addTask(event) {
    event.preventDefault();
    let newToDo = input.value.trim();
    if (newToDo) {
      let customDiv = document.createElement('div');
      customDiv.classList.add('task');
      tasksList.appendChild(customDiv);

      let titleDiv = document.createElement('div');
      titleDiv.classList.add('task__title');
      titleDiv.innerText = `${newToDo}`
      customDiv.appendChild(titleDiv);
        
      let linkA = document.createElement('a');
      customDiv.appendChild(linkA);
      linkA.setAttribute('href', '#');
      linkA.classList.add('task__remove');
      linkA.innerHTML = `&times;`;

      delay(customDiv);
      };
    };

button.addEventListener('click', addTask);
