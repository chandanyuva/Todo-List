import heading from "./pageHeading";
import { projects, showProjectCreationForm } from "./pageProjects";
import { getTasks, addTasks, editTask } from "./pageTasks";

function renderLayout() {
    const content = document.querySelector("#content");

    const headingDiv = document.createElement("div");
    headingDiv.classList.add("headingDiv");

    const projectsDiv = document.createElement("div");
    projectsDiv.classList.add("projectsDiv");

    const tasksDiv = document.createElement("div");
    tasksDiv.classList.add("tasksDiv");

    const footerDiv = document.createElement("div");
    footerDiv.classList.add("footerDiv");

    //appending
    content.appendChild(headingDiv);
    content.appendChild(projectsDiv);
    content.appendChild(tasksDiv);
    content.appendChild(footerDiv);
}

function renderHeading() {
    heading();
}

function renderProjects() {
    const projectsDiv = document.querySelector(".projectsDiv");

    while (projectsDiv.firstChild) {
        projectsDiv.removeChild(projectsDiv.firstChild);
    }

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProject");
    addProjectBtn.innerText = "+ add project";
    addProjectBtn.addEventListener("click", () => {
        showProjectCreationForm();
    });

    projectsDiv.appendChild(addProjectBtn);

    const pList = document.createElement("ul");
    pList.classList.add("projectList");

    // console.log(projects);
    projects.forEach((project) => {
        const pItem = document.createElement("li");
        // pList.firstChild.classList.toggle('selected');
        pItem.addEventListener("click", (event) => {
            // console.log(event);
            projects.forEach((project) => {
                project.isActive = false;
            });
            project.isActive = true;
            const selected = document.querySelector(".selected");
            selected.classList.toggle("selected");
            pItem.classList.toggle("selected");
            renderTasks();
        });
        pItem.innerText = `${project.name}`;
        pList.append(pItem);
    });
    pList.firstChild.classList.toggle("selected");
    renderTasks();

    projectsDiv.appendChild(pList);
}

function renderTasks() {
    // console.log(currentProjectTasks);

    const tasksDiv = document.querySelector(".tasksDiv");
    while (tasksDiv.firstChild) {
        tasksDiv.removeChild(tasksDiv.firstChild);
    }

    //add tasks btn
    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("addTask");
    addTaskBtn.innerText = "+ add task";
    addTaskBtn.addEventListener("click", (event) => {
        // console.log(event);
        addTasks();
    });

    tasksDiv.appendChild(addTaskBtn);
    //add tasks btn

    //display tasks

    const tList = document.createElement("ul");
    tList.classList.add("tasksList");

    const tItem = document.createElement("li");
    tItem.classList.add("tasksListHeader");

    const tItemDiv = document.createElement("div");
    tItemDiv.classList.add("tasksItemDiv");

    const tCompleted = document.createElement("p");
    const tTitle = document.createElement("p");
    const tDiscrip = document.createElement("p");
    const tDueDate = document.createElement("p");
    const tPriority = document.createElement("p");
    const tEdit = document.createElement("p");

    tCompleted.innerText = "Completed";
    tTitle.innerText = `Title`;
    tDiscrip.innerText = `Discription`;
    tDueDate.innerText = `Due-Date`;
    tPriority.innerText = `Priority`;
    tEdit.innerText = "Edit";

    tItemDiv.appendChild(tCompleted);
    tItemDiv.appendChild(tTitle);
    tItemDiv.appendChild(tDiscrip);
    tItemDiv.appendChild(tDueDate);
    tItemDiv.appendChild(tPriority);
    tItemDiv.appendChild(tEdit);

    tItem.appendChild(tItemDiv);

    tList.append(tItem);

    const currentProjectTasks = getTasks();

    currentProjectTasks.forEach((task) => {
        const tItem = document.createElement("li");

        const tItemDiv = document.createElement("div");
        tItemDiv.classList.add("tasksItemDiv");

        tItemDiv.classList.add(`${task.title.split(" ").join("_")}`);

        const tCompleted = document.createElement("INPUT");
        tCompleted.classList.add("check");
        tCompleted.setAttribute("type", "checkbox");
        const tTitle = document.createElement("p");
        const tDiscrip = document.createElement("p");
        const tDueDate = document.createElement("p");
        const tPriority = document.createElement("p");
        const tEdit = document.createElement("button");
        tEdit.classList.add("editBtn");

        if (task.completed) {
            tCompleted.setAttribute("checked", "");
        }
        tCompleted.addEventListener("change", (event) => {
            if (event.target.checked) {
                task.completed = true;
            } else {
                task.completed = false;
            }
            // console.log(task);
            renderTasks();
        });

        tTitle.innerText = `${task.title}`;
        tDiscrip.innerText = `${task.discription}`;
        tDueDate.innerText = `${task.dueDate}`;
        tPriority.innerText = `${task.priority}`;
        tEdit.innerText = "Edit";

        tItemDiv.appendChild(tCompleted);
        tItemDiv.appendChild(tTitle);
        tItemDiv.appendChild(tDiscrip);
        tItemDiv.appendChild(tDueDate);
        tItemDiv.appendChild(tPriority);
        tItemDiv.appendChild(tEdit);

        tItem.appendChild(tItemDiv);

        tEdit.addEventListener("click", function (event) {
            editTask(
                task.title,
                task.discription,
                task.dueDate,
                task.priority,
                task.completed
            );
        });

        tList.append(tItem);
    });

    //display end

    tasksDiv.appendChild(tList);
}

function renderFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML =
        '<p>Copyright © 2023 Github:<a href="https://github.com/chandanyuva" target="_blank">chandanyuva</a></p>';

    const footerDiv = document.querySelector(".footerDiv");
    footerDiv.appendChild(footer);
}

export {
    renderLayout,
    renderHeading,
    renderProjects,
    renderTasks,
    renderFooter,
};
