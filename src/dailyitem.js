
let dailyItemMaker = (nameEntry, detailEntry, priorityEntry, status) => {
    let dailyName = nameEntry;
    let detail = detailEntry;
    let priority = priorityEntry;
    let completed = status;

    return {dailyName, detail, completed, priority};
};

function toggleDailyComplete (dailyItem, status) // check or uncheck Item
{ 
    dailyItem.completed = status;
    let check = dailyItem.completed;
     console.log('Changed TO :' + check);
}

function toggleDailyPriority (dailyItem, priorityEntry) // need to make basecases for no entry and exceptions?  
{
    console.log(dailyItem.priority);
    dailyItem.priority = priorityEntry;
    return console.log('Changed priority to ' + dailyItem.priority);
}


function changeDailyDetail (dailyItem, newDetails) // need to make basecases for no entry and exceptions
{
    console.log(dailyItem.detail);
    dailyItem.detail = newDetails;
    return console.log("Changed Details to " + dailyItem.detail);
}

function changeDailyName (dailyItem, newName) // need to make basecases for no entry and exceptions
{
     console.log(dailyItem.dailyName);
     dailyItem.dailyName = newName;
    return console.log("Changed Name to " + dailyItem.dailyName);
} 

function makeDailyItem (name, detail, priority, status) 
{
let daily = dailyItemMaker(name, detail, priority, status);
return daily;
}


export {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName};