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

const p1 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](1, "School", true);
const p2 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](2, "Project");

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

    // Add a Delete button

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("deleteBtn");
    deleteButton.addEventListener('click',(event)=>{
        currentTask.removeChild(form);
        const activeProject = (0,_pageProjects__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
        activeProject.removeTask(title);
        (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

    });
    BtnsDiv.appendChild(deleteButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUM7QUFDQSw2REFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RvbVV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VIZWFkaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWFkaW5nIGZyb20gXCIuL3BhZ2VIZWFkaW5nXCI7XHJcbmltcG9ydCB7IHByb2plY3RzLCBzaG93UHJvamVjdENyZWF0aW9uRm9ybSB9IGZyb20gXCIuL3BhZ2VQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRUYXNrcywgYWRkVGFza3MsIGVkaXRUYXNrIH0gZnJvbSBcIi4vcGFnZVRhc2tzXCI7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJMYXlvdXQoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ0RpdlwiKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNEaXZcIik7XHJcblxyXG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tzRGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZChcImZvb3RlckRpdlwiKTtcclxuXHJcbiAgICAvL2FwcGVuZGluZ1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlYWRpbmcoKSB7XHJcbiAgICBoZWFkaW5nKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzRGl2XCIpO1xyXG5cclxuICAgIHdoaWxlIChwcm9qZWN0c0Rpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQocHJvamVjdHNEaXYuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0XCIpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lclRleHQgPSBcIisgYWRkIHByb2plY3RcIjtcclxuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzaG93UHJvamVjdENyZWF0aW9uRm9ybSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XHJcblxyXG4gICAgY29uc3QgcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICBwTGlzdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdExpc3RcIik7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIC8vIHBMaXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBwSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBwSXRlbS5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcEl0ZW0uaW5uZXJUZXh0ID0gYCR7cHJvamVjdC5uYW1lfWA7XHJcbiAgICAgICAgcExpc3QuYXBwZW5kKHBJdGVtKTtcclxuICAgIH0pO1xyXG4gICAgcExpc3QuZmlyc3RDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XHJcbiAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHBMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdFRhc2tzKTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NEaXZcIik7XHJcbiAgICB3aGlsZSAodGFza3NEaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIHRhc2tzIGJ0blxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrXCIpO1xyXG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSBcIisgYWRkIHRhc2tcIjtcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBhZGRUYXNrcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcbiAgICAvL2FkZCB0YXNrcyBidG5cclxuXHJcbiAgICAvL2Rpc3BsYXkgdGFza3NcclxuXHJcbiAgICBjb25zdCB0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICAgIHRMaXN0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrc0xpc3RcIik7XHJcblxyXG4gICAgY29uc3QgdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICB0SXRlbS5jbGFzc0xpc3QuYWRkKFwidGFza3NMaXN0SGVhZGVyXCIpO1xyXG5cclxuICAgIGNvbnN0IHRJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRJdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrc0l0ZW1EaXZcIik7XHJcblxyXG4gICAgY29uc3QgdENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB0RGlzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICB0Q29tcGxldGVkLmlubmVyVGV4dCA9IFwiQ29tcGxldGVkXCI7XHJcbiAgICB0VGl0bGUuaW5uZXJUZXh0ID0gYFRpdGxlYDtcclxuICAgIHREaXNjcmlwLmlubmVyVGV4dCA9IGBEaXNjcmlwdGlvbmA7XHJcbiAgICB0RHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlLURhdGVgO1xyXG4gICAgdFByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eWA7XHJcbiAgICB0RWRpdC5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuXHJcbiAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0Q29tcGxldGVkKTtcclxuICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRUaXRsZSk7XHJcbiAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0RGlzY3JpcCk7XHJcbiAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0RHVlRGF0ZSk7XHJcbiAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0UHJpb3JpdHkpO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodEVkaXQpO1xyXG5cclxuICAgIHRJdGVtLmFwcGVuZENoaWxkKHRJdGVtRGl2KTtcclxuXHJcbiAgICB0TGlzdC5hcHBlbmQodEl0ZW0pO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSBnZXRUYXNrcygpO1xyXG5cclxuICAgIGN1cnJlbnRQcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAgICAgICBjb25zdCB0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcInRhc2tzSXRlbURpdlwiKTtcclxuXHJcbiAgICAgICAgdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnRpdGxlLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX1gKTtcclxuXHJcbiAgICAgICAgY29uc3QgdENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgICAgICB0Q29tcGxldGVkLmNsYXNzTGlzdC5hZGQoXCJjaGVja1wiKTtcclxuICAgICAgICB0Q29tcGxldGVkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBjb25zdCB0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBjb25zdCB0RGlzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIGNvbnN0IHREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgY29uc3QgdEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0QnRuXCIpO1xyXG5cclxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgdENvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwiXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Q29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdFRpdGxlLmlubmVyVGV4dCA9IGAke3Rhc2sudGl0bGV9YDtcclxuICAgICAgICB0RGlzY3JpcC5pbm5lclRleHQgPSBgJHt0YXNrLmRpc2NyaXB0aW9ufWA7XHJcbiAgICAgICAgdER1ZURhdGUuaW5uZXJUZXh0ID0gYCR7dGFzay5kdWVEYXRlfWA7XHJcbiAgICAgICAgdFByaW9yaXR5LmlubmVyVGV4dCA9IGAke3Rhc2sucHJpb3JpdHl9YDtcclxuICAgICAgICB0RWRpdC5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuXHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodENvbXBsZXRlZCk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodFRpdGxlKTtcclxuICAgICAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0RGlzY3JpcCk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodER1ZURhdGUpO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRQcmlvcml0eSk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodEVkaXQpO1xyXG5cclxuICAgICAgICB0SXRlbS5hcHBlbmRDaGlsZCh0SXRlbURpdik7XHJcblxyXG4gICAgICAgIHRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZWRpdFRhc2soXHJcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgdGFzay5kaXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0TGlzdC5hcHBlbmQodEl0ZW0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9kaXNwbGF5IGVuZFxyXG5cclxuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG4gICAgZm9vdGVyLmlubmVySFRNTCA9XHJcbiAgICAgICAgJzxwPkNvcHlyaWdodCDCqSAyMDIzIEdpdGh1Yjo8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NoYW5kYW55dXZhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y2hhbmRhbnl1dmE8L2E+PC9wPic7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJEaXZcIik7XHJcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHJlbmRlckxheW91dCxcclxuICAgIHJlbmRlckhlYWRpbmcsXHJcbiAgICByZW5kZXJQcm9qZWN0cyxcclxuICAgIHJlbmRlclRhc2tzLFxyXG4gICAgcmVuZGVyRm9vdGVyLFxyXG59O1xyXG4iLCJpbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBpc0FjdGl2ZSA9IGZhbHNlLCB0YXNrcykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0aXRsZSwgZGlzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkaXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xyXG4gICAgICAgIGlmIChpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMCwgdGFzayk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFza3MpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKHRpdGxlKSB7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzay50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudGFza3MuaW5kZXhPZih0YXNrKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICAgICAgICAgIGkgPSBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRpc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGhlYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcclxuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUaGluZ3MgaSBuZWVkIHRvIGRvISEhXCI7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGluZ0RpdlwiKTtcclxuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlYWRpbmcgbG9hZGVkXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGluZztcclxuIiwiaW1wb3J0IHtcclxuICAgIHJlbmRlckxheW91dCxcclxuICAgIHJlbmRlckhlYWRpbmcsXHJcbiAgICByZW5kZXJQcm9qZWN0cyxcclxuICAgIHJlbmRlclRhc2tzLFxyXG4gICAgcmVuZGVyRm9vdGVyLFxyXG59IGZyb20gXCIuL0RvbVV0aWxcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCkgPT4ge1xyXG4gICAgcmVuZGVyTGF5b3V0KCk7XHJcbiAgICByZW5kZXJIZWFkaW5nKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgcmVuZGVyVGFza3MoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbExvYWQ7XHJcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9Eb21VdGlsXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RDcmVhdGlvbkZvcm0oKSB7XHJcbiAgICBsZXQgbmFtZSA9IHByb21wdChcImVudGVyIHRoZSBwcm9qZWN0IG5hbWVcIik7XHJcbiAgICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGNhbiBub3QgYmUgZW1wdHkhXCIpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICBjb25zdCBwMCA9IG5ldyBQcm9qZWN0KHBhcnNlSW50KGAke3Byb2plY3RzLmxlbmd0aCArIDF9YCksIGAke25hbWV9YCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHAwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbn1cclxuXHJcbmNvbnN0IHAxID0gbmV3IFByb2plY3QoMSwgXCJTY2hvb2xcIiwgdHJ1ZSk7XHJcbmNvbnN0IHAyID0gbmV3IFByb2plY3QoMiwgXCJQcm9qZWN0XCIpO1xyXG5cclxucDEuYWRkVGFzayhcIlF1aXplXCIsIFwibmVlZCB0byBwcmVwYXJlXCIsIFwiMjAyMy0xMS0xNlwiLCAyLCBmYWxzZSk7XHJcbnAxLmFkZFRhc2soXCJQcm9qZWN0IElkZWFzXCIsIFwiVG9kby1MaXN0IGFwcFwiLCBcIjIwMjMtMTEtMTZcIiwgMSwgdHJ1ZSk7XHJcbnAxLmFkZFRhc2soXCJtaW5vciBwcm9qZWN0XCIsIFwiQ2FsY3VsYXRvciB1c2luZyBKU1wiLCBcIjIwMjMtMTEtMTZcIiwgMiwgZmFsc2UpO1xyXG5cclxucDIuYWRkVGFzayhcIkNyZWF0ZSBhIHJvdWdoIHNraXRjaFwiLCBcIkltcHJvdmUgY3NzXCIsIFwiMjAyMy0xMS0xNlwiLCAyLCB0cnVlKTtcclxucDIuYWRkVGFzayhcIm5lZWQgdG8gYWRkIGxvY2FsIHN0b3JhZ2VcIiwgXCJzaW1wbGV5IGFkZCBhIGxvY2Fsc3RvcmFnZSB2YXJpYWJsZSB0byBleGlzdGluZyBsaXN0XCIsIFwiMjAyMy0xMS0xNlwiLCAyLCBmYWxzZSk7XHJcblxyXG5wcm9qZWN0cy5wdXNoKHAxKTtcclxucHJvamVjdHMucHVzaChwMik7XHJcblxyXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xyXG4gICAgbGV0IGFwO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGFwID0gcHJvamVjdDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXA7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKFwicHJvamVjdHMgbG9hZGVkXCIpO1xyXG5cclxuZXhwb3J0IHsgcHJvamVjdHMsIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtLCBnZXRBY3RpdmVQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IHByb2plY3RzLCBnZXRBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4vcGFnZVByb2plY3RzXCI7XHJcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vRG9tVXRpbFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRhc2tzID0gW107XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdFRhc2tzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrcygpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldEFjdGl2ZVByb2plY3QoKSk7XHJcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tGb3JtXCIpO1xyXG5cclxuICAgIC8vIEFkZCBhIHRpdGxlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAvLyB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpXHJcbiAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJUYXNrIHRpdGxlXCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlc2NyaXB0aW9uIHRleHRhcmVhXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5wbGFjZWhvbGRlciA9IFwiVGFzayBkZXNjcmlwdGlvblwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblRleHRhcmVhKTtcclxuXHJcbiAgICAvLyBBZGQgYSBkdWUgZGF0ZSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRHVlIGRhdGVcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAvLyBBZGQgYSBwcmlvcml0eSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHByaW9yaXR5SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XHJcbiAgICBwcmlvcml0eUlucHV0LnBsYWNlaG9sZGVyID0gXCJQcmlvcml0eVwiO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIEJ0bnMgRGl2XHJcblxyXG4gICAgY29uc3QgQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBCdG5zRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnRuc1wiKTtcclxuICAgIC8vIEFkZCBhIGNhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBhZGRUYXNrLnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gICAgQnRuc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG5cclxuICAgIC8vIEFkZCBhIHN1Ym1pdCBidXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgQnRuc0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoQnRuc0Rpdik7XHJcblxyXG4gICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJ0YXNrIHRpdGVsIGNhbm5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayhcclxuICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSxcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlLFxyXG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRUYXNrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbn1cclxuZnVuY3Rpb24gZWRpdFRhc2sodGl0bGUsIGRpc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRBY3RpdmVQcm9qZWN0KCkpO1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAgIGAuJHt0aXRsZS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YFxyXG4gICAgKTtcclxuXHJcbiAgICB3aGlsZSAoY3VycmVudFRhc2suZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrLnJlbW92ZUNoaWxkKGN1cnJlbnRUYXNrLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coY3VycmVudFRhc2spO1xyXG5cclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXRUYXNrRm9ybVwiKTtcclxuXHJcbiAgICAvLyBBZGQgbGFiZWwgdG8gdGl0bGVcclxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xyXG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRpdGxlOiBcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICAvLyBBZGQgYSB0aXRsZSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgdGl0bGVJbnB1dC52YWx1ZSA9IGAke3RpdGxlfWA7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBsYWJlbCB0byBkZXNjcmlwdGlvblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcclxuICAgIC8vIEFkZCBhIGRlc2NyaXB0aW9uIHRleHRhcmVhXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSA9IGAke2Rpc2NyaXB0aW9ufWA7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xyXG5cclxuICAgIC8vIEFkZCBsYWJlbCB0byBkdWVEYXRlXHJcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlRGF0ZVwiKTtcclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZS1EYXRlOiBcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcclxuICAgIC8vIEFkZCBhIGR1ZSBkYXRlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlRGF0ZVwiKTtcclxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGAke2R1ZURhdGV9YDtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAvLyBBZGQgbGFiZWwgdG8gZHVlRGF0ZVxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XHJcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk7IFwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIC8vIEFkZCBhIHByaW9yaXR5IGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcclxuICAgIHByaW9yaXR5SW5wdXQudmFsdWUgPSBgJHtwcmlvcml0eX1gO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIEJ0bnMgRGl2XHJcblxyXG4gICAgY29uc3QgQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBCdG5zRGl2LmNsYXNzTGlzdC5hZGQoXCJlZGl0VGFza0J0bnNcIik7XHJcblxyXG4gICAgLy8gQWRkIGEgY2FuY2VsIGJ1dHRvblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNhbmNlbEJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGN1cnJlbnRUYXNrLnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICB9KTtcclxuICAgIEJ0bnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuXHJcbiAgICAvLyBBZGQgYSBEZWxldGUgYnV0dG9uXHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcclxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCJcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlQnRuXCIpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XHJcbiAgICAgICAgY3VycmVudFRhc2sucmVtb3ZlQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcclxuICAgICAgICBhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2sodGl0bGUpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKCk7XHJcblxyXG4gICAgfSk7XHJcbiAgICBCdG5zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcblxyXG4gICAgLy8gQWRkIGEgc3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcbiAgICBCdG5zRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdG5zRGl2KTtcclxuXHJcbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b25cclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBhbGVydChcInRhc2sgdGl0ZWwgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2sodGl0bGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICBhY3RpdmVQcm9qZWN0LmFkZFRhc2soXHJcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUsXHJcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC52YWx1ZSxcclxuICAgICAgICAgICAgY29tcGxldGVkLFxyXG4gICAgICAgICAgICBpbmRleFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGZvcm1cclxuICAgICAgICAvLyBjdXJyZW50VGFzay5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGZvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGN1cnJlbnRUYXNrLmFwcGVuZENoaWxkKGZvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXNrKCkge31cclxuXHJcbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG5jb25zb2xlLmxvZyhcInRhc2tzIGxvYWRlZFwiKTtcclxuXHJcbmV4cG9ydCB7IGdldFRhc2tzLCBhZGRUYXNrcywgZWRpdFRhc2sgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vbW9kdWxlcy9wYWdlTG9hZFwiO1xyXG5cclxucGFnZUxvYWQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9