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
  const parentId = parent.getAttribute("id")
  const state = parentId.split("-").pop(); // returns the exact state (todo-doing-done)
  const parentDiv = parent.closest(`.${state}`)
  console.error(parent)
  console.error(parentDiv)
  return [parent, parentDiv];
};


function createTodoCard(){
  const cardDiv = document.createElement('div');
  cardDiv.classList = "card";
  
  const img = document.createElement('img');
  img.src = "";
  img.alt = "avatar";
  img.style = "width:100%";

  cardDiv.appendChild(img);

  return cardDiv;

};


function createTodoCardContainer(){
  const todoCard = createTodoCard();
  const cardContainer = document.createElement('div');
  cardContainer.classList = "card-container";

  let elements = [];

  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  const h5 = document.createElement('h5');

  elements.push(h4,p,h5);
  
  for (element of elements) {
    cardContainer.appendChild(element);
  }
  
  cardContainer.appendChild(h4,p,h5);

   todoCard.append(cardContainer);

  
  return todoCard;

}





function createTodoObject(event) {
  todoItem.push({
    todoId: generateID(),
    todoTask: todoInput.value,
    todoCreationDate: getTodoCreationDate(),
    todoImage: "",
    todoDueDate: "20.02.2021",
    todoPriority: "low",
    todoState: "doing"
  });
  
  
  const target = todoTargetState(event);
  
  validateInputField();
  createTodoCard();
  createTodoCardContainer();
  
};


todoInputButton.addEventListener('click', createTodoObject);
todoInputButtonDoing.addEventListener('click', createTodoObject);
todoInputButtonDone.addEventListener('click', createTodoObject);



