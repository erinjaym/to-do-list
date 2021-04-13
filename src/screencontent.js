import {getCurrentProjectList, getProjectNames, makeProject, deleteProject} from './projects';
import {displayDailyProjects} from './dailyprojects'; // daily Task Items 

let projectsToDisplay = getProjectNames(); //this will need to refresh;
const content = document.getElementById('content');


const navBarModule = (() => {
    const content = document.getElementById('content');
    let activeProjects = "Created Projects";
    const createNavBar = () =>
        {
            // EDIT ADDING OF PROJECTS TO PROJECTS AFTER DAILY TASKS BUTTON USING ARRAY AND DOM
            let navBar = document.createElement('nav');
            navBar.className = "nav-container";
            navBar.id = "navbar";

            let projectLinksContainer = document.createElement('div');
            projectLinksContainer.className = "project-options-container"
            projectLinksContainer.id = "projectLinks";

            let navHeader = document.createElement('div');
            navHeader.id = "navHeader";
            navHeader.className = "nav-header";
            navHeader.textContent = "Your Projects";
            projectLinksContainer.appendChild(navHeader);

            let navSpacer = document.createElement('div');
            navSpacer.className = "nav-spacer";
            navSpacer.id = "nav-spacer";
            projectLinksContainer.appendChild(navSpacer);




            // Nav bar/Project buttons 
            let projectOptions = document.createElement('sl-button-group');
            let addProject = document.createElement('sl-button');
            addProject.setAttribute("type", "success");
            //addProject.onclick (makeProject(projectPopUp()));  
            addProject.addEventListener("click", function()
                {
                let projectName = window.prompt("Project Name: ", "myproject"); // placeholder until UI is fully functional create stylized entry later
                let projectDetails = window.prompt("Ptoject Details:", "My details");
                makeProject (projectName, projectDetails); //adds to project list
                populateNavBar();       // puts back on nav bar

                });
            addProject.textContent = "ADD";
            addProject.id = "add-project";
            projectOptions.appendChild(addProject);

            let removeProject = document.createElement('sl-button');
            removeProject.setAttribute("type", "danger");
            removeProject.textContent = "REMOVE";
            removeProject.id = "remove-project";
            removeProject.addEventListener("click", function()
                {
                let projectName = window.prompt("Enter Project NAME", "my deletion"); // placeholder until mouse selectors are added
                deleteProject (projectName); //deletets project ... need to add how to input
                populateNavBar();  
                alert("Delete stuffs");
                });
            projectOptions.appendChild(removeProject);
            projectLinksContainer.appendChild(projectOptions);

            navBar.appendChild(projectLinksContainer);

            activeProjects = document.createElement('div'); //create active projects section
            activeProjects.className = "active-projects-container";
            activeProjects.id ="active-projects";

            let dailyProject = document.createElement('div'); // Daily Projects never leaves
            dailyProject.className = "active-project";
            dailyProject.textContent = "Daily Tasks";
            activeProjects.appendChild(dailyProject);

            navBar.appendChild(activeProjects); // append projects
            content.appendChild(navBar);

        }


    const displayActiveProjects = () => 
    {
        console.log(projectsToDisplay);
        console.log('Display TEST');
                    // add all projects from projectList array ito active projects container here
                for (let currentProject = 0; currentProject <= projectsToDisplay.length-1; currentProject++)
                {
                    let projectName = projectsToDisplay[currentProject];
                    let displayProject = document.createElement('div');
                    displayProject.className = "active-project";
                    displayProject.textContent = projectName;
                    activeProjects.appendChild(displayProject);
                }   
    }

    const clearProjectDisplay = () =>  // clear everything but daily Tasks from display
    {
        if (document.getElementById("active-projects").childElementCount > 1 )
        {
            console.log("Deleted Items");
            while (document.getElementById("active-projects").childElementCount > 1 )
            {
            document.getElementById("active-projects").lastChild.remove();
            }
        }
        else 
        {
           return console.log('only daily tasks left'); 
        }
    } 

    return{createNavBar, displayActiveProjects, clearProjectDisplay};

})();

let theNavBar = navBarModule.createNavBar();




function populateNavBar () // need to re import project list before call 
{
    navBarModule.clearProjectDisplay();
    projectsToDisplay = getProjectNames();
    navBarModule.displayActiveProjects();
}


createTaskList();
    function createTaskList() 
    {

        // EDIT TASKTEST and PROJECT TITLE TO populate TEXT / information utilizing arrays
        let projectTitle = document.createElement("div");
        projectTitle.className = ("project-name-display");
        projectTitle.textContent = "TEST PROJECT";
        content.appendChild(projectTitle);

        let taskList = document.createElement('main');
        taskList.className = "task-container";
        taskList.id = "task-list";
        content.appendChild(taskList);


        let taskTest = document.createElement('div');
        taskTest.className = "";
        taskTest.textContent = "Name: Billy, Details:  Status: "; 


        taskList.appendChild(taskTest);
        content.appendChild(taskList);
    }



export {populateNavBar};