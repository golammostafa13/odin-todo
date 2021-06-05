import home from './homeLoad';
let myTodoList = [];
localStorage.setItem('myTodoList', JSON.stringify(myTodoList))
const todoItem = {
    title: '',
    description: '',
    dueDate: '',
    priority: '',
}

const createInput = (id, placeholder, text, type, name) => {
    const p = document.createElement('p');
    p.setAttribute('id', id);
    const label = document.createElement('label');
    label.innerText = text;
    const input = document.createElement('input');
    input.type = type;
    input.name = name;
    input.placeholder = placeholder;
    input.onblur = handleInput;
    p.appendChild(label);
    p.appendChild(input);

    return p;
}
const createPriority = () => {
    const p = document.createElement('p');
    p.setAttribute('id','priority');

    const label = document.createElement('label');
    label.innerText = "Priority";
    const input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('list', 'list')
    input.name = 'priority';
    input.onblur = handleInput;

    const dataList = document.createElement('datalist');
    dataList.setAttribute('id', 'list');
    const low = document.createElement('option');
    low.innerText = 'Low';
    const medium = document.createElement('option');
    medium.innerText = 'Medium';
    const high = document.createElement('option');
    high.innerText = 'High';

    dataList.appendChild(low);
    dataList.appendChild(medium);
    dataList.appendChild(high);

    p.appendChild(label);
    p.appendChild(input);
    p.appendChild(dataList);

    return p;
}
const handleInput = (e) => {
    e.preventDefault();
    todoItem[e.target.name] = e.target.value;
}
const handleFormSubmit = (e) => {
    e.preventDefault();
    myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    console.log(myTodoList);
    myTodoList.push(todoItem);
    localStorage.setItem('myTodoList', JSON.stringify(myTodoList));
    const container = document.querySelector('.container');
    container.style.display = 'flex';
    const formContainer = document.querySelector('#form-container');
    formContainer.innerHTML = '';
    formContainer.style.display = 'none';
    todoItem.title = '';
    todoItem.description = '';
    todoItem.dueDate = '';
    todoItem.priority = '';
    home();
}
const todoForm = () => {
    const infoContainer = document.querySelector('#info-container');
    infoContainer.innerHTML = "";

    console.log('todo form');
    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    form.onsubmit = handleFormSubmit;

    const title = createInput('title', 'title', 'Title', 'text', 'title');
    const description = createInput('description', 'e.g net bill', 'Description', 'text', 'description');
    const dueDate = createInput('due-date', '', 'Due Date', 'date', 'dueDate');
    const priority = createPriority();

    const addTodoBtn = document.createElement('button');
    addTodoBtn.innerText = "Add Todo Item";
    addTodoBtn.setAttribute('id', 'addTodoItem');

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(addTodoBtn);
    //added form to info container
    infoContainer.appendChild(form);
}
export default todoForm;