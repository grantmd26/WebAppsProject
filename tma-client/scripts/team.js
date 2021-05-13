window.onload = homePage;

async function newTeam() {
    teamName = getTeamName();
    managerName = getManagerName();
    const url = `http://localhost:3000/api/team/new?teamName=${teamName}&manager=${managerName}`;
    const response = await fetch(url);
    const data = await response.json();
    teamID = data.teamID;
    console.log(teamID);
    await teamPage();
}

async function join(){
    teamID = getTeamID();
    const response = await fetch(`http://localhost:3000/api/team/${teamID}`);
    const data = await response.json();
    if(data.success){
        await teamPage();
    }
    else{
        homePage();
    }
}