import { checkboxClick, createHeader, todayHomeWeek } from "./commonStyle";
import { createListItem } from "./createListItem";

const projectHandle = (project) => {
    const title = project.innerText;

    const content = document.querySelector('#content');
    content.innerHTML = "";
    createHeader(title.toUpperCase());
    todayHomeWeek('#02647a','#02647a', '#02647a');

    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const singleProjectList = myTodoList.filter(todo =>{
        if(todo.projectName === title)return todo;
    });
    singleProjectList.map((todo => {
        const list = createListItem(todo);
        content.appendChild(list);
    }));
    checkboxClick();
}
export default projectHandle;