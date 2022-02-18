const checkedEvent = (event, toDoTask) => {
  if (event.target.classList.contains('check-box')) {
    if (event.target.checked) {
      const checkedIndex = event.target.parentNode.id;
      toDoTask.tasksToDo[checkedIndex].completed = true;
    } else {
      const checkedIndex = event.target.parentNode.id;
      toDoTask.tasksToDo[checkedIndex].completed = false;
    }
  }
  window.localStorage.setItem('storedTask', JSON.stringify(toDoTask.tasksToDo));
};

export default checkedEvent;
