let dailyItemMaker = (nameEntry, detailEntry, priorityEntry) => {
    let dailyName = nameEntry;
    let detail = detailEntry;
    let completed = false;
    let priority = priorityEntry;

    function info() { 
        console.log("Item Info: " + this.dailyName + " " + this.detail + " " + this.completed + " " + this.priority);
    }
    return {dailyName, detail, completed, priority, info};
};

function toggleComplete (dailyItem) // check or uncheck Item
{ 
    if (dailyItem.completed)
    {
    console.log(dailyItem.completed);
    dailyItem.completed = false; 
    return console.log("changed it to falst")
    }
    else if (dailyItem.completed == false)
    {
    console.log("Make true");
    dailyItem.completed = true; 
    return console.log("changed It to true"); 
    }
}

function togglePriority (dailyItem, priorityEntry) // need to make basecases for no entry and exceptions?  
{
    console.log(dailyItem.priority);
    dailyItem.priority = priorityEntry;
    return console.log('Changed priority to ' + dailyItem.priority);
}


function changeDetail (dailyItem, newDetails) // need to make basecases for no entry and exceptions
{
    console.log(dailyItem.detail);
    dailyItem.detail = newDetails;
    return console.log("Changed Details to " + dailyItem.detail);
}

function changeName (dailyItem, newName) // need to make basecases for no entry and exceptions
{
     console.log(dailyItem.dailyName);
     dailyItem.dailyName = newName;
    return console.log("Changed Name to " + dailyItem.dailyName);
} 

function makeDailyItem (name, detail, priority) 
{
let daily = dailyItemMaker(name, detail, priority);
daily.info();
return daily;
}

export {makeDailyItem, toggleComplete, togglePriority, changeDetail, changeName};