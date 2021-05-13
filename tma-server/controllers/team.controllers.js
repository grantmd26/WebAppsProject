const team = require('../models/team.model');

class Controllers{
    test(request, response){
        response.json({'success': true});
    }

    newTeam(request, response){
        const {teamName, manager} = request.query;
        const id = team.create(teamName, manager);
        response.json({'success': true, 'teamID': id});
    }

    getTeam(request, response){
        const id = request.params.id;
        const data = team.get(id);
        if(data){
            data["success"] = true;
            response.json(data);
        }
        else{
            response.json({"success": false});
        }
    }

    addRoster(request, response){
        const id = request.query.id;
        const player = request.query.player;
        //console.log(request.query);
        //console.log('id', id, 'player', player);
        const isSet = team.setRoster(id, player);
        //console.log('isSet', isSet);
        if (isSet){
            const roster = team.getRoster(id);
            response.json({ 'success': true, ...roster}) 
        }
        else{
            response.json( {'success': false} )
        }
    } 
}

module.exports = new Controllers();