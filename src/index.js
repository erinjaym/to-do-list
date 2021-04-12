import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {getCurrentProjectName, getProjectNames, makeProject, toggleProject, addProjectItem, deleteProject, displayProjects, displayCurrentProject, deleteProjectItem} from './projects.js'
import {repopulateNavBar} from './screencontent.js';

//Project and dailyProject functionally now good to go 
let test = makeProject ("Name", "Details");

// toggle is currently manual
const Japanese = makeProjectItem("Japanese", "Learn all the Japanese", "High");
const Spanish = makeProjectItem("Spanish", "learn all the spanish", "Low" );
makeProject ("Name2", "Stuff");
const Peru = makeProjectItem("Peru", "learn all the spanish", "Low" );


displayProjects();
displayCurrentProject();
repopulateNavBar();



