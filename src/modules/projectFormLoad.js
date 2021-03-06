import { createProjectList } from "./createProjectList";

const projectItem = {
    title: '',
}
let myProjectList = [];
localStorage.setItem('myProjectList', JSON.stringify(myProjectList));

const handleInput = (e) => {
    e.preventDefault();
    projectItem[e.target.name] = e.target.value;
}
const handleFormSubmit = (e) => {
    e.preventDefault();
    // Project load on local storage
    myProjectList = JSON.parse(localStorage.getItem('myProjectList'));
    myProjectList.push(projectItem);
    localStorage.setItem('myProjectList', JSON.stringify(myProjectList));

    const container = document.querySelector('.container');
    container.style.display = 'flex';
    projectItem.title = '';
    createProjectList();
}
const projectForm = () => {
    const infoContainer = document.querySelector('#content');
    infoContainer.innerHTML = "";

    const form = document.createElement('form');
    form.setAttribute('id', 'project-form');
    form.onsubmit = handleFormSubmit;

    // form info start
    const p = document.createElement('p');
    p.className = 'projects';
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'title';
    input.onblur = handleInput;
    input.required = true;
    input.placeholder = "Project Name";
    p.appendChild(input);

    const createProjectBtn = document.createElement('button');
    createProjectBtn.innerHTML = "Create Project";
    createProjectBtn.type = 'submit';
    // form info end

    form.appendChild(p);
    form.appendChild(createProjectBtn);
    infoContainer.appendChild(form);
}
export default projectForm;