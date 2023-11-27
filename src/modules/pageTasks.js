
import {projects} from "./pageProjects";


const currentProjectTasks = [];

projects.forEach((project)=>{
    const tasks = []
    tasks.push(...project.tasks)
    if (project.isActive){
        currentProjectTasks.push(...tasks);
    }
    // allProjectTasks.push(tasks);
})


// console.log(allProjectTasks);
console.log("tasks loaded");

export {currentProjectTasks};