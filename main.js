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

/***/ "./src/dailyitem.js":
/*!**************************!*\
  !*** ./src/dailyitem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDailyItem\": () => (/* binding */ makeDailyItem),\n/* harmony export */   \"toggleDailyComplete\": () => (/* binding */ toggleDailyComplete),\n/* harmony export */   \"toggleDailyPriority\": () => (/* binding */ toggleDailyPriority),\n/* harmony export */   \"changeDailyDetail\": () => (/* binding */ changeDailyDetail),\n/* harmony export */   \"changeDailyName\": () => (/* binding */ changeDailyName)\n/* harmony export */ });\nlet dailyItemMaker = (nameEntry, detailEntry, priorityEntry) => {\n    let dailyName = nameEntry;\n    let detail = detailEntry;\n    let completed = false;\n    let priority = priorityEntry;\n    function sayName () {  // use for selection methods later ?? \n        return this.dailyName;\n    }\n    function info() { \n        console.log(\"Item Info: \" + this.dailyName + \" \" + this.detail + \" \" + this.completed + \" \" + this.priority);\n    }\n    return {dailyName, detail, completed, priority, info, sayName};\n};\n\nfunction toggleDailyComplete (dailyItem) // check or uncheck Item\n{ \n    if (dailyItem.completed)\n    {\n    console.log(dailyItem.completed);\n    dailyItem.completed = false; \n    return console.log(\"changed it to falst\")\n    }\n    else if (dailyItem.completed == false)\n    {\n    console.log(\"Make true\");\n    dailyItem.completed = true; \n    return console.log(\"changed It to true\"); \n    }\n}\n\nfunction toggleDailyPriority (dailyItem, priorityEntry) // need to make basecases for no entry and exceptions?  \n{\n    console.log(dailyItem.priority);\n    dailyItem.priority = priorityEntry;\n    return console.log('Changed priority to ' + dailyItem.priority);\n}\n\n\nfunction changeDailyDetail (dailyItem, newDetails) // need to make basecases for no entry and exceptions\n{\n    console.log(dailyItem.detail);\n    dailyItem.detail = newDetails;\n    return console.log(\"Changed Details to \" + dailyItem.detail);\n}\n\nfunction changeDailyName (dailyItem, newName) // need to make basecases for no entry and exceptions\n{\n     console.log(dailyItem.dailyName);\n     dailyItem.dailyName = newName;\n    return console.log(\"Changed Name to \" + dailyItem.dailyName);\n} \n\nfunction makeDailyItem (name, detail, priority) \n{\nlet daily = dailyItemMaker(name, detail, priority);\ndaily.info();\nreturn daily;\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/dailyitem.js?");

/***/ }),

/***/ "./src/dailyprojects.js":
/*!******************************!*\
  !*** ./src/dailyprojects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDaily\": () => (/* binding */ addDaily),\n/* harmony export */   \"deleteDaily\": () => (/* binding */ deleteDaily),\n/* harmony export */   \"displayDailyProjects\": () => (/* binding */ displayDailyProjects)\n/* harmony export */ });\nlet dailyProjectsList = [];\n\nfunction displayDailyProjects ()\n{\n    console.log(dailyProjectsList);\n}\n\nfunction deleteDaily (dailyItem) // need to add exception for list being empty\n{\n    for (let findName = 0; findName <= dailyProjectsList.length-1; findName ++)\n    {\n        if (dailyProjectsList[findName].dailyName == dailyItem.dailyName)\n        {\n            dailyProjectsList.splice(findName, 1);\n        }\n        else\n        {\n            console.log('no match');\n        }\n    }\n\n    return console.log('did what could be done');\n}\n\nfunction addDaily (dailyItem) // may need to run a check to see if Name exists first\n{\n    dailyProjectsList.push(dailyItem);\n}\n\n\n\n\n//# sourceURL=webpack://package.json/./src/dailyprojects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dailyitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyitem.js */ \"./src/dailyitem.js\");\n/* harmony import */ var _dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyprojects.js */ \"./src/dailyprojects.js\");\n/* harmony import */ var _projectitem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectitem.js */ \"./src/projectitem.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n\n\n\n\n\n\nconst Japanese = (0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.makeDailyItem)(\"Japanese\", \"Learn all the Japanese\", \"High\");\nconst Spanish = (0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.makeDailyItem)(\"Spanish\", \"learn all the spanish\", \"Low\" );\nconst Peru = (0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.makeDailyItem)(\"Peru\", \"learn all the spanish\", \"Low\" );\nconst Sppp = (0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.makeDailyItem)(\"Sppp\", \"learn all the spanish\", \"Low\" );\nconst Gggg = (0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.makeDailyItem)(\"Gggg\", \"learn all the spanish\", \"Low\" );\n\n(0,_dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__.addDaily)(Japanese);\n(0,_dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__.addDaily)(Spanish);\n(0,_dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__.addDaily)(Peru);\n(0,_dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__.addDaily)(Sppp);\n(0,_dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__.addDaily)(Gggg);\nPeru.info();\n(0,_dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__.displayDailyProjects)();\n\n\n\n//# sourceURL=webpack://package.json/./src/index.js?");

/***/ }),

/***/ "./src/projectitem.js":
/*!****************************!*\
  !*** ./src/projectitem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeProjectItem\": () => (/* binding */ makeProjectItem),\n/* harmony export */   \"toggleComplete\": () => (/* binding */ toggleComplete),\n/* harmony export */   \"togglePriority\": () => (/* binding */ togglePriority),\n/* harmony export */   \"changeDetail\": () => (/* binding */ changeDetail),\n/* harmony export */   \"changeName\": () => (/* binding */ changeName)\n/* harmony export */ });\nlet projectItemMaker = (nameEntry, detailEntry, dueDateEntry, priorityEntry) => {\n    let projectItemName = nameEntry;\n    let detail = detailEntry;\n    let completed = false;\n    let priority = priorityEntry;\n    let dueDate = dueDateEntry;\n\n    function info() { \n        console.log(\"Item Info: \" + this.projectItemName + \" \" + this.detail + \" \" + this.completed + \" \" + this.priority);\n    }\n    return {projectItemName, detail, completed, priority, info, dueDate};\n};\n\nfunction toggleComplete (projectItem) // check or uncheck Item\n{ \n    if (projectItem.completed)\n    {\n    console.log(projectItem.completed);\n    projectItem.completed = false; \n    return console.log(\"changed it to false\")\n    }\n    else if (projectItem.completed == false)\n    {\n    console.log(\"Make true\");\n    projectItem.completed = true; \n    return console.log(\"changed It to true\"); \n    }\n}\n\nfunction togglePriority (projectItem, priorityEntry) // need to make basecases for no entry and exceptions?  \n{\n    console.log(projectItem.priority);\n    projectItem.priority = priorityEntry;\n    return console.log('Changed priority to ' + projectItem.priority);\n}\n\n\nfunction changeDetail (projectItem, newDetails) // need to make basecases for no entry and exceptions\n{\n    console.log(projectItem.detail);\n    projectItem.detail = newDetails;\n    return console.log(\"Changed Details to \" + projectItem.detail);\n}\n\nfunction changeName (projectItem, newName) // need to make basecases for no entry and exceptions\n{\n     console.log(projectItem.projectItemName);\n     projectItem.projectItemName = newName;\n    return console.log(\"Changed Name to \" + projectItem.projetItemName);\n} \n\nfunction makeProjectItem (name, detail, priority) \n{\nlet item = projectItemMaker(name, detail, priority);\nitem.info();\nreturn item;\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/projectitem.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects)\n/* harmony export */ });\nlet projectsList = [];\n\nlet projectsMaker = (nameEntry, descriptionEntry) => \n{\nlet projectName = nameEntry;\nlet description = descriptionEntry;\nlet listOfTasks = [];\nreturn {projectName, description, listOfTasks};\n};\n\n\nfunction displayProjects ()\n{\n    console.log(projectsList);\n}\n\nfunction deleteProject (project) // need to add exception for list being empty\n{\n    for (let findName = 0; findName <= projectsList.length-1; findName ++)\n    {\n        if (projectsList[findName].projectName == project.projectName)\n        {\n            projectsList.splice(findName, 1);\n        }\n        else\n        {\n            console.log('no match');\n        }\n    }\n    return console.log('did what could be done');\n}\n\n\nfunction addProject (nameEntry, descriptionEntry) // may need to run a check to see if Name exists first\n{\n    projectsList.push(projectsMaker(nameEntry, descriptionEntry));\n}\n\nfunction addprojectItem (projectName, projectItem)\n{\n\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/projects.js?");

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