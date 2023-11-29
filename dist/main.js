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





function renderLayout(){
    const content = document.querySelector("#content");

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('headingDiv');
    
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projectsDiv');

    const tasksDiv = document.createElement('div');
    tasksDiv.classList.add('tasksDiv');

    const footerDiv = document.createElement('div');
    footerDiv.classList.add('footerDiv');

    //appending
    content.appendChild(headingDiv);
    content.appendChild(projectsDiv);
    content.appendChild(tasksDiv);
    content.appendChild(footerDiv);
}

function renderHeading(){
    (0,_pageHeading__WEBPACK_IMPORTED_MODULE_0__["default"])()
}



function renderProjects(){
    
    
    const projectsDiv = document.querySelector(".projectsDiv");

    while (projectsDiv.firstChild){
        projectsDiv.removeChild(projectsDiv.firstChild);
    }

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProject');
    addProjectBtn.innerText = '+ add project';
    addProjectBtn.addEventListener('click',()=>{
        (0,_pageProjects__WEBPACK_IMPORTED_MODULE_1__.showProjectCreationForm)();
    }) 

    projectsDiv.appendChild(addProjectBtn);

    const pList = document.createElement('ul');
    pList.classList.add('projectList');

    // console.log(projects);
    _pageProjects__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project)=>{
        const pItem = document.createElement('li');
        // pList.firstChild.classList.toggle('selected');
        pItem.addEventListener('click',(event)=>{
            // console.log(event);
            _pageProjects__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project)=>{
                project.isActive=false;
            })
            project.isActive = true;
            const selected = document.querySelector('.selected');
            selected.classList.toggle('selected');
            pItem.classList.toggle('selected');
            renderTasks();
            
        })
        pItem.innerText = `${project.name}`;
        pList.append(pItem);
    })
    pList.firstChild.classList.toggle('selected');
    renderTasks();

    projectsDiv.appendChild(pList);

}

function renderTasks(){
    // console.log(currentProjectTasks);
    
    const tasksDiv = document.querySelector('.tasksDiv');
    while (tasksDiv.firstChild){
        tasksDiv.removeChild(tasksDiv.firstChild);
    }

    //add tasks btn
    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('addTask');
    addTaskBtn.innerText = '+ add task'
    addTaskBtn.addEventListener('click',(event)=>{
        // console.log(event);
        ;(0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.addTasks)();
    })

    tasksDiv.appendChild(addTaskBtn)
    //add tasks btn

    //display tasks

    const tList = document.createElement('ul');
    tList.classList.add('tasksList');

    const tItem = document.createElement('li');
    tItem.classList.add('tasksListHeader');

    const tItemDiv = document.createElement('div');
    tItemDiv.classList.add('tasksItemDiv')

    const tCompleted = document.createElement('p');
    const tTitle = document.createElement('p');
    const tDiscrip = document.createElement('p');
    const tDueDate = document.createElement('p');
    const tPriority = document.createElement('p');

    tCompleted.innerText = 'Completed';
    tTitle.innerText = `Title`;
    tDiscrip.innerText = `Discription`;
    tDueDate.innerText = `Due-Date`;
    tPriority.innerText = `Priority`;
    
    tItemDiv.appendChild(tCompleted);
    tItemDiv.appendChild(tTitle);
    tItemDiv.appendChild(tDiscrip);
    tItemDiv.appendChild(tDueDate);
    tItemDiv.appendChild(tPriority);

    tItem.appendChild(tItemDiv)

    tList.append(tItem);



    const currentProjectTasks = (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.getTasks)();

    currentProjectTasks.forEach((task)=>{
        const tItem = document.createElement('li');

        const tItemDiv = document.createElement('div');
        tItemDiv.classList.add('tasksItemDiv');
        tItemDiv.classList.add(`${task.title}`);

        const tCompleted = document.createElement("INPUT");
        tCompleted.classList.add('check')
        tCompleted.setAttribute("type", "checkbox");
        const tTitle = document.createElement('p');
        const tDiscrip = document.createElement('p');
        const tDueDate = document.createElement('p');
        const tPriority = document.createElement('p');

        if(task.completed){
            tCompleted.setAttribute('checked','')
        }
        tCompleted.addEventListener('change',(event)=>{
            if(event.target.checked){
                task.completed = true;
            }else{
                task.completed = false;
            }
            // console.log(task);
            renderTasks();
        })
        
        tTitle.innerText = `${task.title}`;
        tDiscrip.innerText = `${task.discription}`;
        tDueDate.innerText = `${task.dueDate}`;
        tPriority.innerText = `${task.priority}`;
        
        tItemDiv.appendChild(tCompleted);
        tItemDiv.appendChild(tTitle);
        tItemDiv.appendChild(tDiscrip);
        tItemDiv.appendChild(tDueDate);
        tItemDiv.appendChild(tPriority);

        tItem.appendChild(tItemDiv)

        tItem.addEventListener('click',function (event){
            // console.log(event);
            tItem.removeEventListener('click',this);
            (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.editTask)(task,task.title,task.discription,task.dueDate,task.priority,task.completed)
        })

        tList.append(tItem);
    })

    //display end

    tasksDiv.appendChild(tList);
}

function renderFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = '<p>Copyright © 2023 Github:<a href="https://github.com/chandanyuva" target="_blank">chandanyuva</a></p>';
    
    const footerDiv = document.querySelector('.footerDiv');
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



class Project{
    constructor(id,name,isActive=false,tasks){
        this.id =  id;
        this.name = name;
        this.isActive = isActive;
        this.tasks = []
    }

    addTask(title,discription,dueDate,priority,completed){
        const task = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](title,discription,dueDate,priority,completed);
        this.tasks.push(task);
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
class Task{
    constructor(title,discription,dueDate,priority,completed=false){
        this.title = title;
        this.discription = discription;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed
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
const heading = ()=>{
    
    const heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.innerText = 'Things i need to do!!!';

    const headingDiv = document.querySelector(".headingDiv");   
    headingDiv.appendChild(heading);
    console.log("heading loaded");
}

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


const initialLoad = ()=>{
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderLayout)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderHeading)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderFooter)();
}

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




const  projects = [];


function showProjectCreationForm(){

    let name = prompt('enter the project name');
    if(name === ""){
        alert("Project name can not be empty!");
        showProjectCreationForm();
        return
    }
    else if(name === null){
        return
    }
    console.log(name);
    const p0 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(`${projects.length+1}`),`${name}`);
    projects.push(p0);
    // console.log(projects);
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
}


const p1 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](1,'project1',true);
const p2 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](2,'project2');


p1.addTask('task1','Task Discription','2023-11-16',2,true);
p1.addTask('task2','Task Discription','2023-11-16',1,false);
p1.addTask('task3','Task Discription','2023-11-16',1,false);

p2.addTask('task1','Task Discription','2023-11-16',2,true);
p2.addTask('task2','Task Discription','2023-11-16',2,false);

projects.push(p1);
projects.push(p2);

function getActiveProject(){
    let ap;
    projects.forEach((project)=>{
        if (project.isActive){
            ap=project;
            // console.log(project);
        }
    })
    return ap;
}


console.log('projects loaded');



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





function getTasks(){
    const currentProjectTasks = [];

    _pageProjects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project)=>{
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
        const activeProject = (0,_pageProjects__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
        activeProject.addTask(titleInput.value,descriptionTextarea.value,dueDateInput.value,priorityInput.value);
        (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

        // Reset the form
        addTask.disabled = false;
        form.reset();
    });

    
    addTask.disabled = true;
    addTask.appendChild(form);
}
function editTask(task,title,discription,dueDate,priority,completed){
    // console.log(getActiveProject());
    const currentTask = document.querySelector(`.${title}`);
    while (currentTask.firstChild){
        currentTask.removeChild(currentTask.firstChild);
    }
    console.log(currentTask);

    const form = document.createElement('form');
    form.classList.add('editTaskForm')

    // Add label to title
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for','title');
    titleLabel.innerText = 'Title: ';
    form.appendChild(titleLabel);
    // Add a title input field
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id','title');
    titleInput.type = 'text';
    titleInput.value = `${title}`;
    form.appendChild(titleInput);

    // Add label to description
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for','description');
    descriptionLabel.innerText = 'Description: ';
    form.appendChild(descriptionLabel);
    // Add a description textarea
    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.setAttribute('id','description')
    descriptionTextarea.value = `${discription}`;
    form.appendChild(descriptionTextarea);


    // Add label to dueDate
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for','dueDate');
    dueDateLabel.innerText = 'Due-Date: ';
    form.appendChild(dueDateLabel);
    // Add a due date input field
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.setAttribute('id','dueDate')
    dueDateInput.value = `${dueDate}`;
    form.appendChild(dueDateInput);

    // Add label to dueDate
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for','priority');
    priorityLabel.innerText = 'Priority; ';
    form.appendChild(priorityLabel);
    // Add a priority input field
    const priorityInput = document.createElement('input');
    priorityInput.setAttribute('id','priority')
    priorityInput.type = 'number';
    priorityInput.value = `${priority}`;
    priorityInput.setAttribute('min','1');
    priorityInput.setAttribute('max','3');

    form.appendChild(priorityInput);

    // Add Btns Div

    const BtnsDiv = document.createElement('div');
    BtnsDiv.classList.add('editTaskBtns');
    
    // Add a cancel button
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', (event) => {
        console.log(event);
        currentTask.removeChild(form);
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
        const activeProject = (0,_pageProjects__WEBPACK_IMPORTED_MODULE_0__.getActiveProject)();
        activeProject.addTask(titleInput.value,descriptionTextarea.value,dueDateInput.value,priorityInput.value);
        (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderTasks)();

        // Reset the form
        currentTask.disabled = false;
        form.reset();
    });

    
    currentTask.appendChild(form);
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlSGVhZGluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZVRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IGhlYWRpbmcgZnJvbSAnLi9wYWdlSGVhZGluZydcclxuaW1wb3J0IHtwcm9qZWN0cyxzaG93UHJvamVjdENyZWF0aW9uRm9ybX0gZnJvbSAnLi9wYWdlUHJvamVjdHMnXHJcbmltcG9ydCB7Z2V0VGFza3MsYWRkVGFza3MsZWRpdFRhc2t9IGZyb20gJy4vcGFnZVRhc2tzJ1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyTGF5b3V0KCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRpbmdEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGluZ0RpdicpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNEaXYnKTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgndGFza3NEaXYnKTtcclxuXHJcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXJEaXYnKTtcclxuXHJcbiAgICAvL2FwcGVuZGluZ1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0Rpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhlYWRpbmcoKXtcclxuICAgIGhlYWRpbmcoKVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCl7XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzRGl2XCIpO1xyXG5cclxuICAgIHdoaWxlIChwcm9qZWN0c0Rpdi5maXJzdENoaWxkKXtcclxuICAgICAgICBwcm9qZWN0c0Rpdi5yZW1vdmVDaGlsZChwcm9qZWN0c0Rpdi5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3QnKTtcclxuICAgIGFkZFByb2plY3RCdG4uaW5uZXJUZXh0ID0gJysgYWRkIHByb2plY3QnO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBzaG93UHJvamVjdENyZWF0aW9uRm9ybSgpO1xyXG4gICAgfSkgXHJcblxyXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XHJcblxyXG4gICAgY29uc3QgcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgcExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgICAgIGNvbnN0IHBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAvLyBwTGlzdC5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgcEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZT1mYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcHJvamVjdC5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHBJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcEl0ZW0uaW5uZXJUZXh0ID0gYCR7cHJvamVjdC5uYW1lfWA7XHJcbiAgICAgICAgcExpc3QuYXBwZW5kKHBJdGVtKTtcclxuICAgIH0pXHJcbiAgICBwTGlzdC5maXJzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XHJcbiAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHBMaXN0KTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdFRhc2tzKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3NEaXYnKTtcclxuICAgIHdoaWxlICh0YXNrc0Rpdi5maXJzdENoaWxkKXtcclxuICAgICAgICB0YXNrc0Rpdi5yZW1vdmVDaGlsZCh0YXNrc0Rpdi5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2FkZCB0YXNrcyBidG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xyXG4gICAgYWRkVGFza0J0bi5pbm5lclRleHQgPSAnKyBhZGQgdGFzaydcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgYWRkVGFza3MoKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGFza3NEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bilcclxuICAgIC8vYWRkIHRhc2tzIGJ0blxyXG5cclxuICAgIC8vZGlzcGxheSB0YXNrc1xyXG5cclxuICAgIGNvbnN0IHRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIHRMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzTGlzdCcpO1xyXG5cclxuICAgIGNvbnN0IHRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIHRJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzTGlzdEhlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IHRJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0SXRlbURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0l0ZW1EaXYnKVxyXG5cclxuICAgIGNvbnN0IHRDb21wbGV0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB0RGlzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHRDb21wbGV0ZWQuaW5uZXJUZXh0ID0gJ0NvbXBsZXRlZCc7XHJcbiAgICB0VGl0bGUuaW5uZXJUZXh0ID0gYFRpdGxlYDtcclxuICAgIHREaXNjcmlwLmlubmVyVGV4dCA9IGBEaXNjcmlwdGlvbmA7XHJcbiAgICB0RHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlLURhdGVgO1xyXG4gICAgdFByaW9yaXR5LmlubmVyVGV4dCA9IGBQcmlvcml0eWA7XHJcbiAgICBcclxuICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRDb21wbGV0ZWQpO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodFRpdGxlKTtcclxuICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHREaXNjcmlwKTtcclxuICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHREdWVEYXRlKTtcclxuICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRQcmlvcml0eSk7XHJcblxyXG4gICAgdEl0ZW0uYXBwZW5kQ2hpbGQodEl0ZW1EaXYpXHJcblxyXG4gICAgdExpc3QuYXBwZW5kKHRJdGVtKTtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSBnZXRUYXNrcygpO1xyXG5cclxuICAgIGN1cnJlbnRQcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzayk9PntcclxuICAgICAgICBjb25zdCB0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgndGFza3NJdGVtRGl2Jyk7XHJcbiAgICAgICAgdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChgJHt0YXNrLnRpdGxlfWApO1xyXG5cclxuICAgICAgICBjb25zdCB0Q29tcGxldGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xyXG4gICAgICAgIHRDb21wbGV0ZWQuY2xhc3NMaXN0LmFkZCgnY2hlY2snKVxyXG4gICAgICAgIHRDb21wbGV0ZWQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNvbnN0IHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCB0RGlzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCB0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCB0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIGlmKHRhc2suY29tcGxldGVkKXtcclxuICAgICAgICAgICAgdENvbXBsZXRlZC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0Q29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrKTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRUaXRsZS5pbm5lclRleHQgPSBgJHt0YXNrLnRpdGxlfWA7XHJcbiAgICAgICAgdERpc2NyaXAuaW5uZXJUZXh0ID0gYCR7dGFzay5kaXNjcmlwdGlvbn1gO1xyXG4gICAgICAgIHREdWVEYXRlLmlubmVyVGV4dCA9IGAke3Rhc2suZHVlRGF0ZX1gO1xyXG4gICAgICAgIHRQcmlvcml0eS5pbm5lclRleHQgPSBgJHt0YXNrLnByaW9yaXR5fWA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodENvbXBsZXRlZCk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodFRpdGxlKTtcclxuICAgICAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0RGlzY3JpcCk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodER1ZURhdGUpO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRQcmlvcml0eSk7XHJcblxyXG4gICAgICAgIHRJdGVtLmFwcGVuZENoaWxkKHRJdGVtRGl2KVxyXG5cclxuICAgICAgICB0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKGV2ZW50KXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgICAgICB0SXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsdGhpcyk7XHJcbiAgICAgICAgICAgIGVkaXRUYXNrKHRhc2ssdGFzay50aXRsZSx0YXNrLmRpc2NyaXB0aW9uLHRhc2suZHVlRGF0ZSx0YXNrLnByaW9yaXR5LHRhc2suY29tcGxldGVkKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRMaXN0LmFwcGVuZCh0SXRlbSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vZGlzcGxheSBlbmRcclxuXHJcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvb3Rlcigpe1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJzxwPkNvcHlyaWdodCDCqSAyMDIzIEdpdGh1Yjo8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NoYW5kYW55dXZhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y2hhbmRhbnl1dmE8L2E+PC9wPic7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJEaXYnKTtcclxuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckxheW91dCxyZW5kZXJIZWFkaW5nLHJlbmRlclByb2plY3RzLHJlbmRlclRhc2tzLHJlbmRlckZvb3Rlcn07IiwiXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCxuYW1lLGlzQWN0aXZlPWZhbHNlLHRhc2tzKXtcclxuICAgICAgICB0aGlzLmlkID0gIGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGl0bGUsZGlzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxjb21wbGV0ZWQpe1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSxkaXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZCk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkaXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZD1mYWxzZSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZFxyXG4gICAgfVxyXG59IiwiY29uc3QgaGVhZGluZyA9ICgpPT57XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XHJcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdUaGluZ3MgaSBuZWVkIHRvIGRvISEhJztcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkaW5nRGl2XCIpOyAgIFxyXG4gICAgaGVhZGluZ0Rpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVhZGluZyBsb2FkZWRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRpbmciLCJpbXBvcnQge3JlbmRlckxheW91dCxyZW5kZXJIZWFkaW5nLHJlbmRlclByb2plY3RzLHJlbmRlclRhc2tzLHJlbmRlckZvb3Rlcn0gZnJvbSAnLi9Eb21VdGlsJ1xyXG5cclxuY29uc3QgaW5pdGlhbExvYWQgPSAoKT0+e1xyXG4gICAgcmVuZGVyTGF5b3V0KCk7XHJcbiAgICByZW5kZXJIZWFkaW5nKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgcmVuZGVyVGFza3MoKTtcclxuICAgIHJlbmRlckZvb3RlcigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZCIsIlxyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xyXG5pbXBvcnQge3JlbmRlclByb2plY3RzfSBmcm9tICcuL0RvbVV0aWwnXHJcblxyXG5jb25zdCAgcHJvamVjdHMgPSBbXTtcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdENyZWF0aW9uRm9ybSgpe1xyXG5cclxuICAgIGxldCBuYW1lID0gcHJvbXB0KCdlbnRlciB0aGUgcHJvamVjdCBuYW1lJyk7XHJcbiAgICBpZihuYW1lID09PSBcIlwiKXtcclxuICAgICAgICBhbGVydChcIlByb2plY3QgbmFtZSBjYW4gbm90IGJlIGVtcHR5IVwiKTtcclxuICAgICAgICBzaG93UHJvamVjdENyZWF0aW9uRm9ybSgpO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihuYW1lID09PSBudWxsKXtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgY29uc3QgcDAgPSBuZXcgUHJvamVjdChwYXJzZUludChgJHtwcm9qZWN0cy5sZW5ndGgrMX1gKSxgJHtuYW1lfWApO1xyXG4gICAgcHJvamVjdHMucHVzaChwMCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG59XHJcblxyXG5cclxuY29uc3QgcDEgPSBuZXcgUHJvamVjdCgxLCdwcm9qZWN0MScsdHJ1ZSk7XHJcbmNvbnN0IHAyID0gbmV3IFByb2plY3QoMiwncHJvamVjdDInKTtcclxuXHJcblxyXG5wMS5hZGRUYXNrKCd0YXNrMScsJ1Rhc2sgRGlzY3JpcHRpb24nLCcyMDIzLTExLTE2JywyLHRydWUpO1xyXG5wMS5hZGRUYXNrKCd0YXNrMicsJ1Rhc2sgRGlzY3JpcHRpb24nLCcyMDIzLTExLTE2JywxLGZhbHNlKTtcclxucDEuYWRkVGFzaygndGFzazMnLCdUYXNrIERpc2NyaXB0aW9uJywnMjAyMy0xMS0xNicsMSxmYWxzZSk7XHJcblxyXG5wMi5hZGRUYXNrKCd0YXNrMScsJ1Rhc2sgRGlzY3JpcHRpb24nLCcyMDIzLTExLTE2JywyLHRydWUpO1xyXG5wMi5hZGRUYXNrKCd0YXNrMicsJ1Rhc2sgRGlzY3JpcHRpb24nLCcyMDIzLTExLTE2JywyLGZhbHNlKTtcclxuXHJcbnByb2plY3RzLnB1c2gocDEpO1xyXG5wcm9qZWN0cy5wdXNoKHAyKTtcclxuXHJcbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKXtcclxuICAgIGxldCBhcDtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgaWYgKHByb2plY3QuaXNBY3RpdmUpe1xyXG4gICAgICAgICAgICBhcD1wcm9qZWN0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGFwO1xyXG59XHJcblxyXG5cclxuY29uc29sZS5sb2coJ3Byb2plY3RzIGxvYWRlZCcpO1xyXG5cclxuZXhwb3J0IHtwcm9qZWN0cyxzaG93UHJvamVjdENyZWF0aW9uRm9ybSxnZXRBY3RpdmVQcm9qZWN0fTsiLCJcclxuaW1wb3J0IHtwcm9qZWN0cyxnZXRBY3RpdmVQcm9qZWN0fSBmcm9tIFwiLi9wYWdlUHJvamVjdHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyVGFza3MgfSBmcm9tIFwiLi9Eb21VdGlsXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0VGFza3MoKXtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0VGFza3MgPSBbXTtcclxuXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKXtcclxuICAgICAgICAgICAgY3VycmVudFByb2plY3RUYXNrcy5wdXNoKC4uLnByb2plY3QudGFza3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gY3VycmVudFByb2plY3RUYXNrc1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2tzKCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRBY3RpdmVQcm9qZWN0KCkpO1xyXG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkVGFza0Zvcm0nKVxyXG5cclxuICAgIC8vIEFkZCBhIHRpdGxlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcclxuICAgIC8vIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIilcclxuICAgIHRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGFzayB0aXRsZSc7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBhIGRlc2NyaXB0aW9uIHRleHRhcmVhXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIGRlc2NyaXB0aW9uVGV4dGFyZWEucGxhY2Vob2xkZXIgPSAnVGFzayBkZXNjcmlwdGlvbic7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xyXG5cclxuICAgIC8vIEFkZCBhIGR1ZSBkYXRlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICBkdWVEYXRlSW5wdXQucGxhY2Vob2xkZXIgPSAnRHVlIGRhdGUnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBhIHByaW9yaXR5IGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHByaW9yaXR5SW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5wbGFjZWhvbGRlciA9ICdQcmlvcml0eSc7XHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywnMScpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsJzMnKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBCdG5zIERpdlxyXG5cclxuICAgIGNvbnN0IEJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIEJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J0bnMnKTtcclxuICAgIC8vIEFkZCBhIGNhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgYWRkVGFzay5yZW1vdmVDaGlsZChmb3JtKTtcclxuICAgICAgICBhZGRUYXNrLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGZvcm1cclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgQnRuc0Rpdi5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xyXG5cclxuICAgIC8vIEFkZCBhIHN1Ym1pdCBidXR0b25cclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG4gICAgQnRuc0Rpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoQnRuc0Rpdik7XHJcblxyXG4gICAgLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAgICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0aXRsZUlucHV0LnZhbHVlID09PSBcIlwiKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJ0YXNrIHRpdGVsIGNhbm5vdCBiZSBlbXB0eVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBnZXRBY3RpdmVQcm9qZWN0KCk7XHJcbiAgICAgICAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSxkdWVEYXRlSW5wdXQudmFsdWUscHJpb3JpdHlJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGZvcm1cclxuICAgICAgICBhZGRUYXNrLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICBhZGRUYXNrLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbn1cclxuZnVuY3Rpb24gZWRpdFRhc2sodGFzayx0aXRsZSxkaXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhnZXRBY3RpdmVQcm9qZWN0KCkpO1xyXG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0aXRsZX1gKTtcclxuICAgIHdoaWxlIChjdXJyZW50VGFzay5maXJzdENoaWxkKXtcclxuICAgICAgICBjdXJyZW50VGFzay5yZW1vdmVDaGlsZChjdXJyZW50VGFzay5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0VGFza0Zvcm0nKVxyXG5cclxuICAgIC8vIEFkZCBsYWJlbCB0byB0aXRsZVxyXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKTtcclxuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcclxuICAgIC8vIEFkZCBhIHRpdGxlIGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XHJcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gYCR7dGl0bGV9YDtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIGxhYmVsIHRvIGRlc2NyaXB0aW9uXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpO1xyXG4gICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246ICc7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xyXG4gICAgLy8gQWRkIGEgZGVzY3JpcHRpb24gdGV4dGFyZWFcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKVxyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS52YWx1ZSA9IGAke2Rpc2NyaXB0aW9ufWA7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dGFyZWEpO1xyXG5cclxuXHJcbiAgICAvLyBBZGQgbGFiZWwgdG8gZHVlRGF0ZVxyXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2R1ZURhdGUnKTtcclxuICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSAnRHVlLURhdGU6ICc7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XHJcbiAgICAvLyBBZGQgYSBkdWUgZGF0ZSBpbnB1dCBmaWVsZFxyXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xyXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkdWVEYXRlJylcclxuICAgIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGAke2R1ZURhdGV9YDtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgICAvLyBBZGQgbGFiZWwgdG8gZHVlRGF0ZVxyXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJpb3JpdHknKTtcclxuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ1ByaW9yaXR5OyAnO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcclxuICAgIC8vIEFkZCBhIHByaW9yaXR5IGlucHV0IGZpZWxkXHJcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3ByaW9yaXR5JylcclxuICAgIHByaW9yaXR5SW5wdXQudHlwZSA9ICdudW1iZXInO1xyXG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGAke3ByaW9yaXR5fWA7XHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywnMScpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsJzMnKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xyXG5cclxuICAgIC8vIEFkZCBCdG5zIERpdlxyXG5cclxuICAgIGNvbnN0IEJ0bnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIEJ0bnNEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdFRhc2tCdG5zJyk7XHJcbiAgICBcclxuICAgIC8vIEFkZCBhIGNhbmNlbCBidXR0b25cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGN1cnJlbnRUYXNrLnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBmb3JtXHJcbiAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICB9KTtcclxuICAgIEJ0bnNEaXYuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuXHJcbiAgICAvLyBBZGQgYSBzdWJtaXQgYnV0dG9uXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuICAgIEJ0bnNEaXYuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKEJ0bnNEaXYpO1xyXG5cclxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byB0aGUgc3VibWl0IGJ1dHRvblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSA9PT0gXCJcIil7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwidGFzayB0aXRlbCBjYW5ub3QgYmUgZW1wdHlcIik7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZ2V0QWN0aXZlUHJvamVjdCgpO1xyXG4gICAgICAgIGFjdGl2ZVByb2plY3QuYWRkVGFzayh0aXRsZUlucHV0LnZhbHVlLGRlc2NyaXB0aW9uVGV4dGFyZWEudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLHByaW9yaXR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKCk7XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBmb3JtXHJcbiAgICAgICAgY3VycmVudFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIGN1cnJlbnRUYXNrLmFwcGVuZENoaWxkKGZvcm0pO1xyXG59XHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3RUYXNrcyk7XHJcbmNvbnNvbGUubG9nKFwidGFza3MgbG9hZGVkXCIpO1xyXG5cclxuZXhwb3J0IHtnZXRUYXNrcyxhZGRUYXNrcyxlZGl0VGFza307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcGFnZUxvYWQgZnJvbSAnLi9tb2R1bGVzL3BhZ2VMb2FkJztcclxuXHJcbnBhZ2VMb2FkKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9