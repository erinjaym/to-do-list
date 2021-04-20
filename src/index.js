import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {addProjectItem, makeProject, toggleProject} from './projects.js'
import {populateNavBar, displayProject} from './screencontent.js';
import {testStorage} from './storage';



//Project and dailyProject functionally now good to go 



populateNavBar(); // screen content 
displayProject(); // screen content? 



