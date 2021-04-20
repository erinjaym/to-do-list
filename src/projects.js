import {getProjectStorage} from './storage';

let projectsList = [];
let currentProject = "None";
let currentProjectTasks = "None";

let projectsMaker = (nameEntry, descriptionEntry) => 
{
    let projectName = nameEntry;
    let description = descriptionEntry;
    let listOfTasks = [];
    return {projectName, description, listOfTasks};
};

function getProjectNames ()
{
    let namesList = [];
    let theProjects = projectsList; 

            for (let currentName = 0; currentName <= projectsList.length-1; currentName++)
            {
                let projectName = theProjects[currentName].projectName;
                namesList.push(projectName);
            }
    return namesList;
}


function getCurrentProjectTaskList()
{
    let allProjects = currentProjectTasks;
    return allProjects;
}


function getCurrentProjectName()
{
    if (currentProject == "None")
    {
        return "None";
    }
    else 
    {
    let currentProjectName = currentProject.projectName;
    return currentProjectName;
    }
}

function deleteProject (userInput) 
{
    for (let find = 0; find <= projectsList.length-1; find ++)
    {
        if (projectsList[find].projectName == userInput)
        {
            projectsList.splice(find, 1);
            populateDailyStorage();
            return true;
        }
        else
        {
            //console.log('nothing to delete');
        }
    }
    return false;
}

function makeProject (nameEntry, descriptionEntry)
{
    projectsList.push(projectsMaker(nameEntry, descriptionEntry));
    populateDailyStorage(); 
}

function addProjectItem (projectItem) 
{
    currentProjectTasks.push(projectItem);
    populateDailyStorage();
}

function toggleProject (projectName) // move to currently elected project
{
    if (projectsList.length == 0)
    {
    return false;
    }
    else 
    {
        for (let search = 0; search <= projectsList.length-1; search ++)
        {
            if (projectsList[search].projectName == projectName)
            {
                currentProject = projectsList[search];
                currentProjectTasks = projectsList[search].listOfTasks;
                return true;
            }
            else 
            {
                // console.log('not found keep going');
            }
        }
    }

}

function deleteProjectItem (projectItemName) 
{
    for (let findName = 0; findName <= currentProjectTasks.length-1; findName ++)
    {
        if (currentProjectTasks[findName].projectItemName == projectItemName)
        {
            currentProjectTasks.splice(findName, 1);
            populateDailyStorage();
        }
        else
        {
           // console.log('no match');
        }
    }
}

function findProjectItem (projectItemName)
{
    for (let findName = 0; findName <= currentProjectTasks.length-1; findName ++)
    {
        if (currentProjectTasks[findName].projectItemName == projectItemName)
        {
            return currentProjectTasks[findName];
        }
        else
        {
          //  console.log('no match');
        }
    }
}


// for local storage
function addProjectsFromStorage() 
{
    let storedArray = getProjectStorage();
    for (let storedItem = 0; storedItem <= storedArray.length-1; storedItem++)
    {
        projectsList.push(storedArray[storedItem]);
    }
}

function populateDailyStorage ()
{
    localStorage.setItem("projectsArray", JSON.stringify(projectsList));
}

export {addProjectsFromStorage, findProjectItem, getProjectNames, getCurrentProjectTaskList, getCurrentProjectName, makeProject, addProjectItem, deleteProject, toggleProject, deleteProjectItem};