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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDailyItem\": () => (/* binding */ makeDailyItem),\n/* harmony export */   \"toggleComplete\": () => (/* binding */ toggleComplete),\n/* harmony export */   \"togglePriority\": () => (/* binding */ togglePriority),\n/* harmony export */   \"changeDetail\": () => (/* binding */ changeDetail),\n/* harmony export */   \"changeName\": () => (/* binding */ changeName)\n/* harmony export */ });\nlet dailyItemMaker = (nameEntry, detailEntry, priorityEntry) => {\n    let dailyName = nameEntry;\n    let detail = detailEntry;\n    let completed = false;\n    let priority = priorityEntry;\n\n    function info() { \n        console.log(\"Item Info: \" + this.dailyName + \" \" + this.detail + \" \" + this.completed + \" \" + this.priority);\n    }\n    return {dailyName, detail, completed, priority, info};\n};\n\nfunction toggleComplete (dailyItem) // check or uncheck Item\n{ \n    if (dailyItem.completed)\n    {\n    console.log(dailyItem.completed);\n    dailyItem.completed = false; \n    return console.log(\"changed it to falst\")\n    }\n    else if (dailyItem.completed == false)\n    {\n    console.log(\"Make true\");\n    dailyItem.completed = true; \n    return console.log(\"changed It to true\"); \n    }\n}\n\nfunction togglePriority (dailyItem, priorityEntry) // need to make basecases for no entry and exceptions?  \n{\n    console.log(dailyItem.priority);\n    dailyItem.priority = priorityEntry;\n    return console.log('Changed priority to ' + dailyItem.priority);\n}\n\n\nfunction changeDetail (dailyItem, newDetails) // need to make basecases for no entry and exceptions\n{\n    console.log(dailyItem.detail);\n    dailyItem.detail = newDetails;\n    return console.log(\"Changed Details to \" + dailyItem.detail);\n}\n\nfunction changeName (dailyItem, newName) // need to make basecases for no entry and exceptions\n{\n     console.log(dailyItem.dailyName);\n     dailyItem.dailyName = newName;\n    return console.log(\"Changed Name to \" + dailyItem.dailyName);\n} \n\nfunction makeDailyItem (name, detail, priority) \n{\nlet daily = dailyItemMaker(name, detail, priority);\ndaily.info();\nreturn daily;\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/dailyitem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dailyitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyitem.js */ \"./src/dailyitem.js\");\n\n\n\nalert('things will do soon');\nconst Japanese = (0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.makeDailyItem)(\"Japanese\", \"Learn all the Japanese\", \"High\");\n(0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.toggleComplete)(Japanese);\nJapanese.info();\n(0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.togglePriority)(Japanese, \"Med\");\nJapanese.info();\n(0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.changeDetail)(Japanese, \"Forget it all!\");\nJapanese.info();\n(0,_dailyitem_js__WEBPACK_IMPORTED_MODULE_0__.changeName)(Japanese, \"Spanish\");\nJapanese.info();\n\n//# sourceURL=webpack://package.json/./src/index.js?");

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