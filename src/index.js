import './style.css';

const toDoTasks = [
  { description: 'complete microverse tasks', completed: false, index: 0 },
  { description: 'call to dad', completed: false, index: 1 },
  { description: 'go to gym', completed: false, index: 2 },
  { description: 'watch movie after program time', completed: false, index: 3 },
  { description: 'go to shopping', completed: false, index: 4 },
  { description: 'take shower', completed: false, index: 5 },
];

const listContainer = document.querySelector('.to-do-list--container');
const taskInput = document.createElement('input');
const clearButton = document.createElement('button');
const wraper = document.querySelector('.wraper');

taskInput.className = 'task-input-field';
taskInput.type = 'text';
taskInput.placeholder = 'Add to your list';
taskInput.name = 'task-input';

clearButton.classList.add('clear-button');
clearButton.textContent = 'Clear completed';

listContainer.appendChild(taskInput);

const renderList = (task) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const taskDescription = document.createElement('p');
  const threeDots = document.createElement('i');

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

  listContainer.appendChild(li);
};

toDoTasks
  .sort((a, b) => a.index - b.index)
  .forEach((task) => {
    renderList(task);
  });

if (toDoTasks.length) {
  wraper.appendChild(clearButton);
}
