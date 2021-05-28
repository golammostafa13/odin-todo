import createCard from './cardLoad';

const form = () => {
    const container = document.querySelector('.container');
    container.innerHTML = "";

    const card = createCard();
    container.appendChild(card);
}
export default form;