window.onload = homePage;

async function newTeam() {
    teamName = getTeamName();
    managerName = getManagerName();
    const url = `http://localhost:3001/api/team/new?teamName=${teamName}&manager=${managerName}`;
    const response = await fetch(url);
    const data = await response.json();
    teamID = data.teamID;
    console.log(teamID);
    await teamPage();
}

async function join(){
    teamID = getTeamID();
    const response = await fetch(`http://localhost:3001/api/team/${teamID}`);
    const data = await response.json();
    if(data.success){
        await teamPage();
    }
    else{
        homePage();
    }
}

async function addRoster() {
    teamRoster = getRoster();
    const response = await fetch(`http://localhost:3001/api/team/roster?id=${teamID}&player=${teamRoster}`);
    const data = await response.json();
    console.log(data);
    if(data.success){
        rosterPage();
    }
    else{
        rosterPage();
    }
}

async function getListItems(){
    let li = ''
    const response = await fetch(`http://localhost:3001/api/team/${teamID}`);
    const data = await response.json()
    for (let i of data.roster){
        li += `<li>${i}</li>`
    }
    return li;
}