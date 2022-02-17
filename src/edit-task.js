const editTask = (event, toDoTask) => {
  console.log('Hello');

  const task = event.target.innerHTML;

  const itemInput = document.createElement('input');
  itemInput.type = 'text';
  itemInput.value = task;
  itemInput.classList.add('edit');
  itemInput.addEventListener('keypress', toDoTask.saveTask);
  event.target.parentNode.childNodes[1].replaceWith(itemInput);
};

export default editTask;
