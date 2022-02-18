import checkedEvent from './checked.js';
import editTask from './edit-task.js';

const taskContainer = document.querySelector('.to-do-list--container');

const renderTask = (task, toDoTask) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('p');
  const threeDots = document.createElement('i');
  const trashIcon = document.createElement('i');
  li.id = task.index;

  li.className = 'task-item';
  checkbox.className = 'check-box';
  taskDescription.className = 'task-description';

  threeDots.classList.add('three-dots');
  threeDots.classList.add('fa-solid');
  threeDots.classList.add('fa-ellipsis-vertical');

  trashIcon.classList.add('trash-icon');
  trashIcon.classList.add('fa-solid');
  trashIcon.classList.add('fa-trash');

  trashIcon.style.color = 'red';

  checkbox.type = 'checkbox';
  checkbox.value = 1;
  checkbox.name = 'todo[]';

  taskDescription.textContent = task.description;

  li.appendChild(checkbox);
  li.appendChild(taskDescription);
  li.appendChild(trashIcon);
  li.appendChild(threeDots);

  taskContainer.addEventListener('dblclick', (event) => editTask(event, toDoTask));

  trashIcon.addEventListener('click', toDoTask.removeTask);
  checkbox.addEventListener('change', (event) => checkedEvent(event, toDoTask));

  taskContainer.appendChild(li);
};

export { renderTask, taskContainer };
