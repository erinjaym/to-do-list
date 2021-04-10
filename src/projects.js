let projectsList = [];

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


function addProject (nameEntry, descriptionEntry) // may need to run a check to see if Name exists first
{
    projectsList.push(projectsMaker(nameEntry, descriptionEntry));
}

function addprojectItem (projectName, projectItem)
{

}

export {addProject, deleteProject, displayProjects};