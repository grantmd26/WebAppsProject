const getCallbacks = function (){
    const callbacks = {};
    callbacks['create-team-button'] = createTeam;
    callbacks['create-button'] = newTeam;
    callbacks['join-team-button'] = joinTeam;
    callbacks['enter-team-id'] = join;
    callbacks['schedule-button'] = schedulePage;
    callbacks['roster-button'] = rosterPage;
    callbacks['announcements-button'] = announcementsPage;
    return callbacks;
} 

const addController = function(...buttonIDs){
    const callbacks = getCallbacks();
    for(let id of buttonIDs){
        const button = document.getElementById(id);
        button.addEventListener('click', callbacks[id]);
    }
}

const getTeamName = () => document.getElementById('team-name').value;

const getManagerName = () => document.getElementById('manager-name').value;

const getTeamID = () => document.getElementById('team-code').value;