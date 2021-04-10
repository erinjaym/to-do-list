import {makeDailyItem, toggleComplete, togglePriority, changeDetail, changeName} from './dailyitem.js';


alert('things will do soon');
const Japanese = makeDailyItem("Japanese", "Learn all the Japanese", "High");
toggleComplete(Japanese);
Japanese.info();
togglePriority(Japanese, "Med");
Japanese.info();
changeDetail(Japanese, "Forget it all!");
Japanese.info();
changeName(Japanese, "Spanish");
Japanese.info();