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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeDailyItem\": () => (/* binding */ makeDailyItem),\n/* harmony export */   \"toggleDailyComplete\": () => (/* binding */ toggleDailyComplete),\n/* harmony export */   \"toggleDailyPriority\": () => (/* binding */ toggleDailyPriority),\n/* harmony export */   \"changeDailyDetail\": () => (/* binding */ changeDailyDetail),\n/* harmony export */   \"changeDailyName\": () => (/* binding */ changeDailyName)\n/* harmony export */ });\n\nlet dailyItemMaker = (nameEntry, detailEntry, priorityEntry) => {\n    let dailyName = nameEntry;\n    let detail = detailEntry;\n    let completed = false;\n    let priority = priorityEntry;\n    function sayName () {  // use for selection methods later ?? \n        return this.dailyName;\n    }\n    function info() { \n        console.log(\"Item Info: \" + this.dailyName + \" \" + this.detail + \" \" + this.completed + \" \" + this.priority);\n    }\n    return {dailyName, detail, completed, priority, info, sayName};\n};\n\nfunction toggleDailyComplete (dailyItem) // check or uncheck Item\n{ \n    if (dailyItem.completed)\n    {\n    console.log(dailyItem.completed);\n    dailyItem.completed = false; \n    return console.log(\"changed it to falst\")\n    }\n    else if (dailyItem.completed == false)\n    {\n    console.log(\"Make true\");\n    dailyItem.completed = true; \n    return console.log(\"changed It to true\"); \n    }\n}\n\nfunction toggleDailyPriority (dailyItem, priorityEntry) // need to make basecases for no entry and exceptions?  \n{\n    console.log(dailyItem.priority);\n    dailyItem.priority = priorityEntry;\n    return console.log('Changed priority to ' + dailyItem.priority);\n}\n\n\nfunction changeDailyDetail (dailyItem, newDetails) // need to make basecases for no entry and exceptions\n{\n    console.log(dailyItem.detail);\n    dailyItem.detail = newDetails;\n    return console.log(\"Changed Details to \" + dailyItem.detail);\n}\n\nfunction changeDailyName (dailyItem, newName) // need to make basecases for no entry and exceptions\n{\n     console.log(dailyItem.dailyName);\n     dailyItem.dailyName = newName;\n    return console.log(\"Changed Name to \" + dailyItem.dailyName);\n} \n\nfunction makeDailyItem (name, detail, priority) \n{\nlet daily = dailyItemMaker(name, detail, priority);\ndaily.info();\nreturn daily;\n}\n\n\n\n\n//# sourceURL=webpack://package.json/./src/dailyitem.js?");

/***/ }),

/***/ "./src/dailyprojects.js":
/*!******************************!*\
  !*** ./src/dailyprojects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDaily\": () => (/* binding */ addDaily),\n/* harmony export */   \"deleteDaily\": () => (/* binding */ deleteDaily),\n/* harmony export */   \"displayDailyProjects\": () => (/* binding */ displayDailyProjects)\n/* harmony export */ });\nlet dailyProjectsList = [];\n\nfunction displayDailyProjects ()\n{\n    //had console log to display replaced with this for time being\n    let dailyTaskDisplay = dailyProjectsList;\n    return dailyTaskDisplay;\n}\n\nfunction deleteDaily (dailyItem) // need to add exception for list being empty\n{\n    for (let findName = 0; findName <= dailyProjectsList.length-1; findName ++)\n    {\n        if (dailyProjectsList[findName].dailyName == dailyItem.dailyName)\n        {\n            dailyProjectsList.splice(findName, 1);\n        }\n        else\n        {\n            console.log('no match');\n        }\n    }\n\n    return console.log('did what could be done');\n}\n\nfunction addDaily (dailyItem) // may need to run a check to see if Name exists first\n{\n    dailyProjectsList.push(dailyItem);\n}\n\n\n\n\n//# sourceURL=webpack://package.json/./src/dailyprojects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dailyitem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dailyitem.js */ \"./src/dailyitem.js\");\n/* harmony import */ var _dailyprojects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyprojects.js */ \"./src/dailyprojects.js\");\n/* harmony import */ var _projectitem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectitem.js */ \"./src/projectitem.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _screencontent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screencontent.js */ \"./src/screencontent.js\");\n\n\n\n\n\n\n//Project and dailyProject functionally now good to go \n\n\n\n\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.displayProjects)(); // need to delete from projects now was initial testing before ui?\n(0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.displayCurrentProject)();\n(0,_screencontent_js__WEBPACK_IMPORTED_MODULE_4__.populateNavBar)();\n\n\n\n\n\n//# sourceURL=webpack://package.json/./src/index.js?");

/***/ }),

/***/ "./src/projectitem.js":
/*!****************************!*\
  !*** ./src/projectitem.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeProjectItem\": () => (/* binding */ makeProjectItem),\n/* harmony export */   \"toggleComplete\": () => (/* binding */ toggleComplete),\n/* harmony export */   \"togglePriority\": () => (/* binding */ togglePriority),\n/* harmony export */   \"changeDetail\": () => (/* binding */ changeDetail),\n/* harmony export */   \"changeName\": () => (/* binding */ changeName)\n/* harmony export */ });\nlet projectItemMaker = (nameEntry, detailEntry, priorityEntry, dueDateEntry) => {\n    let projectItemName = nameEntry;\n    let detail = detailEntry;\n    let completed = false;\n    let priority = priorityEntry;\n    let dueDate = dueDateEntry;\n\n    function info() { \n        console.log(\"Item Info: \" + this.projectItemName + \" \" + this.detail + \" \" + this.completed + \" \" + this.priority);\n    }\n    return {projectItemName, detail, completed, priority, info, dueDate};\n};\n\n\n\nfunction toggleComplete (projectItem) // check or uncheck Item\n{ \n    if (projectItem.completed)\n    {\n    console.log(projectItem.completed);\n    projectItem.completed = false; \n    return console.log(\"changed it to false\")\n    }\n    else if (projectItem.completed == false)\n    {\n    console.log(\"Make true\");\n    projectItem.completed = true; \n    return console.log(\"changed It to true\"); \n    }\n}\n\n\n\nfunction togglePriority (projectItem, priorityEntry) // need to make basecases for no entry and exceptions?  \n{\n    console.log(projectItem.priority);\n    projectItem.priority = priorityEntry;\n    return console.log('Changed priority to ' + projectItem.priority);\n}\n\n\nfunction changeDetail (projectItem, newDetails) // need to make basecases for no entry and exceptions\n{\n    console.log(projectItem.detail);\n    projectItem.detail = newDetails;\n    return console.log(\"Changed Details to \" + projectItem.detail);\n}\n\nfunction changeName (projectItem, newName) // need to make basecases for no entry and exceptions\n{\n     console.log(projectItem.projectItemName);\n     projectItem.projectItemName = newName;\n    return console.log(\"Changed Name to \" + projectItem.projetItemName);\n} \n\nfunction makeProjectItem (name, detail, priority) \n    {\n    let item = projectItemMaker(name, detail, priority);\n    item.info();\n    return item;\n}\n\n\n// for date select. Also need to modify project Item once this has been finished. \nfunction selectDueDate (userInput)\n{\n   let dueDate = userInput; \n}\n\n\n\n//# sourceURL=webpack://package.json/./src/projectitem.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjectNames\": () => (/* binding */ getProjectNames),\n/* harmony export */   \"getCurrentProjectList\": () => (/* binding */ getCurrentProjectList),\n/* harmony export */   \"getCurrentProjectName\": () => (/* binding */ getCurrentProjectName),\n/* harmony export */   \"makeProject\": () => (/* binding */ makeProject),\n/* harmony export */   \"addProjectItem\": () => (/* binding */ addProjectItem),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"toggleProject\": () => (/* binding */ toggleProject),\n/* harmony export */   \"displayCurrentProject\": () => (/* binding */ displayCurrentProject),\n/* harmony export */   \"deleteProjectItem\": () => (/* binding */ deleteProjectItem)\n/* harmony export */ });\nlet projectsList = [];\nlet currentProject = \"None\"; // shows list of current project\nlet currentProjectTasks = \"None\"; // used for display currently selected project items\n\nlet projectsMaker = (nameEntry, descriptionEntry) => \n{\nlet projectName = nameEntry;\nlet description = descriptionEntry;\nlet listOfTasks = [];\nreturn {projectName, description, listOfTasks};\n};\n\nfunction displayProjects ()\n{\n    let displayProjectsList = projectsList;\n    console.log(displayProjectsList);\n    return displayProjectsList; //shows list of projects for testing \n}\n\nfunction getProjectNames ()\n{\n    let namesList = [];\n    let theProjects = projectsList; \n\n            for (let currentName = 0; currentName <= projectsList.length-1; currentName++)\n            {\n                console.log('making names list');\n                let projectName = theProjects[currentName].projectName;\n                namesList.push(projectName);\n            }\n\n    return namesList;\n}\n\n\nfunction getCurrentProjectList() // list of items in each proejct ?? ... same as whats underneath?? \n{\n    let allProjects = currentProjectTasks;\n    console.log(allProjects);\n    return allProjects;\n}\n\nfunction displayCurrentProject ()\n{\n    return console.log(currentProject); //shows currently toggled project\n}\n\nfunction getCurrentProjectName()\n{\n    if (currentProject == \"None\")\n    {\n        return \"nofutureprojects\";\n\n    }\n    else \n    {\n    console.log(currentProject);\n    console.log(currentProject.projectName);\n    let currentProjectName = currentProject.projectName;\n    return currentProjectName; // returns current project name\n    }\n}\n\nfunction deleteProject (userInput) \n{\n    for (let find = 0; find <= projectsList.length-1; find ++)\n    {\n        if (projectsList[find].projectName == userInput)\n        {\n            projectsList.splice(find, 1);\n            return true;\n        }\n        else\n        {\n            console.log('no match');\n        }\n    }\n    return false;\n}\n\n\nfunction makeProject (nameEntry, descriptionEntry) // may need to run a check to see if Name exists first\n{\n    projectsList.push(projectsMaker(nameEntry, descriptionEntry)); \n}\n\nfunction addProjectItem (projectItem)  // NEED TO ADD FOR IF THERE IS NO CURRENTLY SELECTED LIST! / nothing yet?\n{\n\n    currentProjectTasks.push(projectItem);\n}\n\nfunction toggleProject (projectName) // move to currently elected project may need global var to track\n{\n    // need a toggle for 0 projects??  need to initialize currentProejct tasks if first project selection\n//    let projectsList = [];\nif (projectsList.length == 0)\n{\n    console('should not be getting called failsafe');\n    return false;\n}\nelse \n{\n        for (let search = 0; search <= projectsList.length-1; search ++)\n        {\n            if (projectsList[search].projectName == projectName)\n            {\n                currentProject = projectsList[search];\n                currentProjectTasks = projectsList[search].listOfTasks;\n                console.log('toggled to:');\n                console.log(currentProject);\n                console.log(currentProjectTasks);\n                return true;\n            }\n            else \n            {\n                 console.log('not found keep going');\n            }\n        }\n}\n\n}\n\nfunction deleteProjectItem (projectItem) // searches through current projects list to delete\n{\n    for (let findName = 0; findName <= currentProjectTasks.length-1; findName ++)\n    {\n        if (currentProjectTasks[findName].projectItemName == projectItem.projectItemName)\n        {\n            currentProjectTasks.splice(findName, 1);\n        }\n        else\n        {\n            console.log('no match');\n        }\n    }\n\n    return console.log('did what could be done');\n}\n\n\n\n//# sourceURL=webpack://package.json/./src/projects.js?");

/***/ }),

/***/ "./src/screencontent.js":
/*!******************************!*\
  !*** ./src/screencontent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"populateNavBar\": () => (/* binding */ populateNavBar)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _dailyprojects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dailyprojects */ \"./src/dailyprojects.js\");\n\n // daily Task Items \n\nlet projectsToDisplay = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjectNames)(); //this will need to refresh;\nconst content = document.getElementById('content');\n\n\nconst navBarModule = (() => {\n    const content = document.getElementById('content');\n    let activeProjects = \"Created Projects\";\n    const createNavBar = () =>\n        {\n            // EDIT ADDING OF PROJECTS TO PROJECTS AFTER DAILY TASKS BUTTON USING ARRAY AND DOM\n            let navBar = document.createElement('nav');\n            navBar.className = \"nav-container\";\n            navBar.id = \"navbar\";\n\n            let projectLinksContainer = document.createElement('div');\n            projectLinksContainer.className = \"project-options-container\"\n            projectLinksContainer.id = \"projectLinks\";\n\n            let navHeader = document.createElement('div');\n            navHeader.id = \"navHeader\";\n            navHeader.className = \"nav-header\";\n            navHeader.textContent = \"Your Projects\";\n            projectLinksContainer.appendChild(navHeader);\n\n            let navSpacer = document.createElement('div');\n            navSpacer.className = \"nav-spacer\";\n            navSpacer.id = \"nav-spacer\";\n            projectLinksContainer.appendChild(navSpacer);\n\n\n\n\n            // Nav bar/Project buttons \n            let projectOptions = document.createElement('sl-button-group');\n            let addProject = document.createElement('sl-button');\n            addProject.setAttribute(\"type\", \"success\");  \n            addProject.addEventListener(\"click\", function()\n                {\n                let projectName = window.prompt(\"Project Name: \", \"myproject\"); // placeholder until UI is fully functional create stylized entry later\n                let projectDetails = window.prompt(\"Project Details:\", \"My details\");\n                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.makeProject) (projectName, projectDetails); //adds to project list\n                populateNavBar();       // puts back on nav bar\n                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.toggleProject)(projectName); // puts on correct project to add stuff\n                displayProject();\n\n                });\n            addProject.textContent = \"ADD\";\n            addProject.id = \"add-project\";\n            projectOptions.appendChild(addProject);\n\n            let removeProject = document.createElement('sl-button');\n            removeProject.setAttribute(\"type\", \"danger\");\n            removeProject.textContent = \"REMOVE\";\n            removeProject.id = \"remove-project\";\n            removeProject.addEventListener(\"click\", function()\n                {\n                let projectName = window.prompt(\"Enter Project NAME\", \"my deletion\"); // placeholder until mouse selectors are added\n                (0,_projects__WEBPACK_IMPORTED_MODULE_0__.deleteProject) (projectName); //deletets project ... need to add how to input\n                populateNavBar();  \n                alert(\"Delete stuffs\");\n                });\n            projectOptions.appendChild(removeProject);\n            projectLinksContainer.appendChild(projectOptions);\n\n            navBar.appendChild(projectLinksContainer);\n\n            activeProjects = document.createElement('div'); //create active projects section\n            activeProjects.className = \"active-projects-container\";\n            activeProjects.id =\"active-projects\";\n\n            let dailyProject = document.createElement('div'); // Daily Projects never leaves\n            dailyProject.className = \"active-project\";\n            dailyProject.textContent = \"Daily Tasks\";\n            activeProjects.appendChild(dailyProject);\n\n            navBar.appendChild(activeProjects); // append projects\n            content.appendChild(navBar);\n\n        }\n\n\n    const displayActiveProjects = () => \n    {\n                    // add all projects from projectList array ito active projects container here\n                for (let currentProject = 0; currentProject <= projectsToDisplay.length-1; currentProject++)\n                {\n                    let projectName = projectsToDisplay[currentProject];\n                    let displayProject = document.createElement('div');\n                    displayProject.className = \"active-project\";\n                    displayProject.textContent = projectName;\n                    displayProject.id = projectName;\n                   //displayProject.addEventListener(\"click\", function () {toggleProject(projectName)}); // pass project name to selector\n                    activeProjects.appendChild(displayProject);\n                }   \n    }\n\n    const clearProjectDisplay = () =>  // clear everything but daily Tasks from display\n    {\n        if (document.getElementById(\"active-projects\").childElementCount > 1 )\n        {\n            console.log(\"Deleted Items\");\n            while (document.getElementById(\"active-projects\").childElementCount > 1 )\n            {\n            document.getElementById(\"active-projects\").lastChild.remove();\n            }\n        }\n        else \n        {\n           return console.log('only daily tasks'); \n        }\n    } \n\n    return{createNavBar, displayActiveProjects, clearProjectDisplay};\n\n})();\n\nlet theNavBar = navBarModule.createNavBar();\n\n\n\n\nfunction populateNavBar () \n{\n    navBarModule.clearProjectDisplay();\n    projectsToDisplay = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjectNames)();\n    navBarModule.displayActiveProjects();\n}\n\n\n\n // turn createTaskList into module\n    const projectMenuModule = (() => \n    {\n\n        const projectHeadingDisplay = () =>\n        {\n        // EDIT TASKTEST and PROJECT TITLE TO populate TEXT / information utilizing arrays\n        let currentProject = document.createElement(\"div\");\n        currentProject.className = (\"project-name-display\");\n        currentProject.id = \"project-display\";\n            let projectTitle = document.createElement(\"div\");\n            let toggledProjectName = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getCurrentProjectName)();\n            let currentProjectTitle = \"Default\";\n            if (toggledProjectName == \"nofutureprojects\") // display default daily\n            {\n                currentProjectTitle = \"Daily Tasks\";\n            }\n            else\n            {\n                currentProjectTitle = toggledProjectName;\n            }\n\n\n            projectTitle.textContent = currentProjectTitle;\n            currentProject.appendChild(projectTitle);\n\n        \n\n        // project task buttons \n            let taskOptions = document.createElement('sl-button-group');\n            let addTask = document.createElement('sl-button');\n            addTask.setAttribute(\"type\", \"success\");\n\n\n            addTask.addEventListener(\"click\", function()\n            {\n                alert('does stuff');\n            });\n            addTask.textContent = \"ADD TASK\";\n            addTask.id = \"add-task\";\n            taskOptions.appendChild(addTask);\n\n            let removeTask = document.createElement('sl-button');\n            removeTask.setAttribute(\"type\", \"danger\");\n            removeTask.textContent = \"REMOVE TASK\";\n            removeTask.id = \"remove-task\";\n            removeTask.addEventListener(\"click\", function()\n            {\n                alert(\"Delete stuffs\");\n            });\n            taskOptions.appendChild(removeTask);\n\n            currentProject.appendChild(taskOptions);\n            content.appendChild(currentProject);\n\n        }  \n\n        const taskListDisplay = () => \n        {\n\n            let taskList = document.createElement('main');\n            taskList.className = \"task-container\";\n            taskList.id = \"task-list\";\n            content.appendChild(taskList);\n\n\n            let taskTest = document.createElement('div');\n            taskTest.className = \"\";\n            taskTest.textContent = \"Name: Billy, Details:  Status: \"; \n\n\n            taskList.appendChild(taskTest);\n            content.appendChild(taskList);\n        }\n\n\n        const clearDisplay = () =>\n        {\n        let projectHeader = document.getElementById('project-display');\n        let projectTasks = document.getElementById('task-list');\n        projectHeader.parentNode.removeChild(projectHeader);\n        projectTasks.parentNode.removeChild(projectTasks);\n        }\n\n\n        return {projectHeadingDisplay, taskListDisplay, clearDisplay}\n\n    }) ();\n\n\n    function displayProject() \n    {\n        projectMenuModule.clearDisplay();\n        projectMenuModule.projectHeadingDisplay();\n        projectMenuModule.taskListDisplay(); \n    }\nprojectMenuModule.projectHeadingDisplay(); // initial display\nprojectMenuModule.taskListDisplay();    // initial display\n\n\n\n\n\n\n//# sourceURL=webpack://package.json/./src/screencontent.js?");

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