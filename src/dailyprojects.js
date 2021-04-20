import {getDailyStorage} from './storage';

let dailyProjectsList = [];

function displayDailyProjects ()
{
    let dailyTaskDisplay = dailyProjectsList;
    return dailyTaskDisplay;
}

function deleteDaily (dailyItemName)
{
    for (let findName = 0; findName <= dailyProjectsList.length-1; findName ++)
    {
        if (dailyProjectsList[findName].dailyName == dailyItemName)
        {
            dailyProjectsList.splice(findName, 1);
            populateDailyStorage();
        }
        else
        {
            //console.log('nothing to delete!');
        }
    }
}

function addDaily (dailyItem)
{
    dailyProjectsList.push(dailyItem);
    populateDailyStorage();
}

function findDailyTask (dailyName)
{
    for (let itemSpot = 0; itemSpot <= dailyProjectsList.length-1; itemSpot++)
    {
        if(dailyProjectsList[itemSpot].dailyName == dailyName)
        {
            let dailyItem = dailyProjectsList[itemSpot];
            return dailyItem;
        }
        else
        {
            console.log("couldnt find it");
        }
    }
}


// for local storage
function populateDailyStorage ()
{
    localStorage.setItem("dailyArray", JSON.stringify(dailyProjectsList));
}

function addDailyFromStorage()
{
    let storedArray = getDailyStorage();
    for (let storedItem = 0; storedItem <= storedArray.length-1; storedItem++)
    {
        dailyProjectsList.push(storedArray[storedItem]);
    }
}


export {addDaily, deleteDaily, displayDailyProjects, findDailyTask, addDailyFromStorage};