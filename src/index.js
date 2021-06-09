import home from './modules/homeLoad';
import loadLocalStorage from './modules/loadLocalStorage';
import projectForm from './modules/projectFormLoad';
import projectHandle from './modules/projectHandler';
import today from './modules/todayLoad';
import todoForm from './modules/todoFormLoad';
import week from './modules/weekLoad';
const allEvents = () => {
    const homeBtn = document.querySelector('#home');
    const todayBtn = document.querySelector('#today');
    const weekBtn = document.querySelector('#week');
    const projectBtn = document.querySelector('#create-project');
    homeBtn.addEventListener('click', home);
    todayBtn.addEventListener('click', today);
    weekBtn.addEventListener('click', week);
    projectBtn.addEventListener('click', projectForm);

}
const allProjectEvents = () => {

    const addTodoBtns = document.querySelectorAll('.project-add-todo-btn');
    // console.log(projectTitle);
    for(let i = 0; i < addTodoBtns.length; i++) {
        const addTodo = addTodoBtns[i];
        const projectTitle = addTodo.previousElementSibling.innerText;
        addTodo.addEventListener('click', ()=>todoForm(projectTitle));
    }
}
const allProjectsHandle = () => {
    const projects = document.querySelectorAll('.project-title');
    for(let i = 0; i < projects.length; i++) {
        let project = projects[i];
        project.addEventListener('click',()=>projectHandle(project));
    }
}
export const init = () =>{
    loadLocalStorage();
    home();
    allEvents();
    allProjectEvents();
    allProjectsHandle();
}
init();
