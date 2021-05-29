import createCard from './cardLoad';
import insideForm from './insideCardLoad';
const form = () => {
    const container = document.querySelector('.container');
    container.style.display = 'none';
    const formContainer = document.querySelector('#form-container');
    formContainer.style.display = 'flex';
    const card = createCard();
    formContainer.appendChild(card);
     //bitorer card create 
    insideForm();
}
export default form;