import './style.css';
import Tasks from './add-remove.js';
import { renderTask, taskContainer } from './render-task.js';

const taskInput = document.createElement('input');

taskInput.className = 'task-input-field';
taskInput.type = 'text';
taskInput.placeholder = 'Add to your list';
taskInput.name = 'task-input';

const wraper = document.querySelector('.wraper');
const clearButton = document.createElement('button');

wraper.appendChild(taskInput);
wraper.appendChild(taskContainer);
const toDoTask = new Tasks();

clearButton.classList.add('clear-button');
clearButton.textContent = 'Clear completed';
if (toDoTask.tasksToDo.length) {
  toDoTask.tasksToDo.forEach((task) => renderTask(task));
  wraper.appendChild(clearButton);
}

const checkedEvent = (event) => {
  if (event.target.classList.contains('check-box')) {
    if (event.target.checked) {
      const taskToBeFlaged = toDoTask.tasksToDo.find(
        (task) => task.index == event.target.parentNode.id
      );
      console.log(event.target.parentNode.id);
      taskToBeFlaged.completed = true;
      console.log(taskToBeFlaged);
    }
  }
};

taskContainer.addEventListener('change', checkedEvent);

const newTask = document.querySelector('.task-input-field');
newTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const newTaskItem = {
      description: newTask.value,
      completed: false,
      index: toDoTask.tasksToDo.length,
    };
    toDoTask.addTask(newTaskItem);
    newTask.value = '';
    renderTask(newTaskItem);
  }
  if (toDoTask.tasksToDo.length === 1) {
    wraper.appendChild(clearButton);
  }
});

clearButton.addEventListener('click', () => {
  toDoTask.removeTask();
  taskContainer.innerHTML = '';
  toDoTask.tasksToDo.forEach((task) => renderTask(task));
  document.location.reload();
});
