let projectItemMaker = (nameEntry, detailEntry, priorityEntry, dueDateEntry) => {
    let projectItemName = nameEntry;
    let detail = detailEntry;
    let completed = false;
    let priority = priorityEntry;
    let dueDate = dueDateEntry;

    function info() { 
        console.log("Item Info: " + this.projectItemName + " " + this.detail + " " + this.completed + " " + this.priority);
    }
    return {projectItemName, detail, completed, priority, info, dueDate};
};



function toggleComplete (projectItem) // check or uncheck Item
{ 
    if (projectItem.completed)
    {
    console.log(projectItem.completed);
    projectItem.completed = false; 
    return console.log("changed it to false")
    }
    else if (projectItem.completed == false)
    {
    console.log("Make true");
    projectItem.completed = true; 
    return console.log("changed It to true"); 
    }
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

function makeProjectItem (name, detail, priority) 
    {
    let item = projectItemMaker(name, detail, priority);
    item.info();
    return item;
}


// for date select. Also need to modify project Item once this has been finished. 
function selectDueDate (userInput)
{
   let dueDate = userInput; 
}

export {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName};