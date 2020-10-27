const splashScreen = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splashScreen.classList.add('display-none');
    console.error("done")
  }, 1);
})

const todoInput = document.getElementById('todo-input');
const todoInputButton = document.getElementById('todo-input-button');

class TodoItem{
  constructor(id,task, priorty, createDate, dueDate, state, image) {
    this.todoId = id;
    this.todoTask = task;
    this.todoPriorty = priorty;
    this.todoCreationDate = createDate;
    this.todoDueDate = dueDate;
    this.todoState = state;
    this.todoImage = image;
  }
  
};

let validateInputField = () => {
  if(todoInput.value.length <= 0)
    alert("Please enter a todo")
  location.reload();
}



function createTodoItem() {
  validateInputField();
  
}



todoInputButton.addEventListener('click', createTodoItem);



