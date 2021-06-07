import { checkboxClick, createHeader, todayHomeWeek } from "./commonStyle";
import { createListItem } from "./createListItem";

const today = () =>{
    const content = document.querySelector('#content');
    content.innerHTML = "";
    
    todayHomeWeek('orange', '#02647a', '#02647a');
    
    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const date = new Date();
    const todayDate = date.toUTCString().split(" ")[1];
    const todayTodoList = myTodoList.filter(todo => {
        const toDate = todo.dueDate.slice(8,10);
        if(todayDate === toDate)return todo;
    })
    createHeader('Today');

    todayTodoList.map(todo =>{
        const list = createListItem(todo);
        content.appendChild(list);
    })
    checkboxClick();
}
export default today;