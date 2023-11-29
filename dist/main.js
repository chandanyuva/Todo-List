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
    // console.log(currentProjectTasks);
    // console.log(currentProjectTasks);
    currentProjectTasks.forEach((task)=>{
        const tItem = document.createElement('li');

        const tItemDiv = document.createElement('div');
        tItemDiv.classList.add('tasksItemDiv');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0EsNkRBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RvbVV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VIZWFkaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgaGVhZGluZyBmcm9tICcuL3BhZ2VIZWFkaW5nJ1xyXG5pbXBvcnQge3Byb2plY3RzLHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtfSBmcm9tICcuL3BhZ2VQcm9qZWN0cydcclxuaW1wb3J0IHtnZXRUYXNrcyxhZGRUYXNrc30gZnJvbSAnLi9wYWdlVGFza3MnXHJcblxyXG5mdW5jdGlvbiByZW5kZXJMYXlvdXQoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nRGl2Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0RpdicpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0RpdicpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckRpdicpO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySGVhZGluZygpe1xyXG4gICAgaGVhZGluZygpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKXtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNEaXZcIik7XHJcblxyXG4gICAgd2hpbGUgKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lclRleHQgPSAnKyBhZGQgcHJvamVjdCc7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XHJcbiAgICB9KSBcclxuXHJcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcclxuXHJcbiAgICBjb25zdCBwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBwTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgY29uc3QgcEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIC8vIHBMaXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBwSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwSXRlbS5pbm5lclRleHQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcclxuICAgICAgICBwTGlzdC5hcHBlbmQocEl0ZW0pO1xyXG4gICAgfSlcclxuICAgIHBMaXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgIHJlbmRlclRhc2tzKCk7XHJcblxyXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocExpc3QpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0RpdicpO1xyXG4gICAgd2hpbGUgKHRhc2tzRGl2LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIHRhc2tzIGJ0blxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XHJcbiAgICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9ICcrIGFkZCB0YXNrJ1xyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBhZGRUYXNrcygpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKVxyXG4gICAgLy9hZGQgdGFza3MgYnRuXHJcblxyXG4gICAgLy9kaXNwbGF5IHRhc2tzXHJcblxyXG4gICAgY29uc3QgdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdExpc3QuY2xhc3NMaXN0LmFkZCgndGFza3NMaXN0Jyk7XHJcblxyXG4gICAgY29uc3QgdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgdEl0ZW0uY2xhc3NMaXN0LmFkZCgndGFza3NMaXN0SGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRJdGVtRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzSXRlbURpdicpXHJcblxyXG4gICAgY29uc3QgdENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHREaXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgdENvbXBsZXRlZC5pbm5lclRleHQgPSAnQ29tcGxldGVkJztcclxuICAgIHRUaXRsZS5pbm5lclRleHQgPSBgVGl0bGVgO1xyXG4gICAgdERpc2NyaXAuaW5uZXJUZXh0ID0gYERpc2NyaXB0aW9uYDtcclxuICAgIHREdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUtRGF0ZWA7XHJcbiAgICB0UHJpb3JpdHkuaW5uZXJUZXh0ID0gYFByaW9yaXR5YDtcclxuICAgIFxyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodENvbXBsZXRlZCk7XHJcbiAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0VGl0bGUpO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodERpc2NyaXApO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodER1ZURhdGUpO1xyXG4gICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodFByaW9yaXR5KTtcclxuXHJcbiAgICB0SXRlbS5hcHBlbmRDaGlsZCh0SXRlbURpdilcclxuXHJcbiAgICB0TGlzdC5hcHBlbmQodEl0ZW0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IGdldFRhc2tzKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdFRhc2tzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG4gICAgY3VycmVudFByb2plY3RUYXNrcy5mb3JFYWNoKCh0YXNrKT0+e1xyXG4gICAgICAgIGNvbnN0IHRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICAgICAgY29uc3QgdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0SXRlbURpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0l0ZW1EaXYnKTtcclxuXHJcbiAgICAgICAgY29uc3QgdENvbXBsZXRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcclxuICAgICAgICB0Q29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NoZWNrJylcclxuICAgICAgICB0Q29tcGxldGVkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBjb25zdCB0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgdERpc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgdFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBpZih0YXNrLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgICAgIHRDb21wbGV0ZWQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgdENvbXBsZXRlZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLChldmVudCk9PntcclxuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNoZWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFzayk7XHJcbiAgICAgICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICB0VGl0bGUuaW5uZXJUZXh0ID0gYCR7dGFzay50aXRsZX1gO1xyXG4gICAgICAgIHREaXNjcmlwLmlubmVyVGV4dCA9IGAke3Rhc2suZGlzY3JpcHRpb259YDtcclxuICAgICAgICB0RHVlRGF0ZS5pbm5lclRleHQgPSBgJHt0YXNrLmR1ZURhdGV9YDtcclxuICAgICAgICB0UHJpb3JpdHkuaW5uZXJUZXh0ID0gYCR7dGFzay5wcmlvcml0eX1gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRDb21wbGV0ZWQpO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHRUaXRsZSk7XHJcbiAgICAgICAgdEl0ZW1EaXYuYXBwZW5kQ2hpbGQodERpc2NyaXApO1xyXG4gICAgICAgIHRJdGVtRGl2LmFwcGVuZENoaWxkKHREdWVEYXRlKTtcclxuICAgICAgICB0SXRlbURpdi5hcHBlbmRDaGlsZCh0UHJpb3JpdHkpO1xyXG5cclxuICAgICAgICB0SXRlbS5hcHBlbmRDaGlsZCh0SXRlbURpdilcclxuXHJcbiAgICAgICAgdExpc3QuYXBwZW5kKHRJdGVtKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy9kaXNwbGF5IGVuZFxyXG5cclxuICAgIHRhc2tzRGl2LmFwcGVuZENoaWxkKHRMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyRm9vdGVyKCl7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnPHA+Q29weXJpZ2h0IMKpIDIwMjMgR2l0aHViOjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2hhbmRhbnl1dmFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5jaGFuZGFueXV2YTwvYT48L3A+JztcclxuICAgIFxyXG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlckRpdicpO1xyXG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyTGF5b3V0LHJlbmRlckhlYWRpbmcscmVuZGVyUHJvamVjdHMscmVuZGVyVGFza3MscmVuZGVyRm9vdGVyfTsiLCJcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLG5hbWUsaXNBY3RpdmU9ZmFsc2UsdGFza3Mpe1xyXG4gICAgICAgIHRoaXMuaWQgPSAgaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0aXRsZSxkaXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNvbXBsZXRlZCl7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLGRpc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY29tcGxldGVkKTtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRpc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY29tcGxldGVkPWZhbHNlKXtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kaXNjcmlwdGlvbiA9IGRpc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkXHJcbiAgICB9XHJcbn0iLCJjb25zdCBoZWFkaW5nID0gKCk9PntcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcclxuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gJ1RoaW5ncyBpIG5lZWQgdG8gZG8hISEnO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRpbmdEaXZcIik7ICAgXHJcbiAgICBoZWFkaW5nRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29uc29sZS5sb2coXCJoZWFkaW5nIGxvYWRlZFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGluZyIsImltcG9ydCB7cmVuZGVyTGF5b3V0LHJlbmRlckhlYWRpbmcscmVuZGVyUHJvamVjdHMscmVuZGVyVGFza3MscmVuZGVyRm9vdGVyfSBmcm9tICcuL0RvbVV0aWwnXHJcblxyXG5jb25zdCBpbml0aWFsTG9hZCA9ICgpPT57XHJcbiAgICByZW5kZXJMYXlvdXQoKTtcclxuICAgIHJlbmRlckhlYWRpbmcoKTtcclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgICByZW5kZXJUYXNrcygpO1xyXG4gICAgcmVuZGVyRm9vdGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkIiwiXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XHJcbmltcG9ydCB7cmVuZGVyUHJvamVjdHN9IGZyb20gJy4vRG9tVXRpbCdcclxuXHJcbmNvbnN0ICBwcm9qZWN0cyA9IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtKCl7XHJcblxyXG4gICAgbGV0IG5hbWUgPSBwcm9tcHQoJ2VudGVyIHRoZSBwcm9qZWN0IG5hbWUnKTtcclxuICAgIGlmKG5hbWUgPT09IFwiXCIpe1xyXG4gICAgICAgIGFsZXJ0KFwiUHJvamVjdCBuYW1lIGNhbiBub3QgYmUgZW1wdHkhXCIpO1xyXG4gICAgICAgIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKG5hbWUgPT09IG51bGwpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICBjb25zdCBwMCA9IG5ldyBQcm9qZWN0KHBhcnNlSW50KGAke3Byb2plY3RzLmxlbmd0aCsxfWApLGAke25hbWV9YCk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKHAwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBwMSA9IG5ldyBQcm9qZWN0KDEsJ3Byb2plY3QxJyx0cnVlKTtcclxuY29uc3QgcDIgPSBuZXcgUHJvamVjdCgyLCdwcm9qZWN0MicpO1xyXG5cclxuXHJcbnAxLmFkZFRhc2soJ3Rhc2sxJywnVGFzayBEaXNjcmlwdGlvbicsJzIwMjMtMTEtMTYnLDIsdHJ1ZSk7XHJcbnAxLmFkZFRhc2soJ3Rhc2syJywnVGFzayBEaXNjcmlwdGlvbicsJzIwMjMtMTEtMTYnLDEsZmFsc2UpO1xyXG5wMS5hZGRUYXNrKCd0YXNrMycsJ1Rhc2sgRGlzY3JpcHRpb24nLCcyMDIzLTExLTE2JywxLGZhbHNlKTtcclxuXHJcbnAyLmFkZFRhc2soJ3Rhc2sxJywnVGFzayBEaXNjcmlwdGlvbicsJzIwMjMtMTEtMTYnLDIsdHJ1ZSk7XHJcbnAyLmFkZFRhc2soJ3Rhc2syJywnVGFzayBEaXNjcmlwdGlvbicsJzIwMjMtMTEtMTYnLDIsZmFsc2UpO1xyXG5cclxucHJvamVjdHMucHVzaChwMSk7XHJcbnByb2plY3RzLnB1c2gocDIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpe1xyXG4gICAgbGV0IGFwO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgICAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSl7XHJcbiAgICAgICAgICAgIGFwPXByb2plY3Q7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gYXA7XHJcbn1cclxuXHJcblxyXG5jb25zb2xlLmxvZygncHJvamVjdHMgbG9hZGVkJyk7XHJcblxyXG5leHBvcnQge3Byb2plY3RzLHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtLGdldEFjdGl2ZVByb2plY3R9OyIsIlxyXG5pbXBvcnQge3Byb2plY3RzLGdldEFjdGl2ZVByb2plY3R9IGZyb20gXCIuL3BhZ2VQcm9qZWN0c1wiO1xyXG5pbXBvcnQgeyByZW5kZXJUYXNrcyB9IGZyb20gXCIuL0RvbVV0aWxcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBnZXRUYXNrcygpe1xyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IFtdO1xyXG5cclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgaWYgKHByb2plY3QuaXNBY3RpdmUpe1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdFRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBjdXJyZW50UHJvamVjdFRhc2tzXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVGFza3MoKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldEFjdGl2ZVByb2plY3QoKSk7XHJcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTtcclxuXHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrRm9ybScpXHJcblxyXG4gICAgLy8gQWRkIGEgdGl0bGUgaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgLy8gdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxyXG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUYXNrIHRpdGxlJztcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIGEgZGVzY3JpcHRpb24gdGV4dGFyZWFcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZGVzY3JpcHRpb25UZXh0YXJlYS5wbGFjZWhvbGRlciA9ICdUYXNrIGRlc2NyaXB0aW9uJztcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0YXJlYSk7XHJcblxyXG4gICAgLy8gQWRkIGEgZHVlIGRhdGUgaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcclxuICAgIGR1ZURhdGVJbnB1dC5wbGFjZWhvbGRlciA9ICdEdWUgZGF0ZSc7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIGEgcHJpb3JpdHkgaW5wdXQgZmllbGRcclxuICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcHJpb3JpdHlJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICBwcmlvcml0eUlucHV0LnBsYWNlaG9sZGVyID0gJ1ByaW9yaXR5JztcclxuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCcxJyk7XHJcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywnMycpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gICAgLy8gQWRkIEJ0bnMgRGl2XHJcblxyXG4gICAgY29uc3QgQnRuc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgQnRuc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnRucycpO1xyXG4gICAgLy8gQWRkIGEgY2FuY2VsIGJ1dHRvblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBhZGRUYXNrLnJlbW92ZUNoaWxkKGZvcm0pO1xyXG4gICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcclxuICAgICAgfSk7XHJcbiAgICBCdG5zRGl2LmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcblxyXG4gICAgLy8gQWRkIGEgc3VibWl0IGJ1dHRvblxyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XHJcbiAgICBCdG5zRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChCdG5zRGl2KTtcclxuXHJcbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHN1Ym1pdCBidXR0b25cclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRpdGxlSW5wdXQudmFsdWUgPT09IFwiXCIpe1xyXG4gICAgICAgICAgICBhbGVydChcInRhc2sgdGl0ZWwgY2Fubm90IGJlIGVtcHR5XCIpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGdldEFjdGl2ZVByb2plY3QoKTtcclxuICAgICAgICBhY3RpdmVQcm9qZWN0LmFkZFRhc2sodGl0bGVJbnB1dC52YWx1ZSxkZXNjcmlwdGlvblRleHRhcmVhLnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSxwcmlvcml0eUlucHV0LnZhbHVlKTtcclxuICAgICAgICByZW5kZXJUYXNrcygpO1xyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgZm9ybVxyXG4gICAgICAgIGFkZFRhc2suZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIGFkZFRhc2suZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChmb3JtKTtcclxufVxyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG5jb25zb2xlLmxvZyhcInRhc2tzIGxvYWRlZFwiKTtcclxuXHJcbmV4cG9ydCB7Z2V0VGFza3MsYWRkVGFza3N9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vbW9kdWxlcy9wYWdlTG9hZCc7XHJcblxyXG5wYWdlTG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==