import home from "./homeLoad";

const todoItem = {
    projectName: '',
    title: 'title',
    description: 'description',
    dueDate: 'due-date',
    priority: 'priority',
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
    input.required = true;
    input.autocomplete = false;
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
const handleFormSubmit = (e, projectTitle) => {
    e.preventDefault();

    //all project locally set
    let myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    todoItem.projectName = projectTitle;
    myTodoList.push(todoItem);
    localStorage.setItem('myTodoList', JSON.stringify(myTodoList));
    const container = document.querySelector('.container');
    container.style.display = 'flex';
    todoItem.title = '';
    todoItem.description = '';
    todoItem.dueDate = '';
    todoItem.priority = '';
    home();
}
const todoForm = (projectTitle) => {
    const infoContainer = document.querySelector('#content');
    infoContainer.innerHTML = "";
    const form = document.createElement('form');
    form.setAttribute('id', 'todo-form');
    form.onsubmit = (e)=>handleFormSubmit(e, projectTitle);

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