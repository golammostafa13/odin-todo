import { init } from "..";

export const createProjectList = () => {
    const myProjectList = JSON.parse(localStorage.getItem('myProjectList'));
    const projects = document.querySelector('#projects');
    projects.innerHTML = '';
    myProjectList.map(project =>{
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        
        const addTodoBtn = document.createElement('span');
        const projectTitle = document.createElement('span');
        projectTitle.className = 'project-title';
        addTodoBtn.className = 'project-add-todo-btn';
        addTodoBtn.innerText = '+';
        projectTitle.innerText = project.title;
        
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(addTodoBtn);

        projects.appendChild(projectDiv);

        //single project locally set
    })
    init();
}