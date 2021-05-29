import projectForm from './projectFormLoad';
import todoForm from './todoFormLoad';
const insideCard = () =>{
    const insideProjectBtn = document.querySelector('#card-project-btn');
    insideProjectBtn.addEventListener('click', () =>{
        projectForm();
    })
    const insideTodoBtn = document.querySelector('#card-todo-btn');
    insideTodoBtn.addEventListener('click', ()=>{
        todoForm();
    })

}
export default insideCard;