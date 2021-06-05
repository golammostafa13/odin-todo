const today = () =>{
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const date = new Date();
    const todayDate = date.toUTCString().split(" ")[1];
    const todayTodoList = myTodoList.filter(todo => {
        const toDate = todo.dueDate.slice(8,10);
        if(todayDate === toDate)return todo;
    })
    todayTodoList.map(todo =>{
        const list = document.createElement('p');
        list.className = 'item';
        list.innerText = todo.title;
        content.appendChild(list);
    })
}
export default today;