const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const output = document.querySelector('#output');

let todos = [];

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  const data = await res.json()
  todos = data;

  listTodos();
}

fetchTodos();


const listTodos = () => {
  output.innerHTML = ''
  todos.forEach(todo => {
    output.appendChild(createTodoElement(todo))
  })
}


const createTodoElement = todo => {

  let card = document.createElement('div');
  card.classList.add('todo');

  let title = document.createElement('p');
  title.classList.add('todo-title');
  title.innerText = todo.title

  let button = document.createElement('button');
  button.classList.add('btn', 'btn-danger', 'btn-sm');
  button.innerText = 'X';

  
  card.appendChild(title);
  card.appendChild(button);
  
  button.addEventListener('click', () => removeTodo(todo.id, card))
  return card;
}



function removeTodo(id, todo) {
  todos = todos.filter(todo => todo.id !== id) 
  console.log(todos)

  fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'DELETE',
   
  });
        if(todo.status === 200) {
          throw new Error('kan inte ta bort uppgiften')
        }
              
        else if (todo.remove()) {
        } 
      }
      
const validateText = (input) =>{
  if(input.value.trim() === ''){
    console.log(input.parentElement)
    input.parentElement.classList.add('is-invalid')
    input.parentElement.value = '';
  }
  else if(input.value.trim().length <2){
    
  }
  else{
    input.parentElement.classList.remove('is-invalid')
  }
  }
  
  
  form.addEventListener('submit', e =>{
    e.preventDefault();
    
    validateText(todoInput);
    
  })


const createNewTodo = title => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title,
      completed: false
    })
  })
  .then(res => res.json())
  .then(data => {
//     const id = new URLSearchParams(window.location.search).get('id');
// console.log(id)
    console.log(data)
    todos.unshift(data);
    // listTodos()
    output.prepend(createTodoElement(data))
  })
}



form.addEventListener('submit', e => {
  e.preventDefault();
  if(input.value !== '') {
    createNewTodo(input.value);
    input.value = '';
    input.focus()

  }
})