const shortid = require('shortid');

class Team{
    constructor(){
        this.teams = {};
    }

    create(teamName, manager){
        const id = shortid.generate();
        let team = {'team-name':teamName, 'manager':manager, 'roster':[]}; 
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

    setRoster(id, player){
        if(this.teams[id]){
            this.teams[id].roster.push(player)
            return true;
        }
        else{
            return false;
        }
    }

    getRoster(id){
        if( this.teams[id] ){
            return this.teams[id].roster
        }
        else{
            return null;
        }
    }
    
}

module.exports = new Team();