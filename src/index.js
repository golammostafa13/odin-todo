import form from './modules/formLoad';
const myTodoList = [];
localStorage.setItem('myTodoList', JSON.stringify(myTodoList));

const addAll = document.querySelector('#add-all');
addAll.addEventListener('click', () =>{
    form();
})
