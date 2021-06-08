export const handleProjects = () =>{
    for(let i = 0; i < projects.length; i++){
        let project = projects[i];
        project.addEventListener('click',()=>{
            console.log('click');
        })
    }
}