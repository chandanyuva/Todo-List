/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/DomUtil.js":
/*!********************************!*\
  !*** ./src/modules/DomUtil.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ renderFooter),
/* harmony export */   renderHeading: () => (/* binding */ renderHeading),
/* harmony export */   renderLayout: () => (/* binding */ renderLayout),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _pageHeading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageHeading */ "./src/modules/pageHeading.js");
/* harmony import */ var _pageProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageProjects */ "./src/modules/pageProjects.js");
/* harmony import */ var _pageTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageTasks */ "./src/modules/pageTasks.js");




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
    (0,_pageHeading__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        (0,_pageProjects__WEBPACK_IMPORTED_MODULE_1__.showProjectCreationForm)();
    });

    projectsDiv.appendChild(addProjectBtn);

    const pList = document.createElement("ul");
    pList.classList.add("projectList");

    // console.log(projects);
    _pageProjects__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
        const pItem = document.createElement("li");
        // pList.firstChild.classList.toggle('selected');
        pItem.addEventListener("click", (event) => {
            // console.log(event);
            _pageProjects__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {
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
        (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.addTasks)();
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

    const currentProjectTasks = (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.getTasks)();

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
            (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.editTask)(
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




/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");


class Project {
    constructor(id, name, isActive = false, tasks) {
        this.id = id;
        this.name = name;
        this.isActive = isActive;
        this.tasks = [];
    }

    addTask(title, discription, dueDate, priority, completed, index) {
        const task = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](title, discription, dueDate, priority, completed);
        // console.log(index);
        if (index) {
            this.tasks.splice(index, 0, task);
            // console.log(this.tasks);
            return;
        }
        this.tasks.push(task);
    }

    removeTask(title) {
        let i;
        this.tasks.forEach((task) => {
            if (task.title === title) {
                // console.log(task.title);
                const index = this.tasks.indexOf(task);
                this.tasks.splice(index, 1);
                // console.log(index);
                i = index;
            }
        });
        return i;
    }
}


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, discription, dueDate, priority, completed = false) {
        this.title = title;
        this.discription = discription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
}


/***/ }),

/***/ "./src/modules/pageHeading.js":
/*!************************************!*\
  !*** ./src/modules/pageHeading.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const heading = () => {
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = "Things i need to do!!!";

    const headingDiv = document.querySelector(".headingDiv");
    headingDiv.appendChild(heading);
    console.log("heading loaded");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (heading);


/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DomUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomUtil */ "./src/modules/DomUtil.js");


const initialLoad = () => {
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderLayout)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderHeading)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderFooter)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


/***/ }),

/***/ "./src/modules/pageProjects.js":
/*!*************************************!*\
  !*** ./src/modules/pageProjects.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveProject: () => (/* binding */ getActiveProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   showProjectCreationForm: () => (/* binding */ showProjectCreationForm)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _DomUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomUtil */ "./src/modules/DomUtil.js");



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
    const p0 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(`${projects.length + 1}`), `${name}`);
    projects.push(p0);
    // console.log(projects);
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
}

const p1 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](1, "project1", true);
const p2 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](2, "project2");

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




/***/ }),

/***/ "./src/modules/pageTasks.js":
/*!**********************************!*\
  !*** ./src/modules/pageTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTasks: () => (/* binding */ addTasks),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks)
/* harmony export */ });
/* harmony import */ var _pageProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageProjects */ "./src/modules/pageProjects.js");
/* harmony import */ var _DomUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomUtil */ "./src/modules/DomUtil.js");



function getTasks() {
    const currentProjectTasks = [];

    _pageProjects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
        if (project.isActive) {
            currentProjectTasks.push(...project.tasks);
        }
    });
    return currentProjectTasks;
}

function addTasks() {
    // console.log(getActiveProject());
    const addTask = document.querySelector(".addTask");

    const form = document.createElement("form");
    form.classList.add("addTaskForm");

    // Add a title input field
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    // titleInput.setAttribute("required", "")
    titleInput.placeholder = "Task title";
    form.appendChild(titleInput);

    // Add a description textarea
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.placeholder = "Task description";
    form.appendChild(descriptionTextarea);

    // Add a due date input field
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.placeholder = "Due date";
    form.appendChild(dueDateInput);

    // Add a priority input field
    const priorityInput = document.createElement("input");
    priorityInput.type = "number";
    priorityInput.placeholder = "Priority";
    priorityInput.setAttribute("min", "1");
    priorityInput.setAttribute("max", "3");

    form.appendChild(priorityInput);

    // Add Btns Div

    const BtnsDiv = document.createElement("div");
    BtnsDiv.classList.add("addTaskBtns");
    // Add a cancel button
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (event) => {
        addTask.removeChild(form);
        addTask.disabled = false;
        // Reset the form
        form.reset();
    });
    BtnsDiv.appendChild(cancelButton);

    // Add a submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    BtnsDiv.appendChild(submitButton);

    form.appendChild(BtnsDiv);

    // Add an event listener to the submit button
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (titleInput.value === "") {
            alert("task titel cannot be empty");
            return;
        }
        const activeProject = (0,_pageProjects__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
        activeProject.addTask(
            titleInput.value,
            descriptionTextarea.value,
            dueDateInput.value,
            priorityInput.value
        );
        (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

        // Reset the form
        addTask.disabled = false;
        form.reset();
    });

    addTask.disabled = true;
    addTask.appendChild(form);
}
function editTask(title, discription, dueDate, priority, completed) {
    // console.log(getActiveProject());
    const currentTask = document.querySelector(
        `.${title.split(" ").join("_")}`
    );

    while (currentTask.firstChild) {
        currentTask.removeChild(currentTask.firstChild);
    }
    // console.log(currentTask);

    const form = document.createElement("form");
    form.classList.add("editTaskForm");

    // Add label to title
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.innerText = "Title: ";
    form.appendChild(titleLabel);
    // Add a title input field
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "title");
    titleInput.type = "text";
    titleInput.value = `${title}`;
    form.appendChild(titleInput);

    // Add label to description
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerText = "Description: ";
    form.appendChild(descriptionLabel);
    // Add a description textarea
    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.setAttribute("id", "description");
    descriptionTextarea.value = `${discription}`;
    form.appendChild(descriptionTextarea);

    // Add label to dueDate
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.innerText = "Due-Date: ";
    form.appendChild(dueDateLabel);
    // Add a due date input field
    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.setAttribute("id", "dueDate");
    dueDateInput.value = `${dueDate}`;
    form.appendChild(dueDateInput);

    // Add label to dueDate
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.innerText = "Priority; ";
    form.appendChild(priorityLabel);
    // Add a priority input field
    const priorityInput = document.createElement("input");
    priorityInput.setAttribute("id", "priority");
    priorityInput.type = "number";
    priorityInput.value = `${priority}`;
    priorityInput.setAttribute("min", "1");
    priorityInput.setAttribute("max", "3");

    form.appendChild(priorityInput);

    // Add Btns Div

    const BtnsDiv = document.createElement("div");
    BtnsDiv.classList.add("editTaskBtns");

    // Add a cancel button
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (event) => {
        currentTask.removeChild(form);
        (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();
    });
    BtnsDiv.appendChild(cancelButton);

    // Add a submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    BtnsDiv.appendChild(submitButton);

    form.appendChild(BtnsDiv);

    // Add an event listener to the submit button
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (titleInput.value === "") {
            alert("task titel cannot be empty");
            return;
        }
        const activeProject = (0,_pageProjects__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
        const index = activeProject.removeTask(title);
        // console.log(index);
        activeProject.addTask(
            titleInput.value,
            descriptionTextarea.value,
            dueDateInput.value,
            priorityInput.value,
            completed,
            index
        );
        (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

        // Reset the form
        // currentTask.disabled = false;
        // form.reset();
    });

    currentTask.appendChild(form);
}

function removeTask() {}

// console.log(currentProjectTasks);
console.log("tasks loaded");




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad */ "./src/modules/pageLoad.js");


(0,_modules_pageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDK0I7QUFDUjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUF1QjtBQUMvQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFRO0FBQ3BCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdDQUFnQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCLFdBQVc7QUFDekMsZ0NBQWdDLGlCQUFpQjtBQUNqRCxnQ0FBZ0MsYUFBYTtBQUM3QyxpQ0FBaUMsY0FBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTndCO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZDQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbENlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKSjtBQUNuQjtBQUNBO0FBQ0EsSUFBSSxzREFBWTtBQUNoQixJQUFJLHVEQUFhO0FBQ2pCLElBQUksd0RBQWM7QUFDbEIsSUFBSSxxREFBVztBQUNmLElBQUksc0RBQVk7QUFDaEI7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCSztBQUNXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQU8sYUFBYSxvQkFBb0IsT0FBTyxLQUFLO0FBQ3ZFO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlLGdEQUFPO0FBQ3RCLGVBQWUsZ0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0g7QUFDcEI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QiwrREFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkJBQTJCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLCtEQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3dDOzs7Ozs7O1VDeE54QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0EsNkRBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Eb21VdGlsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlSGVhZGluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZVRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVhZGluZyBmcm9tIFwiLi9wYWdlSGVhZGluZ1wiO1xyXG5pbXBvcnQgeyBwcm9qZWN0cywgc2hvd1Byb2plY3RDcmVhdGlvbkZvcm0gfSBmcm9tIFwiLi9wYWdlUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgZ2V0VGFza3MsIGFkZFRhc2tzLCBlZGl0VGFzayB9IGZyb20gXCIuL3BhZ2VUYXNrc1wiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGF5b3V0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRpbmdEaXYuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdEaXZcIik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RzRGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrc0RpdlwiKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJEaXZcIik7XHJcblxyXG4gICAgLy9hcHBlbmRpbmdcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0Rpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJIZWFkaW5nKCkge1xyXG4gICAgaGVhZGluZygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c0RpdlwiKTtcclxuXHJcbiAgICB3aGlsZSAocHJvamVjdHNEaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkUHJvamVjdFwiKTtcclxuICAgIGFkZFByb2plY3RCdG4uaW5uZXJUZXh0ID0gXCIrIGFkZCBwcm9qZWN0XCI7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd1Byb2plY3RDcmVhdGlvbkZvcm0oKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xyXG5cclxuICAgIGNvbnN0IHBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgcExpc3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RMaXN0XCIpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAvLyBwTGlzdC5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgcEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHByb2plY3QuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgcEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICByZW5kZXJUYXNrcygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBJdGVtLmlubmVyVGV4dCA9IGAke3Byb2plY3QubmFtZX1gO1xyXG4gICAgICAgIHBMaXN0LmFwcGVuZChwSXRlbSk7XHJcbiAgICB9KTtcclxuICAgIHBMaXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpO1xyXG4gICAgcmVuZGVyVGFza3MoKTtcclxuXHJcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwTGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3RUYXNrcyk7XHJcblxyXG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzRGl2XCIpO1xyXG4gICAgd2hpbGUgKHRhc2tzRGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrc0Rpdi5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCB0YXNrcyBidG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza1wiKTtcclxuICAgIGFkZFRhc2tCdG4uaW5uZXJUZXh0ID0gXCIrIGFkZCB0YXNrXCI7XHJcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgYWRkVGFza3MoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG4gICAgLy9hZGQgdGFza3MgYnRuXHJcblxyXG4gICAgLy9kaXNwbGF5IHRhc2tzXHJcblxyXG4gICAgY29uc3QgdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0TGlzdC5jbGFzc0xpc3QuYWRkKFwidGFza3NMaXN0XCIpO1xyXG5cclxuICAgIGNvbnN0IHRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgdEl0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2tzTGlzdEhlYWRlclwiKTtcclxuXHJcbiAgICBjb25zdCB0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0SXRlbURpdi5jbGFzc0xpc3QuYWRkKFwidGFza3NJdGVtRGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IHRDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgdERpc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgdENvbXBsZXRlZC5pbm5lclRleHQgPSBcIkNvbXBsZXRlZFwiO1xyXG4gICAgdFRpdGxlLmlubmVyVGV4dCA9IGBUaXRsZWA7XHJcbiAgICB0RGlzY3JpcC5pbm5lclRleHQgPSBgRGlzY3JpcHRpb25gO1xyXG4gICAgdER1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZS1EYXRlYDtcclxuICAgIHRQcmlvcml0eS5pbm5lclRleHQgPSBgUHJpb3JpdHlgO1xyXG4gICAgdEVkaXQuaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcblxyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodENvbXBsZXRlZCk7XHJcbiAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0VGl0bGUpO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodERpc2NyaXApO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodER1ZURhdGUpO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodFByaW9yaXR5KTtcclxuICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRFZGl0KTtcclxuXHJcbiAgICB0SXRlbS5hcHBlbmRDaGlsZCh0SXRlbURpdik7XHJcblxyXG4gICAgdExpc3QuYXBwZW5kKHRJdGVtKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRhc2tzID0gZ2V0VGFza3MoKTtcclxuXHJcbiAgICBjdXJyZW50UHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBjb25zdCB0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRJdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrc0l0ZW1EaXZcIik7XHJcblxyXG4gICAgICAgIHRJdGVtRGl2LmNsYXNzTGlzdC5hZGQoYCR7dGFzay50aXRsZS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XHJcbiAgICAgICAgdENvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XHJcbiAgICAgICAgdENvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgY29uc3QgdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgdERpc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCB0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IHRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IHRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0RWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdEJ0blwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIHRDb21wbGV0ZWQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdENvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzayk7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRUaXRsZS5pbm5lclRleHQgPSBgJHt0YXNrLnRpdGxlfWA7XHJcbiAgICAgICAgdERpc2NyaXAuaW5uZXJUZXh0ID0gYCR7dGFzay5kaXNjcmlwdGlvbn1gO1xyXG4gICAgICAgIHREdWVEYXRlLmlubmVyVGV4dCA9IGAke3Rhc2suZHVlRGF0ZX1gO1xyXG4gICAgICAgIHRQcmlvcml0eS5pbm5lclRleHQgPSBgJHt0YXNrLnByaW9yaXR5fWA7XHJcbiAgICAgICAgdEVkaXQuaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcblxyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRDb21wbGV0ZWQpO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRUaXRsZSk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodERpc2NyaXApO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHREdWVEYXRlKTtcclxuICAgICAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0UHJpb3JpdHkpO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRFZGl0KTtcclxuXHJcbiAgICAgICAgdEl0ZW0uYXBwZW5kQ2hpbGQodEl0ZW1EaXYpO1xyXG5cclxuICAgICAgICB0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrKFxyXG4gICAgICAgICAgICAgICAgdGFzay50aXRsZSxcclxuICAgICAgICAgICAgICAgIHRhc2suZGlzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5LFxyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdExpc3QuYXBwZW5kKHRJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vZGlzcGxheSBlbmRcclxuXHJcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPVxyXG4gICAgICAgICc8cD5Db3B5cmlnaHQgwqkgMjAyMyBHaXRodWI6PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jaGFuZGFueXV2YVwiIHRhcmdldD1cIl9ibGFua1wiPmNoYW5kYW55dXZhPC9hPjwvcD4nO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyRGl2XCIpO1xyXG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICByZW5kZXJMYXlvdXQsXHJcbiAgICByZW5kZXJIZWFkaW5nLFxyXG4gICAgcmVuZGVyUHJvamVjdHMsXHJcbiAgICByZW5kZXJUYXNrcyxcclxuICAgIHJlbmRlckZvb3RlcixcclxufTtcclxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgaXNBY3RpdmUgPSBmYWxzZSwgdGFza3MpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGl0bGUsIGRpc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrcy5zcGxpY2UoaW5kZXgsIDAsIHRhc2spO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzay50aXRsZSA9PT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2sudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBpID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkaXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBoZWFkaW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XHJcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGhpbmdzIGkgbmVlZCB0byBkbyEhIVwiO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRpbmdEaXZcIik7XHJcbiAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29uc29sZS5sb2coXCJoZWFkaW5nIGxvYWRlZFwiKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRpbmc7XHJcbiIsImltcG9ydCB7XHJcbiAgICByZW5kZXJMYXlvdXQsXHJcbiAgICByZW5kZXJIZWFkaW5nLFxyXG4gICAgcmVuZGVyUHJvamVjdHMsXHJcbiAgICByZW5kZXJUYXNrcyxcclxuICAgIHJlbmRlckZvb3RlcixcclxufSBmcm9tIFwiLi9Eb21VdGlsXCI7XHJcblxyXG5jb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgIHJlbmRlckxheW91dCgpO1xyXG4gICAgcmVuZGVySGVhZGluZygpO1xyXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcclxuICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkO1xyXG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSBcIi4vRG9tVXRpbFwiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtKCkge1xyXG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoXCJlbnRlciB0aGUgcHJvamVjdCBuYW1lXCIpO1xyXG4gICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBjYW4gbm90IGJlIGVtcHR5IVwiKTtcclxuICAgICAgICBzaG93UHJvamVjdENyZWF0aW9uRm9ybSgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgY29uc3QgcDAgPSBuZXcgUHJvamVjdChwYXJzZUludChgJHtwcm9qZWN0cy5sZW5ndGggKyAxfWApLCBgJHtuYW1lfWApO1xyXG4gICAgcHJvamVjdHMucHVzaChwMCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG59XHJcblxyXG5jb25zdCBwMSA9IG5ldyBQcm9qZWN0KDEsIFwicHJvamVjdDFcIiwgdHJ1ZSk7XHJcbmNvbnN0IHAyID0gbmV3IFByb2plY3QoMiwgXCJwcm9qZWN0MlwiKTtcclxuXHJcbnAxLmFkZFRhc2soXCJ0YXNrMVwiLCBcIlRhc2sgRGlzY3JpcHRpb25cIiwgXCIyMDIzLTExLTE2XCIsIDIsIHRydWUpO1xyXG5wMS5hZGRUYXNrKFwidGFzazJcIiwgXCJUYXNrIERpc2NyaXB0aW9uXCIsIFwiMjAyMy0xMS0xNlwiLCAxLCBmYWxzZSk7XHJcbnAxLmFkZFRhc2soXCJ0YXNrM1wiLCBcIlRhc2sgRGlzY3JpcHRpb25cIiwgXCIyMDIzLTExLTE2XCIsIDEsIGZhbHNlKTtcclxuXHJcbnAyLmFkZFRhc2soXCJ0YXNrMVwiLCBcIlRhc2sgRGlzY3JpcHRpb25cIiwgXCIyMDIzLTExLTE2XCIsIDIsIHRydWUpO1xyXG5wMi5hZGRUYXNrKFwidGFzazJcIiwgXCJUYXNrIERpc2NyaXB0aW9uXCIsIFwiMjAyMy0xMS0xNlwiLCAyLCBmYWxzZSk7XHJcblxyXG5wcm9qZWN0cy5wdXNoKHAxKTtcclxucHJvamVjdHMucHVzaChwMik7XHJcblxyXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xyXG4gICAgbGV0IGFwO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGFwID0gcHJvamVjdDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXA7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwicHJvamVjdHMgbG9hZGVkXCIpO1xyXG5cclxuZXhwb3J0IHsgcHJvamVjdHMsIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtLCBnZXRBY3RpdmVQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBnZXRBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vcGFnZVByb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vRG9tVXRpbFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRhc2tzID0gW107XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdFRhc2tzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrcygpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldEFjdGl2ZVByb2plY3QoKSk7XHJcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tGb3JtXCIpO1xyXG5cclxuICAgIC8vIEFkZCBhIHRpdGxlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAvLyB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpXHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIHRpdGxlXCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlc2NyaXB0aW9uIHRleHRhcmVhXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiVGFzayBkZXNjcmlwdGlvblwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRhcmVhKTtcclxuXHJcbiAgICAvLyBBZGQgYSBkdWUgZGF0ZSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIGRhdGVcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAvLyBBZGQgYSBwcmlvcml0eSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHByaW9yaXR5SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICBwcmlvcml0eUlucHV0LnBsYWNlaG9sZGVyID0gXCJQcmlvcml0eVwiO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIEJ0bnMgRGl2XHJcblxyXG4gICAgY29uc3QgQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBCdG5zRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnRuc1wiKTtcclxuICAgIC8vIEFkZCBhIGNhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBhZGRUYXNrLnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gICAgQnRuc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG5cclxuICAgIC8vIEFkZCBhIHN1Ym1pdCBidXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgQnRuc0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoQnRuc0Rpdik7XHJcblxyXG4gICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJ0YXNrIHRpdGVsIGNhbm5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayhcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSxcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUYXNrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbn1cclxuZnVuY3Rpb24gZWRpdFRhc2sodGl0bGUsIGRpc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRBY3RpdmVQcm9qZWN0KCkpO1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuJHt0aXRsZS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YFxyXG4gICAgKTtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVudFRhc2suZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrLnJlbW92ZUNoaWxkKGN1cnJlbnRUYXNrLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFRhc2spO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXRUYXNrRm9ybVwiKTtcclxuXHJcbiAgICAvLyBBZGQgbGFiZWwgdG8gdGl0bGVcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xyXG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlOiBcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICAvLyBBZGQgYSB0aXRsZSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IGAke3RpdGxlfWA7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBsYWJlbCB0byBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIC8vIEFkZCBhIGRlc2NyaXB0aW9uIHRleHRhcmVhXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSA9IGAke2Rpc2NyaXB0aW9ufWA7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xyXG5cclxuICAgIC8vIEFkZCBsYWJlbCB0byBkdWVEYXRlXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZVwiKTtcclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZS1EYXRlOiBcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIC8vIEFkZCBhIGR1ZSBkYXRlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcclxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGAke2R1ZURhdGV9YDtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAvLyBBZGQgbGFiZWwgdG8gZHVlRGF0ZVxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk7IFwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIC8vIEFkZCBhIHByaW9yaXR5IGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBgJHtwcmlvcml0eX1gO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIEJ0bnMgRGl2XHJcblxyXG4gICAgY29uc3QgQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBCdG5zRGl2LmNsYXNzTGlzdC5hZGQoXCJlZGl0VGFza0J0bnNcIik7XHJcblxyXG4gICAgLy8gQWRkIGEgY2FuY2VsIGJ1dHRvblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrLnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICB9KTtcclxuICAgIEJ0bnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuXHJcbiAgICAvLyBBZGQgYSBzdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuICAgIEJ0bnNEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEJ0bnNEaXYpO1xyXG5cclxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IGJ1dHRvblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidGFzayB0aXRlbCBjYW5ub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFjdGl2ZVByb2plY3QucmVtb3ZlVGFzayh0aXRsZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayhcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSxcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIGluZGV4XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIC8vIGN1cnJlbnRUYXNrLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gZm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY3VycmVudFRhc2suYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2soKSB7fVxyXG5cclxuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3RUYXNrcyk7XHJcbmNvbnNvbGUubG9nKFwidGFza3MgbG9hZGVkXCIpO1xyXG5cclxuZXhwb3J0IHsgZ2V0VGFza3MsIGFkZFRhc2tzLCBlZGl0VGFzayB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tIFwiLi9tb2R1bGVzL3BhZ2VMb2FkXCI7XHJcblxyXG5wYWdlTG9hZCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=