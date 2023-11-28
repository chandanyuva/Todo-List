
import {projects} from "./pageProjects";


function getTasks(){
    const currentProjectTasks = [];

    projects.forEach((project)=>{
        if (project.isActive){
            currentProjectTasks.push(...project.tasks);
        }
    })
    return currentProjectTasks
}

function addTasks(){
    const title = prompt('enter task title');
    const discription = prompt('enter task discription');
    const dueDate = new Date (prompt('enter dueDate'));
    const options = {
        '1':1,
        '2':2,
        '3':3
    }
    const priority = prompt('set task priority',options);
    console.log(title,discription,dueDate,priority);
}


// console.log(currentProjectTasks);
console.log("tasks loaded");

export {getTasks,addTasks};