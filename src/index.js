import form from './modules/formLoad';
import home from './modules/homeLoad';
import today from './modules/todayLoad';
import week from './modules/weekLoad';

const addAll = document.querySelector('#add-all');
addAll.addEventListener('click', () =>{
    form();
})
const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () =>{
    home();
})
const todayBtn = document.querySelector('#today');
todayBtn.addEventListener('click', () =>{
    today();
})
const weekBtn = document.querySelector('#week');
weekBtn.addEventListener('click', () =>{
    week();
})