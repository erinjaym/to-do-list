let projectsList = [];
let currentProject = "None";

let projectsMaker = (nameEntry, descriptionEntry) => 
{
let projectName = nameEntry;
let description = descriptionEntry;
let listOfTasks = [];
return {projectName, description, listOfTasks};
};


function displayProjects ()
{
    console.log(projectsList);
}

function displayCurrentProject ()
{
    console.log(currentProject); //shows currently toggled project list
}

function deleteProject (project) // need to add exception for list being empty
{
    for (let findName = 0; findName <= projectsList.length-1; findName ++)
    {
        if (projectsList[findName].projectName == project.projectName)
        {
            projectsList.splice(findName, 1);
        }
        else
        {
            console.log('no match');
        }
    }
    return console.log('did what could be done');
}


function makeProject (nameEntry, descriptionEntry) // may need to run a check to see if Name exists first
{
    projectsList.push(projectsMaker(nameEntry, descriptionEntry)); 
    // toggle current project by default
    // currentProject = projectsList.push(projectsMaker(nameEntry, descriptionEntry)); selection input
}

function addProjectItem (projectItem) //store projectName globaly on project selection .. push project item to it
{
    currentProject.push(projectItem);
}

function toggleProject (inputSelection) // move to currently elected project may need global var to track
{
    for (let search = 0; search <= projectsList.length-1; search ++)
    {
        if (projectsList[search].projectName == inputSelection)
        {
            console.log(projectsList[search]);
            currentProject = projectsList[search].listOfTasks;
        }
        else 
        {
            console.log('not found keep going');
        }
    }

    // currentProject = inputSelection;
}

export {makeProject, addProjectItem, deleteProject, displayProjects, toggleProject, displayCurrentProject};