import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {getCurrentProjectName, getProjectNames, makeProject, toggleProject, addProjectItem, deleteProject, displayProjects, displayCurrentProject, deleteProjectItem} from './projects.js'
import {populateNavBar} from './screencontent.js';

//Project and dailyProject functionally now good to go 




displayProjects(); // need to delete from projects now was initial testing before ui?
displayCurrentProject();
populateNavBar();



