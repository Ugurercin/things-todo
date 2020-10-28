const splashScreen = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splashScreen.classList.add('display-none');
    console.error("done")
  }, 1);
})

//todo state
const todoInput = document.getElementById('todo-input-todo');
const todoInputButton = document.getElementById('todo-input-button-todo');

//doing state
const todoInputDoing = document.getElementById('todo-input-doing')
const todoInputButtonDoing = document.getElementById('todo-input-button-doing');

//done state
const todoInputDone = document.getElementById('todo-input-done')
const todoInputButtonDone = document.getElementById('todo-input-button-done');



let todoItem = [];




const validateInputField = () => {
  if(todoInput.value.length <= 0){
    alert("Please enter a todo")
    location.reload();
  }
};


const generateID = () => {
  return Math.floor(Math.random() * 100); 
};

const getTodoCreationDate = () => {
  return [month, date, year] = (new Date()).toLocaleDateString().split("/")
};

function todoTargetState(){
  const target = this.event.target;
  const parent = target.previousElementSibling;
  return parent;
};


function createTodoDiv(){
  const mainDiv = document.querySelector(".todo");
};



function createTodoObject(event) {
  const target = todoTargetState(this.event)
  
  console.error(target);

  


  createTodoDiv;
  validateInputField;
  todoItem.push({
    todoId: generateID(),
    todoTask: todoInput.value,
    todoCreationDate: getTodoCreationDate(),
    todoDueDate: "20.02.2021",
    todoPriority: "low",
    todoState: "doing"
  });
  
  return todoItem;
};


function createTodoCard(){

};


todoInputButton.addEventListener('click', createTodoObject);
todoInputButtonDoing.addEventListener('click', createTodoObject);
todoInputButtonDone.addEventListener('click', createTodoObject);



