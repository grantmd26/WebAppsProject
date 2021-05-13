const shortid = require('shortid');

class Team{
    constructor(){
        this.teams = {};
    }

    create(teamName, manager){
        const id = shortid.generate();
        let team = {'team-name':teamName, 'manager':manager}; 
        this.teams[id] = team;
        console.log(this.teams);
        return id;
    }

    get(id){
        if(this.teams[id]){
            const data = this.teams[id];
            return data;
        }
        else{
            return null;
        }
    }

    getRoster(id, teamRoster){
        if(this.teams[id]){
            let roster = {'teamRoster':teamRoster};
            return roster;
        }
        else{
            return null;
        }
    }

}

module.exports = new Team();