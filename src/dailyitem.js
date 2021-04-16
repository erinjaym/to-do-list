
let dailyItemMaker = (nameEntry, detailEntry, priorityEntry) => {
    let dailyName = nameEntry;
    let detail = detailEntry;
    let completed = "NOPE";
    let priority = priorityEntry;
    function sayName () {  // use for selection methods later ?? 
        return this.dailyName;
    }
    function info() { 
        console.log("Item Info: " + this.dailyName + " " + this.detail + " " + this.completed + " " + this.priority);
    }
    return {dailyName, detail, completed, priority, info, sayName};
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

function makeDailyItem (name, detail, priority) 
{
let daily = dailyItemMaker(name, detail, priority);
daily.info();
return daily;
}


export {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName};