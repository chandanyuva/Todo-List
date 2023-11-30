import Project from "./Project";
import { renderProjects } from "./DomUtil";

const projects = [];

function showProjectCreationForm() {
    let name = prompt("enter the project name");
    if (name === "") {
        alert("Project name can not be empty!");
        showProjectCreationForm();
        return;
    } else if (name === null) {
        return;
    }
    console.log(name);
    const p0 = new Project(parseInt(`${projects.length + 1}`), `${name}`);
    projects.push(p0);
    // console.log(projects);
    renderProjects();
}

const p1 = new Project(1, "project1", true);
const p2 = new Project(2, "project2");

p1.addTask("task1", "Task Discription", "2023-11-16", 2, true);
p1.addTask("task2", "Task Discription", "2023-11-16", 1, false);
p1.addTask("task3", "Task Discription", "2023-11-16", 1, false);

p2.addTask("task1", "Task Discription", "2023-11-16", 2, true);
p2.addTask("task2", "Task Discription", "2023-11-16", 2, false);

projects.push(p1);
projects.push(p2);

function getActiveProject() {
    let ap;
    projects.forEach((project) => {
        if (project.isActive) {
            ap = project;
            // console.log(project);
        }
    });
    return ap;
}

console.log("projects loaded");

export { projects, showProjectCreationForm, getActiveProject };
