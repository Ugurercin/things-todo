const splashScreen = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splashScreen.classList.add('display-none');
    console.error("done")
  }, 1);
})

const todoUserInput = document.getElementById("todo-input");
const todoUserInputButton = document.getElementById('todo-input-button');


class TodoItem {
  constructor(image, todo, priority, initilDate, dueDate, state) {
    this.image = image;
    this.todo = todo;
    this.priority = priority;
    this.initilDate = initilDate;
    this.dueDate = dueDate;
    this.state = state;
  }
  
}



