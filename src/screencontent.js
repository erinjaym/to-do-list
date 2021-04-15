import {getCurrentProjectTaskList, getProjectNames, makeProject, deleteProject, toggleProject, getCurrentProjectName, getProjects, addProjectItem, deleteProjectItem} from './projects';
import {makeProjectItem, toggleComplete, togglePriority, changeDetail, changeName} from './projectitem.js';
import {displayDailyProjects, addDaily, deleteDaily} from './dailyprojects'; 
import {makeDailyItem, toggleDailyComplete, toggleDailyPriority, changeDailyDetail, changeDailyName} from './dailyitem';

let projectsToDisplay = getProjectNames(); 
const content = document.getElementById('content');
let selectedProject = "Daily Tasks";
let selectedTask = "Task Name";


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
            addProject.addEventListener("click", function createNewProject()
                {
                let projectName = window.prompt("Project Name: ", "myproject"); // placeholder until UI is fully functional create stylized entry later
                let projectDetails = window.prompt("Project Details:", "My details");
                makeProject (projectName, projectDetails); //adds to project list
            
                    if (selectedProject != projectName)
                    {
                        let lastProjectSelection = document.getElementById(selectedProject); //exception for deleted items?? 
                        lastProjectSelection.className = "active-project";
                        toggleProject(projectName); // toggles correct project in projects to add stuff
                        selectedProject = projectName;
                        displayProject();
                        populateNavBar();       

                    }
                    else  //just in case but should be impossible
                    {
                        toggleProject(projectName); // puts on correct project to add stuff
                        selectedProject = projectName;
                        displayProject();
                        populateNavBar();       
                    }
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
                deleteProject (selectedProject); 
                selectedProject = "Daily Tasks";
                let dailyRef = document.getElementById('Daily Tasks');
                dailyRef.className = "active-project-active";
                displayProject();
                populateNavBar();
                });
            projectOptions.appendChild(removeProject);
            projectLinksContainer.appendChild(projectOptions);

            navBar.appendChild(projectLinksContainer);

            activeProjects = document.createElement('div'); //create active projects section
            activeProjects.className = "active-projects-container";
            activeProjects.id ="active-projects";

            let dailyProject = document.createElement('div'); // Daily Projects never leaves
            dailyProject.className = "active-project-active";
            dailyProject.textContent = "Daily Tasks";
            let dailyProjectName = "Daily Tasks";
            dailyProject.id = dailyProjectName;
            dailyProject.addEventListener('click', function dailyActive()
            {
                if (selectedProject != dailyProjectName)
                {
                    let lastProjectSelection = document.getElementById(selectedProject); 
                    lastProjectSelection.className = "active-project";

                    selectedProject = dailyProjectName;
                    dailyProject.className = "active-project-active";
                    displayProject();
                }
                else
                {
                    dailyProject.className = "active-project-active";
                    selectedProject = dailyProjectName;
                    displayProject();
                }
            });
            activeProjects.appendChild(dailyProject);

            navBar.appendChild(activeProjects); // append projects
            content.appendChild(navBar);

        }


    const displayActiveProjects = () => 
    {
                    // add all projects from projectList array ito active projects container here
                for (let currentProject = 0; currentProject <= projectsToDisplay.length-1; currentProject++)
                {
                    let theProjectName = projectsToDisplay[currentProject];
                    let theProject = document.createElement('div');

                    if (selectedProject == theProjectName)
                    {
                        theProject.className = "active-project-active";
                    }
                    else 
                    {
                        theProject.className = "active-project";
                    }

                    theProject.textContent = theProjectName;
                    theProject.id = theProjectName;
                   //displayProject.addEventListener("click", function () {toggleProject(projectName)}); // pass project name to selector
                    theProject.addEventListener('click', function projectActive()
                    {
                        if (selectedProject != theProjectName)
                        {
                            let lastProjectSelection = document.getElementById(selectedProject); //exception for deleted items?? 
                            lastProjectSelection.className = "active-project";
                            
                            toggleProject(theProjectName); 
                            selectedProject = theProjectName;
                            theProject.className = "active-project-active";
                            displayProject();
                        }
                        else
                        {
                            theProject.className = "active-project-active";
                            toggleProject(theProjectName); 
                            selectedProject = theProjectName;
                            displayProject();
                        }

                    });

                    activeProjects.appendChild(theProject);
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
           return console.log('only daily tasks'); 
        }
    } 

    return{createNavBar, displayActiveProjects, clearProjectDisplay};

})();

let theNavBar = navBarModule.createNavBar();




function populateNavBar () 
{
    navBarModule.clearProjectDisplay();
    projectsToDisplay = getProjectNames();
    navBarModule.displayActiveProjects();
}




    const projectMenuModule = (() => 
    {

        const projectHeadingDisplay = () =>
        {

            if (selectedProject == "Daily Tasks") // populate daily project information in display 
            {
                //populate name header
                let currentProject = document.createElement("div");
                currentProject.className = ("project-name-display");
                currentProject.id = "project-display";
                    let projectTitle = document.createElement("div");
                    projectTitle.textContent = "Daily Tasks";
                    currentProject.appendChild(projectTitle);
                    
                    function blurBackground () // move this function to a different area? 
                    {
                        let nav = document.getElementById('navbar');
                        let projectInfo = document.getElementById('project-display'); 
                        let taskInfo = document.getElementById('task-container');// navbar // project-display //task-container ?? 
                            nav.className = "nav-container-blur"; 
                            taskInfo.className = "task-container-blur";
                            projectInfo.className = "project-name-display-blur";
                    }
                        

                    function createEditTaskWindowPopUp() // change to create editTask POP up here using html template
                    {
                        
                        let taskWindow = document.createElement('sl-dialog');
                            taskWindow.setAttribute("label", "Task Edit");  // edit display name later ? 
                            taskWindow.textContent = 'Read and click stuff here';
                            taskWindow.className = "task-window";
                        // taskWindow.id = "edit-task-window";
                        let submitButton = document.createElement('sl-button');
                            submitButton.textContent = 'Submit Changes';
                            submitButton.setAttribute("type", "primary");
                            submitButton.setAttribute("slot", "footer");
                            taskWindow.appendChild(submitButton);
                        let theCloseButton = document.createElement('sl-button');
                            theCloseButton.setAttribute("slot", "footer");
                            theCloseButton.textContent = 'Cancel';
                            theCloseButton.setAttribute('type', "danger");
                            theCloseButton.addEventListener('click', () => document.querySelector("sl-dialog").hide() );
                            taskWindow.appendChild(theCloseButton);
                            
                            content.appendChild(taskWindow); 
                    }



                createDailyTaskButtons();
                function createDailyTaskButtons () // populate daily task buttons
                { 
                    let taskOptions = document.createElement('sl-button-group');
                    let addTask = document.createElement('sl-button');
                        addTask.setAttribute("type", "success");
                        addTask.textContent = "ADD TASK";
                        addTask.id = "add-task";
                        addTask.addEventListener("click", function()
                        {
                        let taskName = window.prompt("Enter DAILY TASK", "My TASK");
                        let taskDetails = window.prompt("Enter Details", "My Details");
                        let taskPriority = window.prompt("Enter priority", "MED");
                        let newTask = makeDailyItem(taskName, taskDetails, taskPriority);
                        addDaily(newTask);
                        displayProject();
                        });
                    taskOptions.appendChild(addTask);
        
                    let editTask = document.createElement('sl-button');
                        editTask.setAttribute("type", "warning");
                        editTask.textContent = "EDIT";
                        editTask.id = "edit-task";
                        editTask.addEventListener ("click", () => {
                            let taskPopUp = document.getElementById('tasks-edit-popup');
                            taskPopUp.style.display = "grid";
                            blurBackground ();
                            });
                    taskOptions.appendChild(editTask);

                    let removeTask = document.createElement('sl-button');
                        removeTask.setAttribute("type", "danger");
                        removeTask.textContent = "REMOVE TASK";
                        removeTask.id = "remove-task";
                        removeTask.addEventListener("click", function removeTask()
                        {
                        let dailyName = selectedTask;
                        deleteDaily(dailyName);
                        displayProject();
                        });
                    
                    taskOptions.appendChild(removeTask);
        
                    currentProject.appendChild(taskOptions);
                }

                content.appendChild(currentProject);

            }

            else //populate project information 
            {
                let currentProject = document.createElement("div");
                currentProject.className = ("project-name-display");
                currentProject.id = "project-display";
                    let projectTitle = document.createElement("div");
                    let toggledProjectName = getCurrentProjectName();
                    let currentProjectTitle = "Default";
                    if (toggledProjectName == "nofutureprojects") // display default daily
                    {
                        currentProjectTitle = "Daily Tasks"; // base case 
                    }
                    else
                    {
                        currentProjectTitle = toggledProjectName;
                    }
        
                    projectTitle.textContent = currentProjectTitle;
                    currentProject.appendChild(projectTitle);

                createProjectTaskButtons();
                function createProjectTaskButtons () 
                {
                // project task buttons
                    let taskOptions = document.createElement('sl-button-group');
                    let addTask = document.createElement('sl-button');
                        addTask.setAttribute("type", "success");
                        addTask.addEventListener("click", function()
                        {
                        let taskName = window.prompt("Enter DAILY TASK", "My TASK");
                        let taskDetails = window.prompt("Enter Details", "My Details");
                        let taskPriority = window.prompt("Enter priority", "MED");
                        let newTask = makeProjectItem(taskName, taskDetails, taskPriority);
                        addProjectItem(newTask); 
                        displayProject();
                        });
                        addTask.textContent = "ADD TASK";
                        addTask.id = "add-task";
                    taskOptions.appendChild(addTask);

                    let editTask = document.createElement('sl-button');
                        editTask.setAttribute("type", "warning");
                        editTask.textContent = "EDIT";
                        editTask.id = "edit-task";
                        editTask.addEventListener ("click", function()
                        {alert('stuff happens');
                        }); // need to edit to make up for fact dialog isnt here
                    taskOptions.appendChild(editTask);
        
                    let removeTask = document.createElement('sl-button');
                        removeTask.setAttribute("type", "danger");
                        removeTask.textContent = "REMOVE TASK";
                        removeTask.id = "remove-task";
                        removeTask.addEventListener("click", function()
                        {
                        deleteProjectItem(selectedTask); 
                        displayProject();
                        });
                    taskOptions.appendChild(removeTask);
        
                    currentProject.appendChild(taskOptions);
                } // project task buttons function end

                content.appendChild(currentProject);
            }
        }  // end of heading display

        const taskListDisplay = () => 
        {

            let taskListContainer = document.createElement('main');
            taskListContainer.className = "task-container";
            taskListContainer.id = "task-container";
            content.appendChild(taskListContainer);

            let taskList = document.createElement('table');
            taskList.className = "task-table";
            taskList.id = "task-table";

            if (selectedProject == "Daily Tasks") // populate daily project information in display 
            {

                let tableHeader = document.createElement('tr');
                tableHeader.className = "table-header";
                tableHeader.id = "table-headers";
                    let tableHeading1 = document.createElement('th');
                        tableHeading1.textContent = "Name";
                    let tableHeading2 = document.createElement('th');
                        tableHeading2.textContent = "Details";
                    let tableHeading3 = document.createElement('th');
                        tableHeading3.textContent = "Priority";
                    let tableHeading4 = document.createElement('th');
                        tableHeading4.textContent = "Status";

                    tableHeader.appendChild(tableHeading1);
                    tableHeader.appendChild(tableHeading2);
                    tableHeader.appendChild(tableHeading3);
                    tableHeader.appendChild(tableHeading4);
                taskList.appendChild(tableHeader);

                // table for dailyItems 
                let inputArray = displayDailyProjects();

                for (let arraySpot = 0; arraySpot <= inputArray.length-1; arraySpot ++)
                {
                    let tableContent = document.createElement('tr');
                    let taskName = inputArray[arraySpot].dailyName; 
                    tableContent.id = taskName;
                    addTaskListeners();
                    function addTaskListeners () 
                    { 
                        tableContent.addEventListener("click", function selectTask() // add task selection event listener
                            {
                                let tableRow = document.getElementById(taskName);

                                if (selectedTask != taskName)
                                { 
                                    if (document.getElementById(selectedTask)) // if found
                                    {
                                    let oldTaskSelection = document.getElementById(selectedTask); 
                                    oldTaskSelection.className = "tr"; // deselect old first on dom then select new
                                    selectedTask = taskName;
                                    tableRow.className = "tr-selected";
                                    }
                                    else // just select new
                                    {
                                    selectedTask = taskName;
                                    tableRow.className = "tr-selected";
                                    }
                                }
                                else // if same make sure selection is made
                                {
                                    tableRow.className = "tr-selected";
                                    selectedTask = taskName;
                                }
                            });
                    }
                    

                    for (let tableData = 0; tableData <= 3; tableData++)
                    {
                        if (tableData == 0)
                            {
                                let taskName = document.createElement('td');
                                taskName.textContent = inputArray[arraySpot].dailyName;
                                tableContent.appendChild(taskName);
                            }
                        else if (tableData == 1)
                            {
                                let taskDetails = document.createElement('td');
                                taskDetails.textContent = inputArray[arraySpot].detail;
                                tableContent.appendChild(taskDetails);
                            }
                        else if (tableData == 2)
                            {
                                let taskPriority = document.createElement('td');
                                taskPriority.textContent = inputArray[arraySpot].priority;
                                tableContent.appendChild(taskPriority);
                            }
                        else if (tableData == 3)
                            {
                                let taskStatus = document.createElement('td');
                                taskStatus.textContent = inputArray[arraySpot].completed;
                                tableContent.appendChild(taskStatus);
                            }
                        else {} // basecase
                    }
                    taskList.appendChild(tableContent);
            
                }
                taskListContainer.appendChild(taskList);
            }
        
            else //selectedProject != "Daily Tasks" for project task display
            {

                let tableHeader = document.createElement('tr');
                tableHeader.className = "table-header";
                tableHeader.id = "table-headers";
                    let tableHeading1 = document.createElement('th');
                        tableHeading1.textContent = "Name";
                    let tableHeading2 = document.createElement('th');
                        tableHeading2.textContent = "Details";
                    let tableHeading3 = document.createElement('th');
                        tableHeading3.textContent = "Priority";
                    let tableHeading4 = document.createElement('th');
                        tableHeading4.textContent = "Status";
                    let tableHeading5 = document.createElement('th');
                        tableHeading5.textContent = "Due Date";

                    tableHeader.appendChild(tableHeading1);
                    tableHeader.appendChild(tableHeading2);
                    tableHeader.appendChild(tableHeading3);
                    tableHeader.appendChild(tableHeading4);
                    tableHeader.appendChild(tableHeading5);
                taskList.appendChild(tableHeader);

                // table for projectItems 
                let inputArray = getCurrentProjectTaskList();
                console.log(inputArray);

                for (let arraySpot = 0; arraySpot <= inputArray.length-1; arraySpot ++)
                {
                    let tableContent = document.createElement('tr');

                    let taskName = inputArray[arraySpot].projectItemName; 
                    tableContent.id = taskName;

                    addProjectTaskListeners();
                    function addProjectTaskListeners () 
                    {
                        tableContent.addEventListener("click", function selectProjecetTask() // add task selection event listener
                            {
                                console.log(selectedTask);
                            let tableRow = document.getElementById(taskName);
                                if (selectedTask != taskName)
                                { 
                                    if (document.getElementById(selectedTask)) // if found
                                    {
                                        let oldTaskSelection = document.getElementById(selectedTask); 
                                        oldTaskSelection.className = "tr"; // deselect old first on dom then select new
                                        selectedTask = taskName;
                                        tableRow.className = "tr-selected";
                                    }
                                    else // just select new
                                    {
                                        selectedTask = taskName;
                                        tableRow.className = "tr-selected";
                                    }
                                }
                                else // if same make sure selection is made
                                {
                                    tableRow.className = "tr-selected";
                                    selectedTask = taskName;
                                }
                            });
                    }


                    for (let tableData = 0; tableData <= 4; tableData++)
                    {
                        if (tableData == 0)
                            {
                                let taskName = document.createElement('td');
                                taskName.textContent = inputArray[arraySpot].projectItemName;
                                tableContent.appendChild(taskName);
                            }
                        else if (tableData == 1)
                            {
                                let taskDetails = document.createElement('td');
                                taskDetails.textContent = inputArray[arraySpot].detail;
                                tableContent.appendChild(taskDetails);
                            }
                        else if (tableData == 2)
                            {
                                let taskPriority = document.createElement('td');
                                taskPriority.textContent = inputArray[arraySpot].priority;
                                tableContent.appendChild(taskPriority);
                            }
                        else if (tableData == 3)
                            {
                                let taskStatus = document.createElement('td');
                                taskStatus.textContent = inputArray[arraySpot].completed;
                                tableContent.appendChild(taskStatus);
                            }
                        else if (tableData == 4) 
                            {
                                let taskStatus = document.createElement('td');
                                taskStatus.textContent = inputArray[arraySpot].dueDate;
                                tableContent.appendChild(taskStatus);
                            } 
                        else {} // bascase
                    }
                    taskList.appendChild(tableContent);
            
                }
                taskListContainer.appendChild(taskList);


            } // end of else statement for project task display
        } // end of taskListDisplay



        const clearDisplay = () => // refreshes projects and tasks bar ... not an more
        {   

            let projectHeader = document.getElementById('project-display');
            projectHeader.parentNode.removeChild(projectHeader); 

            if (document.getElementById('task-container'))
            {
            let projectTasks = document.getElementById('task-container'); 
            projectTasks.parentNode.removeChild(projectTasks); 
            }
            else
            {
                console.log('no tasks to remove');
            }
        }


        return {projectHeadingDisplay, taskListDisplay, clearDisplay}

    }) ();

    function displayProject() // to add exception for when there are no projects left to delete that will just stay displaying daily
    {

        projectMenuModule.clearDisplay(); // clear old project display
        projectMenuModule.projectHeadingDisplay(); // display currently toggled project
        projectMenuModule.taskListDisplay(); // display currently toggled projects task list
    }

projectMenuModule.projectHeadingDisplay(); // initial display
//projectMenuModule.taskListDisplay();    // initial display





export {populateNavBar, displayProject};