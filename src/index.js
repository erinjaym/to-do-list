import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {getCurrentProjectName, makeProject, toggleProject, addProjectItem, deleteProject, displayProjects, displayCurrentProject, deleteProjectItem} from './projects.js'
import './screencontent.js';
//Project and dailyProject functionally now good to go 
const Japanese = makeProjectItem("Japanese", "Learn all the Japanese", "High");
const Spanish = makeProjectItem("Spanish", "learn all the spanish", "Low" );
const Peru = makeProjectItem("Peru", "learn all the spanish", "Low" );
const Sppp = makeDailyItem("Sppp", "learn all the spanish", "Low" );
const Gggg = makeDailyItem("Gggg", "learn all the spanish", "Low" );


