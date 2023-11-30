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

const p1 = new Project(1, "School", true);
const p2 = new Project(2, "Project");

p1.addTask("Quize", "need to prepare", "2023-11-16", 2, false);
p1.addTask("Project Ideas", "Todo-List app", "2023-11-16", 1, true);
p1.addTask("minor project", "Calculator using JS", "2023-11-16", 2, false);

p2.addTask("Create a rough skitch", "Improve css", "2023-11-16", 2, true);
p2.addTask("need to add local storage", "simpley add a localstorage variable to existing list", "2023-11-16", 2, false);

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
