export const createListItem = (todo) => {
    // console.log(todo);      
    // if(!todo)return null;
    const list = document.createElement('div');
    list.className = 'item';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    // checkbox.onclick = handleCheck;
    
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    const spanTitle = document.createElement('span');
    spanTitle.innerText = todo.title;
    const spanDescription = document.createElement('span');
    spanDescription.innerText = todo.description;;
    const spanDate = document.createElement('span');
    spanDate.innerText = todo.dueDate;
    const spanPriority = document.createElement('span');
    spanPriority.innerText = todo.priority;
    const deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    list.appendChild(checkbox);
    todoDiv.appendChild(spanTitle);
    todoDiv.appendChild(spanDescription);
    todoDiv.appendChild(spanDate);
    todoDiv.appendChild(spanPriority);
    list.appendChild(todoDiv);
    list.append(deleteIcon);

    return list;
}