const taskContainer = document.querySelector('.to-do-list--container');

const renderTask = (task) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('p');
  const threeDots = document.createElement('i');
  li.id = task.index;

  li.className = 'task-item';
  checkbox.className = 'check-box';
  taskDescription.className = 'task-description';

  threeDots.classList.add('three-dots');
  threeDots.classList.add('fa-solid');
  threeDots.classList.add('fa-ellipsis-vertical');

  checkbox.type = 'checkbox';
  checkbox.value = 1;
  checkbox.name = 'todo[]';

  taskDescription.textContent = task.description;

  li.appendChild(checkbox);
  li.appendChild(taskDescription);
  li.appendChild(threeDots);

  taskContainer.appendChild(li);
};

export { renderTask, taskContainer };
