
import heading from './pageHeading'
import {projects} from './pageProjects'
import {currentProjectTasks} from './pageTasks'

function renderHeading(){
    heading()
}

function renderProjects(){
    const content = document.querySelector("#content");
    const pList = document.createElement('ul');
    // console.log(projects);
    projects.forEach((project)=>{
        const pItem = document.createElement('li');
        pItem.innerText = `${project.name}`;
        pList.append(pItem);
    })
    content.appendChild(pList);
    console.log('projects loaded');
}

function renderTasks(){
    console.log(currentProjectTasks);
    const content = document.querySelector('#content');
    const tList = document.createElement('ul');
    currentProjectTasks.forEach((task)=>{
        const tItem = document.createElement('li');
        tItem.innerText = `${task.title}`;
        tList.append(tItem);
    })
    content.appendChild(tList);
}

export {renderHeading,renderProjects,renderTasks};