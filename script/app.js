const splashScreen = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splashScreen.classList.add('display-none');
    console.error("done")
  }, 1);
})


const todoInput = document.getElementById('todo-input');
const todoInputButton = document.getElementById('todo-input-button');

class TodoItem extends createTodoCard{
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
  if(todoInput.value.length <= 0){
    alert("Please enter a todo")
    location.reload();
  }
};


let generateID = () => {
  return Math.floor(Math.random() * 100); 
}

let getTodoCreationDate = () => {
  return [month, date, year] = (new Date()).toLocaleDateString().split("/")
}

function createTodoParams() {
  validateInputField();
  
  const todoId = generateID();
  const creationDate = getTodoCreationDate();
  const todoTask = todoInput.value;

  populateTodoItem(todoId, todoTask, creationDate.toString());



}

function populateTodoItem(id,task, date){
  const todoItem = new TodoItem(id, task, "low", date);

  
  
}


function createTodoCard(){

  const container = document.querySelector(".container");
  const div = document.createElement('div');
  div.classList = "card";
  

}


todoInputButton.addEventListener('click', createTodoParams);



