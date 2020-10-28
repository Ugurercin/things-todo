const splashScreen = document.querySelector('.splash');
document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splashScreen.classList.add('display-none');
    console.error("done")
  }, 1);
})

const todoInputButton = document.getElementById('todo-input-button');
const todoInput = document.getElementById('todo-input');


let todoItem = [];




const validateInputField = () => {
  if(todoInput.value.length <= 0){
    alert("Please enter a todo")
    location.reload();
  }
};


const generateID = () => {
  return Math.floor(Math.random() * 100); 
}

const getTodoCreationDate = () => {
  return [month, date, year] = (new Date()).toLocaleDateString().split("/")
}

function createTodoObject() {
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
}


todoInputButton.addEventListener('click', createTodoObject);



