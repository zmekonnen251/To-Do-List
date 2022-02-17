const checkedEvent = (event, toDoTask) => {
  if (event.target.classList.contains('check-box')) {
    if (event.target.checked) {
      const taskToBeFlaged = toDoTask.tasksToDo.find(
        (task) => task.index === Number(event.target.parentNode.id),
      );

      taskToBeFlaged.completed = true;
    }
  }
};

export default checkedEvent;
