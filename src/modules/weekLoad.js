import { checkboxClick, createHeader, todayHomeWeek } from "./commonStyle";
import { createListItem } from "./createListItem";

const week = () =>{
    const content = document.querySelector('#content');
    content.innerHTML = "";
    
    todayHomeWeek('#02647a', '#02647a', 'orange')
    createHeader('This Week');

    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const date = new Date();
    const todayDate = date.toUTCString().split(" ")[1];
    const weekTodoList = myTodoList.filter(todo => {
        let date = todo.dueDate.slice(8,10);
        date = Number(date);
        if(todayDate + 6 >= date)return todo;
    })
    weekTodoList.map(todo =>{
        const list = createListItem(todo);
        content.appendChild(list);
    })
    checkboxClick();
}
export default week;