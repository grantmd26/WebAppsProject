const homePage = function () {
    const view = document.getElementById('view');
    const html = `<div class='container h-100 w-100 flex-column p-3'>
                    <div class='jumbotron'>
                        <h1 class='display-1 p-3'>Managr</h1>
                        <br>
                        <p>
                            Welcome to Managr! A team management application aimed at helping your recreational sports team stay up to date on current announcements, schedules, and rosters. Create a new team today or join an existing team below. 
                        </p>
                        <hr class='my-4'>
                        <div class='container d-flex p-3 justify-content-center'>
                            <div class='p-3'>
                                <button class='btn bg-dark text-light' id='create-team-button'> Create New Team</button>
                                <br>
                            </div>
                            <div class='p-3'>                    
                                <button class='btn bg-dark text-light' id='join-team-button'> Join Team </button>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>`
    view.innerHTML = html;
    addController('join-team-button');
    addController('create-team-button');
}

const createTeam = function() {
    const view = document.getElementById('view');
    const html = `<div class='container d-flex p-3'>
                    <div class='container p-3'>
                        <div class='row p-3 justify-content-center'>
                            <div class='col-sm-6'>
                                <div class='text-center'>
                                    <h4>Team Name</h4>
                                    <hr>
                                    <input id='team-name' type='text'>
                                    <br>
                                    <br>
                                </div>
                            </div>
                        </div>
                        <div class='row p-3 justify-content-center'>
                            <div class='col-sm-6'>
                                <div class='text-center'>
                                    <h4>Manager Name</h4>
                                    <hr> 
                                    <input id='manager-name' type='text'>
                                    <br>
                                    <br>
                                    <button class='btn bg-dark text-light' id='create-button'> Create Team </button>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>`
    view.innerHTML= html;
    addController('create-button');
}

const joinTeam = function() {
    const view = document.getElementById('view');
    const html = `<div class='container d-flex p-3'>
                    <div class='container p-3'>
                        <div class='row p-3 justify-content-center'>
                            <div class='col-sm-6'>
                                <div class='text-center'>
                                    <h4>Team ID</h4>
                                    <hr>
                                    <input id='team-code' type=text>
                                    <br>
                                    <br>
                                    <button class='btn bg-dark text-light' id='enter-team-id'> Join Team </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    view.innerHTML = html;
    addController('enter-team-id');
}

const teamPage = async function() {
    const response = await fetch(`http://localhost:3000/api/team/${teamID}`);
    const data = await response.json();
    teamName = data['team-name'];
    const view = document.getElementById('view');
    const html = `<div class='container'>
                    <div class='jumbotron'>
                        <h1>${teamName}</h1>
                        <p>
                            Team ID: ${teamID}
                        </p>
                        <p>
                            Share this ID with teammates so they can join the team page.
                        </p>
                        <hr class='my-4'>
                        <div class='container d-flex p-3 justify-content-center'>
                            <div class='p-3'>
                                <button class='btn bg-dark text-light' id='schedule-button'> Schedule </button>
                                <br>
                            </div>
                            <div class='p-3'>
                                <button class='btn bg-dark text-light' id='roster-button'> Roster </button>
                                <br>
                            </div>
                            <div class='p-3'>
                                <button class='btn bg-dark text-light' id='announcements-button'> Announcements </button>
                            </div>
                        </div>
                    </div>
                </div>`
    view.innerHTML = html; 
    addController('schedule-button');
    addController('roster-button');
    addController('announcements-button');
}

const schedulePage = function() {
    const view = document.getElementById('view');
    const html = `<div class='container'>
                    <div class='jumbotron'>
                        <h1>Schedule</h1>
                        <p> 
                            Find upcoming games, tournaments, and other events here.
                        </p>
                        <hr class='my-4'>
                    </div>
                </div>`
    view.innerHTML = html;
}

const rosterPage = function() {
    const view = document.getElementById('view');
    const html = `<div class='container'>
                    <div class='jumbotron'>
                        <h1>Roster</h1>
                        <p> 
                           View the Roster.
                        </p>
                        <hr class='my-4'>
                    </div>
                    <div>
                        <input id='roster' type=text>
                        <button class='btn bg-dark text-light' id='add-roster'> Add </button>
                    </div>
                </div>`
    view.innerHTML = html;
    addController('add-roster');
}

const announcementsPage = function(){
    const view = document.getElementById('view');
    const html = `<div class='container'>
                    <div class='jumbotron'>
                        <h1>Schedule</h1>
                        <p> 
                            Find upcoming games, tournaments, and other events here.
                        </p>
                        <hr class='my-4'>
                    </div>
                </div>`
    view.innerHTML = html;
}

const viewTeam = function() {
    console.log(teamID, teamName, managerName);
}