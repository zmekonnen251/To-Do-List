export default class Tasks {
  constructor() {
    this.tasksToDo = JSON.parse(localStorage.getItem('storedTask')) || [];
    this.removeTask();
  }

  addTask(task) {
    this.tasksToDo.push(task);
    localStorage.setItem('storedTask', JSON.stringify(this.tasksToDo));
  }

  removeTask() {
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
}
