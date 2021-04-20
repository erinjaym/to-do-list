let dailyItemMaker = (nameEntry, detailEntry, priorityEntry, status) => {
    let dailyName = nameEntry;
    let detail = detailEntry;
    let priority = priorityEntry;
    let completed = status;

    return {dailyName, detail, completed, priority};
};

function toggleDailyComplete (dailyItem, status)
{ 
    dailyItem.completed = status;
}

function toggleDailyPriority (dailyItem, priorityEntry)
{
    dailyItem.priority = priorityEntry;
}


function changeDailyDetail (dailyItem, newDetails)
{
    dailyItem.detail = newDetails;
}

function changeDailyName (dailyItem, newName)
{
     dailyItem.dailyName = newName;
} 

function makeDailyItem (name, detail, priority, status) 
{
let daily = dailyItemMaker(name, detail, priority, status);
return daily;
}

export {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName};