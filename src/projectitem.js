let projectItemMaker = (nameEntry, detailEntry, priorityEntry, completionEntry, dueDateEntry) => {
    let projectItemName = nameEntry;
    let detail = detailEntry;
    let completed = completionEntry;
    let priority = priorityEntry;
    let dueDate = dueDateEntry;

    function info() { 
        console.log("Item Info: " + this.projectItemName + " " + this.detail + " " + this.completed + " " + this.priority);
    }
    return {projectItemName, detail, completed, priority, info, dueDate};
};



function toggleComplete (projectItem, status) // check or uncheck Item
{ 
    projectItem.completed = status;
    return console.log('changed status');
}



function togglePriority (projectItem, priorityEntry) // need to make basecases for no entry and exceptions?  
{
    console.log(projectItem.priority);
    projectItem.priority = priorityEntry;
    return console.log('Changed priority to ' + projectItem.priority);
}


function changeDetail (projectItem, newDetails) // need to make basecases for no entry and exceptions
{
    console.log(projectItem.detail);
    projectItem.detail = newDetails;
    return console.log("Changed Details to " + projectItem.detail);
}

function changeName (projectItem, newName) // need to make basecases for no entry and exceptions
{
     console.log(projectItem.projectItemName);
     projectItem.projectItemName = newName;
    return console.log("Changed Name to " + projectItem.projetItemName);
} 

function changeDueDate (projectItem, newDate)
{
    projectItem.dueDate = newDate;
    return console.log("Date Changed to :" + projectItem.dueDate);
}

function makeProjectItem (name, detail, priority, status, dueDate) 
    {
    let item = projectItemMaker(name, detail, priority, status, dueDate);
    return item;
}


// for date select. Also need to modify project Item once this has been finished. 
function selectDueDate (userInput)
{
   let dueDate = userInput; 
}

export {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName, changeDueDate};