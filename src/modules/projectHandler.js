import { checkboxClick, createHeader, todayHomeWeek } from "./commonStyle";
import { createListItem } from "./createListItem";

const projectHandle = (project) => {
    const title = project.innerText;
    const singleProjectList = JSON.parse(localStorage.getItem(title));
    // console.log(title, singleProjectList);
    const content = document.querySelector('#content');
    content.innerHTML = "";
    createHeader(title.toUpperCase());
    todayHomeWeek('#02647a','#02647a', '#02647a');

    singleProjectList && singleProjectList.map((todo => {
        const list = createListItem(todo);
        content.appendChild(list);
    }));
    checkboxClick();
}
export default projectHandle;