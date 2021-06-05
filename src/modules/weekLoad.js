const week = () =>{
    const content = document.querySelector('#content');
    content.innerHTML = "";
    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const date = new Date();
    const todayDate = date.toUTCString().split(" ")[1];
    console.log(todayDate + 6);
    const weekTodoList = myTodoList.filter(todo => {
        let date = todo.dueDate.slice(8,10);
        date = Number(date);
        if(todayDate + 6 >= date)return todo;
    })
    weekTodoList.map(todo =>{
        const list = document.createElement('p');
        list.className = 'item';
        list.innerText = todo.title;
        content.appendChild(list);
    })
}
export default week;