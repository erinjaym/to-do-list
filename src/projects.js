let projectsList = [];
let currentProject = "None"; // shows list of current project
let currentProjectList = "None";

let projectsMaker = (nameEntry, descriptionEntry) => 
{
let projectName = nameEntry;
let description = descriptionEntry;
let listOfTasks = [];
return {projectName, description, listOfTasks};
};

function displayProjects ()
{
    return console.log(projectsList); //shows list of projects
}

function displayCurrentProjectList()
{
    return console.log(currentProjectList); //shows currently toggled project list
}

function displayCurrentProject ()
{
    return console.log(currentProject); //shows currently toggled project
}

function getCurrentProjectName()
{
    return console.log(currentProject.projectName); // returns current project name
}

function deleteProject (userInput) 
{
    for (let find = 0; find <= projectsList.length-1; find ++)
    {
        if (projectsList[find].projectName == userInput)
        {
            projectsList.splice(find, 1);
            return true;
        }
        else
        {
            console.log('no match');
        }
    }
    return false;
}


function makeProject (nameEntry, descriptionEntry) // may need to run a check to see if Name exists first
{
    projectsList.push(projectsMaker(nameEntry, descriptionEntry)); 
}

function addProjectItem (projectItem) 
{
    currentProjectList.push(projectItem);
}

function toggleProject (inputSelection) // move to currently elected project may need global var to track
{
    for (let search = 0; search <= projectsList.length-1; search ++)
    {
        if (projectsList[search].projectName == inputSelection)
        {
            currentProject = projectsList[search];
            currentProjectList = projectsList[search].listOfTasks;
            return true;
        }
        else 
        {
           // console.log('not found keep going');
        }
    }

}

function deleteProjectItem (projectItem) // searches through current projects list to delete
{
    for (let findName = 0; findName <= currentProjectList.length-1; findName ++)
    {
        if (currentProjectList[findName].projectItemName == projectItem.projectItemName)
        {
            currentProjectList.splice(findName, 1);
        }
        else
        {
            console.log('no match');
        }
    }

    return console.log('did what could be done');
}

export {getCurrentProjectName, makeProject, addProjectItem, deleteProject, displayProjects, toggleProject, displayCurrentProject, deleteProjectItem};