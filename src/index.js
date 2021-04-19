import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {addProjectItem, makeProject, toggleProject} from './projects.js'
import {populateNavBar, displayProject} from './screencontent.js';

//Project and dailyProject functionally now good to go 

let Japanese = makeDailyItem("Japanese", "Japanese Stuff", "High");
let Programming = makeDailyItem("Programing", "Programming Stuff", "Med");
let Writing = makeDailyItem("Writing", "Writing Stuff", "Low");
addDaily(Japanese);
addDaily(Programming);
addDaily(Writing);


let exProject = makeProject("Example Project", "Project Details");
toggleProject("Example Project");
let exProjectTask = makeProjectItem ("Name", "Details", "Low", "YEP", "4/15/21");
let exProjectTask1 = makeProjectItem ("Take over world", "Obvious", "High", "NOPE", "2/22/22");
let exProjectTask2 = makeProjectItem ("Buy Pizza", "Yum", "High", "NOPE", "1/22/22");
addProjectItem(exProjectTask);
addProjectItem(exProjectTask1);
addProjectItem(exProjectTask2);


populateNavBar(); // screen content 
displayProject(); // screen content? 



