export const todayHomeWeek = (today, home, week) => {
    const todayBtn = document.querySelector('#today');
    todayBtn.style.background = today;
    const homeBtn = document.querySelector('#home');
    homeBtn.style.background = home;
    const weekBtn = document.querySelector('#week');
    weekBtn.style.background = week;
}

export function checkboxClick(){
    const checkboxes = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        const checkbox = checkboxes[i];
        checkbox.addEventListener('change', (e)=>{
            if(e.target.checked) {
                checkbox.parentElement.style.background = '#e3e3e3';
                checkbox.parentElement.style.color = '#777';
            }
            else{
                checkbox.parentElement.style.background = '#034e5f';
                checkbox.parentElement.style.color = '#fff';
            }
        })
    }
}
export const createHeader = (text) => {
    const content = document.querySelector('#content');
    const header = document.createElement('p');
    header.innerText = text;
    header.className = 'header';
    content.appendChild(header);
}