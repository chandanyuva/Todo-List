
import Project from './Project';
import {renderProjects} from './DomUtil'

const  projects = [];


function showProjectCreationForm(){

    let name = prompt('enter the project name');
    const p0 = new Project(parseInt(`${projects.length+1}`),`${name}`);
    projects.push(p0);
    // console.log(projects);
    renderProjects();
}


const p1 = new Project(1,'project1',true);
const p2 = new Project(2,'project2');


p1.addTask('task1','p1',87432,2);
p1.addTask('task2','p1',87432,1);
p1.addTask('task3','p1',87432,1);

p2.addTask('task1','p2',87432,2);
p2.addTask('task2','p2',87432,2);

projects.push(p1);
projects.push(p2);

console.log('projects loaded');

export {projects,showProjectCreationForm};