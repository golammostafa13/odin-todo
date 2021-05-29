const cardStyle = (card) => {
    card.style.width = '480px';
    card.style.height = '300px';
    card.style.background = 'lightgray';
    card.style.display = 'flex';
}
const partStyle = (part, width, height, justify, bgColor) => {
    part.style.width = width;
    part.style.height = height;
    part.style.background = bgColor;
    part.style.display = 'flex';
    part.style.flexDirection = 'column';
    part.style.alignItems = 'center';
    part.style.justifyContent = justify;
}
const createPart = (id) => {
    const part = document.createElement('div');
    part.setAttribute('id', id);
    return part;
}
const createBtn = (id, text) => {
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    btn.innerText = text;
    return btn;
}
const createCard = () =>{
    const card = document.createElement('div');
    card.setAttribute('id', 'card');

    cardStyle(card);

    const sidebar = createPart('sidebar');
    partStyle(sidebar, '30%', '100%', 'center', '#999');
    
    const projectBtn = createBtn('card-project-btn', 'Add Project');

    const todoBtn = createBtn('card-todo-btn', 'Add Todo');
    sidebar.appendChild(todoBtn);
    sidebar.appendChild(projectBtn);

    card.appendChild(sidebar);

    const infoContainer = createPart('info-container');

    partStyle(infoContainer, '70%', '100%', 'space-between', '#555');
    card.appendChild(infoContainer);

    return card;
}
export default createCard;