/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_formLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/formLoad */ \"./src/modules/formLoad.js\");\n/* harmony import */ var _modules_homeLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homeLoad */ \"./src/modules/homeLoad.js\");\n\n\n\nconst addAll = document.querySelector('#add-all');\naddAll.addEventListener('click', () =>{\n    (0,_modules_formLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n})\nconst homeBtn = document.querySelector('#home');\nhomeBtn.addEventListener('click', () =>{\n    (0,_modules_homeLoad__WEBPACK_IMPORTED_MODULE_1__.default)();\n})\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/cardLoad.js":
/*!*********************************!*\
  !*** ./src/modules/cardLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardStyle = (card) => {\n    card.style.width = '480px';\n    card.style.height = '300px';\n    card.style.background = 'lightgray';\n    card.style.display = 'flex';\n}\nconst partStyle = (part, width, height, justify, bgColor) => {\n    part.style.width = width;\n    part.style.height = height;\n    part.style.background = bgColor;\n    part.style.display = 'flex';\n    part.style.flexDirection = 'column';\n    part.style.alignItems = 'center';\n    part.style.justifyContent = justify;\n}\nconst createPart = (id) => {\n    const part = document.createElement('div');\n    part.setAttribute('id', id);\n    return part;\n}\nconst createBtn = (id, text) => {\n    const btn = document.createElement('button');\n    btn.setAttribute('id', id);\n    btn.innerText = text;\n    return btn;\n}\nconst createCard = () =>{\n    const card = document.createElement('div');\n    card.setAttribute('id', 'card');\n\n    cardStyle(card);\n\n    const sidebar = createPart('sidebar');\n    partStyle(sidebar, '30%', '100%', 'center', '#999');\n    \n    const projectBtn = createBtn('card-project-btn', 'Add Project');\n\n    const todoBtn = createBtn('card-todo-btn', 'Add Todo');\n    sidebar.appendChild(todoBtn);\n    sidebar.appendChild(projectBtn);\n\n    card.appendChild(sidebar);\n\n    const infoContainer = createPart('info-container');\n\n    partStyle(infoContainer, '70%', '100%', 'space-between', '#555');\n    card.appendChild(infoContainer);\n\n    return card;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);\n\n//# sourceURL=webpack://odin-todo/./src/modules/cardLoad.js?");

/***/ }),

/***/ "./src/modules/formLoad.js":
/*!*********************************!*\
  !*** ./src/modules/formLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cardLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardLoad */ \"./src/modules/cardLoad.js\");\n/* harmony import */ var _insideCardLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insideCardLoad */ \"./src/modules/insideCardLoad.js\");\n\n\nconst form = () => {\n    const container = document.querySelector('.container');\n    container.style.display = 'none';\n    const formContainer = document.querySelector('#form-container');\n    formContainer.style.display = 'flex';\n    const card = (0,_cardLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n    formContainer.appendChild(card);\n     //bitorer card create \n    (0,_insideCardLoad__WEBPACK_IMPORTED_MODULE_1__.default)();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://odin-todo/./src/modules/formLoad.js?");

/***/ }),

/***/ "./src/modules/homeLoad.js":
/*!*********************************!*\
  !*** ./src/modules/homeLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));\n    const content = document.querySelector('#content');\n    content.innerHTML = \"\";\n    console.log(myTodoList);\n    myTodoList.map((todo => {\n\n        const list = document.createElement('p');\n        list.className = 'item';\n        list.innerText = todo.title;\n        content.appendChild(list);\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://odin-todo/./src/modules/homeLoad.js?");

/***/ }),

/***/ "./src/modules/insideCardLoad.js":
/*!***************************************!*\
  !*** ./src/modules/insideCardLoad.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projectFormLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectFormLoad */ \"./src/modules/projectFormLoad.js\");\n/* harmony import */ var _todoFormLoad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFormLoad */ \"./src/modules/todoFormLoad.js\");\n\n\nconst insideCard = () =>{\n    const insideProjectBtn = document.querySelector('#card-project-btn');\n    insideProjectBtn.addEventListener('click', () =>{\n        (0,_projectFormLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n    })\n    const insideTodoBtn = document.querySelector('#card-todo-btn');\n    insideTodoBtn.addEventListener('click', ()=>{\n        (0,_todoFormLoad__WEBPACK_IMPORTED_MODULE_1__.default)();\n    })\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insideCard);\n\n//# sourceURL=webpack://odin-todo/./src/modules/insideCardLoad.js?");

/***/ }),

/***/ "./src/modules/projectFormLoad.js":
/*!****************************************!*\
  !*** ./src/modules/projectFormLoad.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst myProjectList = [];\nlocalStorage.setItem('myProjectList', JSON.stringify(myProjectList));\nconst projectItem = {\n    title: '',\n}\nconst handleInput = (e) => {\n    e.preventDefault();\n    projectItem[e.target.name] = e.target.value;\n}\nconst handleFormSubmit = (e) => {\n    e.preventDefault();\n    myProjectList.push(projectItem);\n    const container = document.querySelector('.container');\n    container.style.display = 'flex';\n    const formContainer = document.querySelector('#form-container');\n    formContainer.innerHTML = '';\n    formContainer.style.display = 'none';\n}\nconst projectForm = () => {\n    const infoContainer = document.querySelector('#info-container');\n    infoContainer.innerHTML = \"\";\n\n    const form = document.createElement('form');\n    form.setAttribute('id', 'project-form');\n    form.onsubmit = handleFormSubmit;\n\n    // form info start\n    const p = document.createElement('p');\n    p.setAttribute('id', 'project-title');\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.name = 'title';\n    input.onblur = handleInput;\n    input.placeholder = \"project name\";\n    p.appendChild(input);\n\n    const createProjectBtn = document.createElement('button');\n    createProjectBtn.innerHTML = \"Create Project\";\n    createProjectBtn.type = 'submit';\n    // form info end\n\n    form.appendChild(p);\n    form.appendChild(createProjectBtn);\n    infoContainer.appendChild(form);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectForm);\n\n//# sourceURL=webpack://odin-todo/./src/modules/projectFormLoad.js?");

/***/ }),

/***/ "./src/modules/todoFormLoad.js":
/*!*************************************!*\
  !*** ./src/modules/todoFormLoad.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _homeLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeLoad */ \"./src/modules/homeLoad.js\");\n\nconst todoItem = {\n    title: '',\n    description: '',\n    dueDate: '',\n    priority: '',\n}\n\nconst createInput = (id, placeholder, text, type, name) => {\n    const p = document.createElement('p');\n    p.setAttribute('id', id);\n    const label = document.createElement('label');\n    label.innerText = text;\n    const input = document.createElement('input');\n    input.type = type;\n    input.name = name;\n    input.placeholder = placeholder;\n    input.onblur = handleInput;\n    p.appendChild(label);\n    p.appendChild(input);\n\n    return p;\n}\nconst createPriority = () => {\n    const p = document.createElement('p');\n    p.setAttribute('id','priority');\n\n    const label = document.createElement('label');\n    label.innerText = \"Priority\";\n    const input = document.createElement('input');\n    input.type = 'text';\n    input.setAttribute('list', 'list')\n    input.name = 'priority';\n    input.onblur = handleInput;\n\n    const dataList = document.createElement('datalist');\n    dataList.setAttribute('id', 'list');\n    const low = document.createElement('option');\n    low.innerText = 'Low';\n    const medium = document.createElement('option');\n    medium.innerText = 'Medium';\n    const high = document.createElement('option');\n    high.innerText = 'High';\n\n    dataList.appendChild(low);\n    dataList.appendChild(medium);\n    dataList.appendChild(high);\n\n    p.appendChild(label);\n    p.appendChild(input);\n    p.appendChild(dataList);\n\n    return p;\n}\nconst handleInput = (e) => {\n    e.preventDefault();\n    todoItem[e.target.name] = e.target.value;\n}\nconst handleFormSubmit = (e) => {\n    e.preventDefault();\n    const myTodoList = JSON.parse(localStorage.getItem('myTodoList'));\n    console.log(myTodoList);\n    myTodoList.push(todoItem);\n    localStorage.setItem('myTodoList', JSON.stringify(myTodoList));\n    // console.log(JSON.parse(localStorage.getItem('myTodoList')));\n    const container = document.querySelector('.container');\n    container.style.display = 'flex';\n    const formContainer = document.querySelector('#form-container');\n    formContainer.innerHTML = '';\n    formContainer.style.display = 'none';\n    (0,_homeLoad__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\nconst todoForm = () => {\n    const infoContainer = document.querySelector('#info-container');\n    infoContainer.innerHTML = \"\";\n\n    console.log('todo form');\n    const form = document.createElement('form');\n    form.setAttribute('id', 'todo-form');\n    form.onsubmit = handleFormSubmit;\n\n    const title = createInput('title', 'title', 'Title', 'text', 'title');\n    const description = createInput('description', 'e.g net bill', 'Description', 'text', 'description');\n    const dueDate = createInput('due-date', '', 'Due Date', 'date', 'dueDate');\n    const priority = createPriority();\n\n    const addTodoBtn = document.createElement('button');\n    addTodoBtn.innerText = \"Add Todo Item\";\n    addTodoBtn.setAttribute('id', 'addTodoItem');\n\n    form.appendChild(title);\n    form.appendChild(description);\n    form.appendChild(dueDate);\n    form.appendChild(priority);\n    form.appendChild(addTodoBtn);\n    //added form to info container\n    infoContainer.appendChild(form);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoForm);\n\n//# sourceURL=webpack://odin-todo/./src/modules/todoFormLoad.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;