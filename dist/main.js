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
/* harmony export */   renderHeading: () => (/* binding */ renderHeading),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _pageHeading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageHeading */ "./src/modules/pageHeading.js");
/* harmony import */ var _pageProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageProjects */ "./src/modules/pageProjects.js");
/* harmony import */ var _pageTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageTasks */ "./src/modules/pageTasks.js");





function renderHeading(){
    (0,_pageHeading__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

function renderProjects(){
    const content = document.querySelector("#content");
    const pList = document.createElement('ul');
    // console.log(projects);
    _pageProjects__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project)=>{
        const pItem = document.createElement('li');
        pItem.innerText = `${project.name}`;
        pList.append(pItem);
    })
    content.appendChild(pList);
    console.log('projects loaded');
}

function renderTasks(){
    console.log(_pageTasks__WEBPACK_IMPORTED_MODULE_2__.currentProjectTasks);
    const content = document.querySelector('#content');
    const tList = document.createElement('ul');
    _pageTasks__WEBPACK_IMPORTED_MODULE_2__.currentProjectTasks.forEach((task)=>{
        const tItem = document.createElement('li');
        tItem.innerText = `${task.title}`;
        tList.append(tItem);
    })
    content.appendChild(tList);
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

    get isActive(){
        return this._isAvtive;
    }

    set isActive(value){
        this._isAvtive = value;
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
    const content = document.querySelector("#content");
    
    const heading = document.createElement('h1');
    heading.innerText = 'Things i need to do!!!';
    content.appendChild(heading);
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
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderHeading)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
    (0,_DomUtil__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
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
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");



const  projects = [];

const p1 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](1,'test1',true);
const p2 = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](2,'test2');


p1.addTask('task1','p1',87432,2);
p1.addTask('task2','p1',87432,1);

p2.addTask('task1','p2',87432,2);
p2.addTask('task2','p2',87432,2);

projects.push(p1);
projects.push(p2);



/***/ }),

/***/ "./src/modules/pageTasks.js":
/*!**********************************!*\
  !*** ./src/modules/pageTasks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currentProjectTasks: () => (/* binding */ currentProjectTasks)
/* harmony export */ });
/* harmony import */ var _pageProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageProjects */ "./src/modules/pageProjects.js");




const currentProjectTasks = [];

_pageProjects__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project)=>{
    const tasks = []
    tasks.push(...project.tasks)
    if (project.isActive){
        currentProjectTasks.push(...tasks);
    }
    // allProjectTasks.push(tasks);
})


// console.log(allProjectTasks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDbUM7QUFDSTtBQUNRO0FBQy9DO0FBQ0E7QUFDQSxJQUFJLHdEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtREFBUTtBQUNaO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBbUI7QUFDbkM7QUFDQTtBQUNBLElBQUksMkRBQW1CO0FBQ3ZCO0FBQ0EsNkJBQTZCLFdBQVc7QUFDeEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ3lCO0FBQ3pCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw2Q0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDVG1EO0FBQ2xFO0FBQ0E7QUFDQSxJQUFJLHVEQUFhO0FBQ2pCLElBQUksd0RBQWM7QUFDbEIsSUFBSSxxREFBVztBQUNmO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDUmY7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnREFBTztBQUN0QixlQUFlLGdEQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUM7QUFDQSw2REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvRG9tVXRpbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZUhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZVByb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3BhZ2VUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBoZWFkaW5nIGZyb20gJy4vcGFnZUhlYWRpbmcnXHJcbmltcG9ydCB7cHJvamVjdHN9IGZyb20gJy4vcGFnZVByb2plY3RzJ1xyXG5pbXBvcnQge2N1cnJlbnRQcm9qZWN0VGFza3N9IGZyb20gJy4vcGFnZVRhc2tzJ1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySGVhZGluZygpe1xyXG4gICAgaGVhZGluZygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCl7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgY29uc3QgcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdHMpO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgICAgICBjb25zdCBwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgcEl0ZW0uaW5uZXJUZXh0ID0gYCR7cHJvamVjdC5uYW1lfWA7XHJcbiAgICAgICAgcExpc3QuYXBwZW5kKHBJdGVtKTtcclxuICAgIH0pXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBMaXN0KTtcclxuICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0cyBsb2FkZWQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKXtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0VGFza3MpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb25zdCB0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjdXJyZW50UHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICAgICAgY29uc3QgdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIHRJdGVtLmlubmVyVGV4dCA9IGAke3Rhc2sudGl0bGV9YDtcclxuICAgICAgICB0TGlzdC5hcHBlbmQodEl0ZW0pO1xyXG4gICAgfSlcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodExpc3QpO1xyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckhlYWRpbmcscmVuZGVyUHJvamVjdHMscmVuZGVyVGFza3N9OyIsIlxyXG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xyXG4gICAgY29uc3RydWN0b3IoaWQsbmFtZSxpc0FjdGl2ZT1mYWxzZSx0YXNrcyl7XHJcbiAgICAgICAgdGhpcy5pZCA9ICBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBpc0FjdGl2ZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBY3RpdmUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNBdnRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlzQWN0aXZlKHZhbHVlKXtcclxuICAgICAgICB0aGlzLl9pc0F2dGl2ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodGl0bGUsZGlzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLGRpc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpO1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsZGlzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSl7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGlzY3JpcHRpb24gPSBkaXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxufSIsImNvbnN0IGhlYWRpbmcgPSAoKT0+e1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9ICdUaGluZ3MgaSBuZWVkIHRvIGRvISEhJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlYWRpbmcgbG9hZGVkXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoZWFkaW5nIiwiaW1wb3J0IHtyZW5kZXJIZWFkaW5nLHJlbmRlclByb2plY3RzLHJlbmRlclRhc2tzfSBmcm9tICcuL0RvbVV0aWwnXHJcblxyXG5jb25zdCBpbml0aWFsTG9hZCA9ICgpPT57XHJcbiAgICByZW5kZXJIZWFkaW5nKCk7XHJcbiAgICByZW5kZXJQcm9qZWN0cygpO1xyXG4gICAgcmVuZGVyVGFza3MoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbExvYWQiLCJcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcclxuXHJcbmNvbnN0ICBwcm9qZWN0cyA9IFtdO1xyXG5cclxuY29uc3QgcDEgPSBuZXcgUHJvamVjdCgxLCd0ZXN0MScsdHJ1ZSk7XHJcbmNvbnN0IHAyID0gbmV3IFByb2plY3QoMiwndGVzdDInKTtcclxuXHJcblxyXG5wMS5hZGRUYXNrKCd0YXNrMScsJ3AxJyw4NzQzMiwyKTtcclxucDEuYWRkVGFzaygndGFzazInLCdwMScsODc0MzIsMSk7XHJcblxyXG5wMi5hZGRUYXNrKCd0YXNrMScsJ3AyJyw4NzQzMiwyKTtcclxucDIuYWRkVGFzaygndGFzazInLCdwMicsODc0MzIsMik7XHJcblxyXG5wcm9qZWN0cy5wdXNoKHAxKTtcclxucHJvamVjdHMucHVzaChwMik7XHJcblxyXG5leHBvcnQge3Byb2plY3RzfTsiLCJcclxuaW1wb3J0IHtwcm9qZWN0c30gZnJvbSBcIi4vcGFnZVByb2plY3RzXCI7XHJcblxyXG5cclxuY29uc3QgY3VycmVudFByb2plY3RUYXNrcyA9IFtdO1xyXG5cclxucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGNvbnN0IHRhc2tzID0gW11cclxuICAgIHRhc2tzLnB1c2goLi4ucHJvamVjdC50YXNrcylcclxuICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKXtcclxuICAgICAgICBjdXJyZW50UHJvamVjdFRhc2tzLnB1c2goLi4udGFza3MpO1xyXG4gICAgfVxyXG4gICAgLy8gYWxsUHJvamVjdFRhc2tzLnB1c2godGFza3MpO1xyXG59KVxyXG5cclxuXHJcbi8vIGNvbnNvbGUubG9nKGFsbFByb2plY3RUYXNrcyk7XHJcbmNvbnNvbGUubG9nKFwidGFza3MgbG9hZGVkXCIpO1xyXG5cclxuZXhwb3J0IHtjdXJyZW50UHJvamVjdFRhc2tzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwYWdlTG9hZCBmcm9tICcuL21vZHVsZXMvcGFnZUxvYWQnO1xyXG5cclxucGFnZUxvYWQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=