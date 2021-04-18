let projectsList = [];
let currentProject = "None"; // shows list of current project
let currentProjectTasks = "None"; // used for display currently selected project items

let projectsMaker = (nameEntry, descriptionEntry) => 
{
let projectName = nameEntry;
let description = descriptionEntry;
let listOfTasks = [];
return {projectName, description, listOfTasks};
};

function getProjects ()
{
    let theProjects = projectsList;
    return theProjects; //shows list of projects for testing 
}

function getProjectNames ()
{
    let namesList = [];
    let theProjects = projectsList; 

            for (let currentName = 0; currentName <= projectsList.length-1; currentName++)
            {
                console.log('making names list');
                let projectName = theProjects[currentName].projectName;
                namesList.push(projectName);
            }

    return namesList;
}


function getCurrentProjectTaskList() // list of items in each proejct ?? ... same as whats underneath?? 
{
    let allProjects = currentProjectTasks;
    return allProjects;
}

function displayCurrentProject ()
{
    return currentProject; //shows currently toggled project
}

function getCurrentProjectName()
{
    if (currentProject == "None")
    {
        return "nofutureprojects";

    }
    else 
    {
    let currentProjectName = currentProject.projectName;
    return currentProjectName; // returns current project name
    }
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
            console.log('delete no match');
        }
    }
    return false;
}


function makeProject (nameEntry, descriptionEntry) // may need to run a check to see if Name exists first
{
    projectsList.push(projectsMaker(nameEntry, descriptionEntry)); 
}

function addProjectItem (projectItem)  // NEED TO ADD FOR IF THERE IS NO CURRENTLY SELECTED LIST! / nothing yet?
{
    currentProjectTasks.push(projectItem);
}

function toggleProject (projectName) // move to currently elected project may need global var to track
{
    // need a toggle for 0 projects??  need to initialize currentProejct tasks if first project selection
//    let projectsList = [];
if (projectsList.length == 0)
{
    console('should not be getting called failsafe');
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
                console.log('toggled to:');
                console.log(currentProject);
                console.log(currentProjectTasks);
                return true;
            }
            else 
            {
                 console.log('not found keep going');
            }
        }
}

}

function deleteProjectItem (projectItemName) // searches through current projects list to delete
{
    for (let findName = 0; findName <= currentProjectTasks.length-1; findName ++)
    {
        if (currentProjectTasks[findName].projectItemName == projectItemName)
        {
            currentProjectTasks.splice(findName, 1);
        }
        else
        {
            console.log('no match');
        }
    }

    return console.log('did what could be done');
}

function findProjectItem (projectItemName) // searches through current projects list to delete
{
    for (let findName = 0; findName <= currentProjectTasks.length-1; findName ++)
    {
        if (currentProjectTasks[findName].projectItemName == projectItemName)
        {
            return currentProjectTasks[findName];
        }
        else
        {
            console.log('no match');
        }
    }

    return console.log('did what could be done');
}


export {findProjectItem, getProjectNames, getCurrentProjectTaskList, getCurrentProjectName, makeProject, addProjectItem, deleteProject, getProjects, toggleProject, displayCurrentProject, deleteProjectItem};