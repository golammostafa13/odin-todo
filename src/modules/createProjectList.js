export const createProjectList = () => {
    const myProjectList = JSON.parse(localStorage.getItem('myProjectList'));
    const projects = document.querySelector('#projects');
    projects.innerHTML = '';
    myProjectList.map(project =>{
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerText = project.title;
        projects.appendChild(projectDiv);
    })
}