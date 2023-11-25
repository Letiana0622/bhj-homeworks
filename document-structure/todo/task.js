let input = document.getElementById('task__input');
let tasksList = document.querySelector('.tasks__list');
let tasksRemove = Array.from(tasksList.querySelectorAll('.task__remove'));

document.addEventListener('keyup', (event) => {
if (event.code === 'Enter') {
    let newToDo = input.value;
    tasksList.innerHTML +=
    `<div class="task"> <div class="task__title"> ${newToDo} </div> <a href="#" class="task__remove">&times;</a> </div>`
    }
});

function Remove(event) {
event.target.closest('task').remove();
};

tasksRemove.forEach((taskRemove) => {taskRemove.addEventListener('click', Remove)})

