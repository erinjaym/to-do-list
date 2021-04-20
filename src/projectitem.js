let projectItemMaker = (nameEntry, detailEntry, priorityEntry, completionEntry, dueDateEntry) => {
    let projectItemName = nameEntry;
    let detail = detailEntry;
    let completed = completionEntry;
    let priority = priorityEntry;
    let dueDate = dueDateEntry;

    return {projectItemName, detail, completed, priority, dueDate};
};

function toggleComplete (projectItem, status)
{ 
    projectItem.completed = status;
}

function togglePriority (projectItem, priorityEntry)
{
    projectItem.priority = priorityEntry;
}

function changeDetail (projectItem, newDetails)
{
    projectItem.detail = newDetails;
}

function changeName (projectItem, newName)
{
     projectItem.projectItemName = newName;
} 

function changeDueDate (projectItem, newDate)
{
    projectItem.dueDate = newDate;
}

function makeProjectItem (name, detail, priority, status, dueDate) 
{
    let item = projectItemMaker(name, detail, priority, status, dueDate);
    return item;
}

export {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName, changeDueDate};