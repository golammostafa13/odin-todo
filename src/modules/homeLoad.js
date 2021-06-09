import { checkboxClick, createHeader, todayHomeWeek } from "./commonStyle";
import { createListItem } from "./createListItem";

const home = () => {
    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const content = document.querySelector('#content');
    content.innerHTML = "";

    todayHomeWeek('#02647a','orange', '#02647a');
    
    createHeader('Home');

    myTodoList && myTodoList.map((todo => {
        const list = createListItem(todo);
        content.appendChild(list);
    }));
    checkboxClick();
}
export default home;