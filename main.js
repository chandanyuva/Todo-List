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
        console.log(event);
        (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.addTasks)();
    })

    tasksDiv.appendChild(addTaskBtn)
    //add tasks btn

    //display tasks

    const tList = document.createElement('ul');
    tList.classList.add('tasksList');

    const currentProjectTasks = (0,_pageTasks__WEBPACK_IMPORTED_MODULE_2__.getTasks)();
    // console.log(currentProjectTasks);
    currentProjectTasks.forEach((task)=>{
        const tItem = document.createElement('li');
        tItem.innerText = `${task.title}`;
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

    addTask(title,discription,dueDate,priority){
        const task = new _Task__WEBPACK_IMPORTED_MODULE_0__["default"](title,discription,dueDate,priority);
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
    constructor(title,discription,dueDate,priority){
        this.title = title;
        this.discription = discription;
        this.dueDate = dueDate;
        this.priority = priority;
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
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   showProjectCreationForm: () => (/* binding */ showProjectCreationForm)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _DomUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomUtil */ "./src/modules/DomUtil.js");




const  projects = [];


function showProjectCreationForm(){

    let name = prompt('enter the project name');
    const p0 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(`${projects.length+1}`),`${name}`);
    projects.push(p0);
    // console.log(projects);
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
}


const p1 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](1,'project1',true);
const p2 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](2,'project2');


p1.addTask('task1','p1',87432,2);
p1.addTask('task2','p1',87432,1);
p1.addTask('task3','p1',87432,1);

p2.addTask('task1','p2',87432,2);
p2.addTask('task2','p2',87432,2);

projects.push(p1);
projects.push(p2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQzFDO0FBQ0EsNkRBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0RvbVV0aWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VIZWFkaW5nLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlVGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgaGVhZGluZyBmcm9tICcuL3BhZ2VIZWFkaW5nJ1xyXG5pbXBvcnQge3Byb2plY3RzLHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtfSBmcm9tICcuL3BhZ2VQcm9qZWN0cydcclxuaW1wb3J0IHtnZXRUYXNrcyxhZGRUYXNrc30gZnJvbSAnLi9wYWdlVGFza3MnXHJcblxyXG5mdW5jdGlvbiByZW5kZXJMYXlvdXQoKXtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGluZ0Rpdi5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nRGl2Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0RpdicpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrc0RpdicpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlckRpdicpO1xyXG5cclxuICAgIC8vYXBwZW5kaW5nXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmdEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0Rpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzRGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVySGVhZGluZygpe1xyXG4gICAgaGVhZGluZygpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKXtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNEaXZcIik7XHJcblxyXG4gICAgd2hpbGUgKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKHByb2plY3RzRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xyXG4gICAgYWRkUHJvamVjdEJ0bi5pbm5lclRleHQgPSAnKyBhZGQgcHJvamVjdCc7XHJcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgIHNob3dQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XHJcbiAgICB9KSBcclxuXHJcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcclxuXHJcbiAgICBjb25zdCBwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBwTGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGlzdCcpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgY29uc3QgcEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIC8vIHBMaXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBwSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlPWZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBwcm9qZWN0LmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcEl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBwSXRlbS5pbm5lclRleHQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcclxuICAgICAgICBwTGlzdC5hcHBlbmQocEl0ZW0pO1xyXG4gICAgfSlcclxuICAgIHBMaXN0LmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcclxuICAgIHJlbmRlclRhc2tzKCk7XHJcblxyXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocExpc3QpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrc0RpdicpO1xyXG4gICAgd2hpbGUgKHRhc2tzRGl2LmZpcnN0Q2hpbGQpe1xyXG4gICAgICAgIHRhc2tzRGl2LnJlbW92ZUNoaWxkKHRhc2tzRGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWRkIHRhc2tzIGJ0blxyXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJyk7XHJcbiAgICBhZGRUYXNrQnRuLmlubmVyVGV4dCA9ICcrIGFkZCB0YXNrJ1xyXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBhZGRUYXNrcygpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKVxyXG4gICAgLy9hZGQgdGFza3MgYnRuXHJcblxyXG4gICAgLy9kaXNwbGF5IHRhc2tzXHJcblxyXG4gICAgY29uc3QgdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgdExpc3QuY2xhc3NMaXN0LmFkZCgndGFza3NMaXN0Jyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IGdldFRhc2tzKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdFRhc2tzKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0VGFza3MuZm9yRWFjaCgodGFzayk9PntcclxuICAgICAgICBjb25zdCB0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgdEl0ZW0uaW5uZXJUZXh0ID0gYCR7dGFzay50aXRsZX1gO1xyXG4gICAgICAgIHRMaXN0LmFwcGVuZCh0SXRlbSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vZGlzcGxheSBlbmRcclxuXHJcbiAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0TGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZvb3Rlcigpe1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gJzxwPkNvcHlyaWdodCDCqSAyMDIzIEdpdGh1Yjo8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NoYW5kYW55dXZhXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Y2hhbmRhbnl1dmE8L2E+PC9wPic7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJEaXYnKTtcclxuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckxheW91dCxyZW5kZXJIZWFkaW5nLHJlbmRlclByb2plY3RzLHJlbmRlclRhc2tzLHJlbmRlckZvb3Rlcn07IiwiXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzaydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCxuYW1lLGlzQWN0aXZlPWZhbHNlLHRhc2tzKXtcclxuICAgICAgICB0aGlzLmlkID0gIGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGl0bGUsZGlzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLGRpc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGlzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxufSIsImNvbnN0IGhlYWRpbmcgPSAoKT0+e1xyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xyXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSAnVGhpbmdzIGkgbmVlZCB0byBkbyEhISc7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZ0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGluZ0RpdlwiKTtcclxuICAgIGhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlYWRpbmcgbG9hZGVkXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkaW5nIiwiaW1wb3J0IHtyZW5kZXJMYXlvdXQscmVuZGVySGVhZGluZyxyZW5kZXJQcm9qZWN0cyxyZW5kZXJUYXNrcyxyZW5kZXJGb290ZXJ9IGZyb20gJy4vRG9tVXRpbCdcclxuXHJcbmNvbnN0IGluaXRpYWxMb2FkID0gKCk9PntcclxuICAgIHJlbmRlckxheW91dCgpO1xyXG4gICAgcmVuZGVySGVhZGluZygpO1xyXG4gICAgcmVuZGVyUHJvamVjdHMoKTtcclxuICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICByZW5kZXJGb290ZXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbExvYWQiLCJcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuaW1wb3J0IHtyZW5kZXJQcm9qZWN0c30gZnJvbSAnLi9Eb21VdGlsJ1xyXG5cclxuY29uc3QgIHByb2plY3RzID0gW107XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RDcmVhdGlvbkZvcm0oKXtcclxuXHJcbiAgICBsZXQgbmFtZSA9IHByb21wdCgnZW50ZXIgdGhlIHByb2plY3QgbmFtZScpO1xyXG4gICAgY29uc3QgcDAgPSBuZXcgUHJvamVjdChwYXJzZUludChgJHtwcm9qZWN0cy5sZW5ndGgrMX1gKSxgJHtuYW1lfWApO1xyXG4gICAgcHJvamVjdHMucHVzaChwMCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG59XHJcblxyXG5cclxuY29uc3QgcDEgPSBuZXcgUHJvamVjdCgxLCdwcm9qZWN0MScsdHJ1ZSk7XHJcbmNvbnN0IHAyID0gbmV3IFByb2plY3QoMiwncHJvamVjdDInKTtcclxuXHJcblxyXG5wMS5hZGRUYXNrKCd0YXNrMScsJ3AxJyw4NzQzMiwyKTtcclxucDEuYWRkVGFzaygndGFzazInLCdwMScsODc0MzIsMSk7XHJcbnAxLmFkZFRhc2soJ3Rhc2szJywncDEnLDg3NDMyLDEpO1xyXG5cclxucDIuYWRkVGFzaygndGFzazEnLCdwMicsODc0MzIsMik7XHJcbnAyLmFkZFRhc2soJ3Rhc2syJywncDInLDg3NDMyLDIpO1xyXG5cclxucHJvamVjdHMucHVzaChwMSk7XHJcbnByb2plY3RzLnB1c2gocDIpO1xyXG5cclxuY29uc29sZS5sb2coJ3Byb2plY3RzIGxvYWRlZCcpO1xyXG5cclxuZXhwb3J0IHtwcm9qZWN0cyxzaG93UHJvamVjdENyZWF0aW9uRm9ybX07IiwiXHJcbmltcG9ydCB7cHJvamVjdHN9IGZyb20gXCIuL3BhZ2VQcm9qZWN0c1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzKCl7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRhc2tzID0gW107XHJcblxyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgICAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSl7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0VGFza3MucHVzaCguLi5wcm9qZWN0LnRhc2tzKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0VGFza3NcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVGFza3MoKXtcclxuICAgIGNvbnN0IHRpdGxlID0gcHJvbXB0KCdlbnRlciB0YXNrIHRpdGxlJyk7XHJcbiAgICBjb25zdCBkaXNjcmlwdGlvbiA9IHByb21wdCgnZW50ZXIgdGFzayBkaXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IG5ldyBEYXRlIChwcm9tcHQoJ2VudGVyIGR1ZURhdGUnKSk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICcxJzoxLFxyXG4gICAgICAgICcyJzoyLFxyXG4gICAgICAgICczJzozXHJcbiAgICB9XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHByb21wdCgnc2V0IHRhc2sgcHJpb3JpdHknLG9wdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2codGl0bGUsZGlzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSk7XHJcbn1cclxuXHJcblxyXG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdFRhc2tzKTtcclxuY29uc29sZS5sb2coXCJ0YXNrcyBsb2FkZWRcIik7XHJcblxyXG5leHBvcnQge2dldFRhc2tzLGFkZFRhc2tzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWQnO1xyXG5cclxucGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=