import form from './modules/formLoad';
import home from './modules/homeLoad';
import loadLocalStorage from './modules/loadLocalStorage';
import today from './modules/todayLoad';
import week from './modules/weekLoad';

const allEvents = () => {
    const homeBtn = document.querySelector('#home');
    const todayBtn = document.querySelector('#today');
    const weekBtn = document.querySelector('#week');
    const addAll = document.querySelector('#add-all');
    const projects = document.querySelectorAll('.project');
    homeBtn.addEventListener('click', home);
    todayBtn.addEventListener('click', today);
    weekBtn.addEventListener('click', week);
    addAll.addEventListener('click', form);
}
const init = () =>{
    loadLocalStorage();
    home();
    allEvents();
}
init();
