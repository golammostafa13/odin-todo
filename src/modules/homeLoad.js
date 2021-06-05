const home = () => {
    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));
    const content = document.querySelector('#content');
    content.innerHTML = "";
    console.log(myTodoList);
    myTodoList.map((todo => {

        const list = document.createElement('p');
        list.className = 'item';
        list.innerText = todo.title;
        content.appendChild(list);
    }));
}
export default home;