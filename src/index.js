import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {makeProject, toggleProject, addProjectItem, deleteProject, displayProjects, displayCurrentProject} from './projects.js'

// testing projectList and projectItem Functionality. 
const Japanese = makeProjectItem("Japanese", "Learn all the Japanese", "High");
const Spanish = makeProjectItem("Spanish", "learn all the spanish", "Low" );
const Peru = makeProjectItem("Peru", "learn all the spanish", "Low" );
const Sppp = makeDailyItem("Sppp", "learn all the spanish", "Low" );
const Gggg = makeDailyItem("Gggg", "learn all the spanish", "Low" );

makeProject ("Test Project", "Description of Test project"); // toggle auto to made project?? 
displayProjects();
toggleProject("Test Project"); // changed to correct project in projects js manually for now to set up for event listeners
addProjectItem(Japanese);
addProjectItem(Peru);
displayProjects();
displayCurrentProject();

//addProjectItem();
// make project 
// toggle to project by tdefault afterwards
//make project item
// add item to toggled project

