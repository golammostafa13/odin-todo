const loadLocalStorage = () => {
    let myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    if(!myTodoList) {
        myTodoList = [{title: 'Title', description: 'Description', dueDate: 'Due Date', priority: 'Priority'}]
        localStorage.setItem('myTodoList', JSON.stringify(myTodoList));
    }
}
export default loadLocalStorage;