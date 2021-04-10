import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem.js';
import {addDaily, deleteDaily, displayDailyProjects} from './dailyprojects.js'
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {addProject, deleteProject, displayProjects} from './projects.js'


const Japanese = makeDailyItem("Japanese", "Learn all the Japanese", "High");
const Spanish = makeDailyItem("Spanish", "learn all the spanish", "Low" );
const Peru = makeDailyItem("Peru", "learn all the spanish", "Low" );
const Sppp = makeDailyItem("Sppp", "learn all the spanish", "Low" );
const Gggg = makeDailyItem("Gggg", "learn all the spanish", "Low" );

addDaily(Japanese);
addDaily(Spanish);
addDaily(Peru);
addDaily(Sppp);
addDaily(Gggg);
Peru.info();
displayDailyProjects();

