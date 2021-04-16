let dailyProjectsList = [];

function displayDailyProjects ()
{
    //had console log to display replaced with this for time being
    let dailyTaskDisplay = dailyProjectsList;
    return dailyTaskDisplay;
}

function deleteDaily (dailyItemName) // need to add exception for list being empty 
{
    for (let findName = 0; findName <= dailyProjectsList.length-1; findName ++)
    {
        if (dailyProjectsList[findName].dailyName == dailyItemName)
        {
            dailyProjectsList.splice(findName, 1);
        }
        else
        {
            console.log('no match');
        }
    }

    return console.log('did what could be done');
}

function addDaily (dailyItem) // may need to run a check to see if Name exists first
{
    dailyProjectsList.push(dailyItem);
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


export {addDaily, deleteDaily, displayDailyProjects, findDailyTask};