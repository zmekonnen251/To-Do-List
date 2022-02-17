export default class Tasks {
  constructor() {
    this.tasksToDo = JSON.parse(localStorage.getItem('storedTask')) || [];
    this.saveTask = this.saveTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    this.tasksToDo.push(task);
    localStorage.setItem('storedTask', JSON.stringify(this.tasksToDo));
  }

  removeTask(event) {
    if (event.target.classList.contains('trash-icon')) {
      const indexToBeRemoved = Number(event.target.parentNode.id);
      this.tasksToDo.splice(indexToBeRemoved, 1);
      event.target.parentNode.remove();
    }

    for (let i = 0; i < this.tasksToDo.length; i += 1) {
      if (this.tasksToDo[i].completed) {
        this.tasksToDo.splice(i, 1);
      }
    }

    this.tasksToDo.forEach((task) => {
      task.index = this.tasksToDo.indexOf(task);
    });

    localStorage.setItem('storedTask', JSON.stringify(this.tasksToDo));
  }

  saveTask(event) {
    const editInput = event.target;

    if (editInput.value.length > 0 && event.keyCode === 13) {
      const editIndex = editInput.parentNode.id;

      this.tasksToDo[editIndex].description = editInput.value;
      localStorage.setItem('storedTask', JSON.stringify(this.tasksToDo));

      const p = document.createElement('p');
      p.className = 'task-description';
      p.innerHTML = editInput.value;
      editInput.parentNode.childNodes[1].replaceWith(p);
    }
  }
}
