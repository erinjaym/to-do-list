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

function displayProjects ()
{
    let displayProjectsList = projectsList;
    console.log(displayProjectsList);
    return displayProjectsList; //shows list of projects for testing 
}

function getProjectNames ()
{
    let namesList = [];
    let theProjects = projectsList; 
    if(projectsList.length == 0)
    {}
    else 
    {
         for (let currentName = 0; currentName <= projectsList.length-1; currentName++)
       {
           console.log('making names list');
            let projectName = theProjects[currentName].projectName;
            namesList.push(projectName);
        }
        return namesList;
    }
    return console.log("No projects Yet");
}


function getCurrentProjectList() // list of items in each proejct ?? ... same as whats underneath?? 
{
    let allProjects = currentProjectTasks;
    console.log(allProjects);
    return allProjects;
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

function addProjectItem (projectItem)  // NEED TO ADD FOR IF THERE IS NO CURRENTLY SELECTED LIST! / nothing yet?
{

    currentProjectTasks.push(projectItem);
}

function toggleProject (inputSelection) // move to currently elected project may need global var to track
{
    // need a toggle for 0 projects??  need to initialize currentProejct tasks if first project selection



    for (let search = 0; search <= projectsList.length-1; search ++)
    {
        if (projectsList[search].projectName == inputSelection)
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

function deleteProjectItem (projectItem) // searches through current projects list to delete
{
    for (let findName = 0; findName <= currentProjectTasks.length-1; findName ++)
    {
        if (currentProjectTasks[findName].projectItemName == projectItem.projectItemName)
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

export {getProjectNames, getCurrentProjectList, getCurrentProjectName, makeProject, addProjectItem, deleteProject, displayProjects, toggleProject, displayCurrentProject, deleteProjectItem};