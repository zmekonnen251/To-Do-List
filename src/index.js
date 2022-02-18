import './style.css';
import Tasks from './add-remove.js';
import { renderTask, taskContainer } from './render-task.js';

const taskInput = document.createElement('input');
const wraper = document.querySelector('.wraper');
const clearButton = document.createElement('button');

taskInput.className = 'task-input-field';
taskInput.type = 'text';
taskInput.placeholder = 'Add to your list';
taskInput.name = 'task-input';

wraper.appendChild(taskInput);
wraper.appendChild(taskContainer);

clearButton.classList.add('clear-button');
clearButton.textContent = 'Clear completed';

const toDoTask = new Tasks();

if (toDoTask.tasksToDo.length) {
  toDoTask.tasksToDo.forEach((task) => renderTask(task, toDoTask));
  wraper.appendChild(clearButton);
}

const newTask = document.querySelector('.task-input-field');
newTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && newTask.value !== '') {
    const newTaskItem = {
      description: newTask.value,
      completed: false,
      index: toDoTask.tasksToDo.length,
    };

    toDoTask.addTask(newTaskItem);

    newTask.value = '';
    renderTask(newTaskItem, toDoTask);
  }
  if (toDoTask.tasksToDo.length === 1) {
    wraper.appendChild(clearButton);
  }
});

clearButton.addEventListener('click', (event) => {
  toDoTask.removeTask(event);
  taskContainer.innerHTML = '';
  toDoTask.tasksToDo.forEach((task) => renderTask(task, toDoTask));
});
