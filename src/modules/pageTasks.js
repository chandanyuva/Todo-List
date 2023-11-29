
import {projects,getActiveProject} from "./pageProjects";
import { renderTasks } from "./DomUtil";


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
    // console.log(getActiveProject());
    const addTask = document.querySelector('.addTask');

    const form = document.createElement('form');
    form.classList.add('addTaskForm')

    // Add a title input field
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    // titleInput.setAttribute("required", "")
    titleInput.placeholder = 'Task title';
    form.appendChild(titleInput);

    // Add a description textarea
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.placeholder = 'Task description';
    form.appendChild(descriptionTextarea);

    // Add a due date input field
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.placeholder = 'Due date';
    form.appendChild(dueDateInput);

    // Add a priority input field
    const priorityInput = document.createElement('input');
    priorityInput.type = 'number';
    priorityInput.placeholder = 'Priority';
    priorityInput.setAttribute('min','1');
    priorityInput.setAttribute('max','3');

    form.appendChild(priorityInput);

    // Add Btns Div

    const BtnsDiv = document.createElement('div');
    BtnsDiv.classList.add('addTaskBtns');
    // Add a cancel button
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', (event) => {
        addTask.removeChild(form);
        addTask.disabled = false;
        // Reset the form
        form.reset();
      });
    BtnsDiv.appendChild(cancelButton);

    // Add a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    BtnsDiv.appendChild(submitButton);

    form.appendChild(BtnsDiv);

    // Add an event listener to the submit button
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (titleInput.value === ""){
            alert("task titel cannot be empty");
            return
        }
        const activeProject = getActiveProject();
        activeProject.addTask(titleInput.value,descriptionTextarea.value,dueDateInput.value,priorityInput.value);
        renderTasks();

        // Reset the form
        addTask.disabled = false;
        form.reset();
    });

    
    addTask.disabled = true;
    addTask.appendChild(form);
}


// console.log(currentProjectTasks);
console.log("tasks loaded");

export {getTasks,addTasks};