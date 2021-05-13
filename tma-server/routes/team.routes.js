var express = require('express');
var router = express.Router();
const {getTeam, newTeam, test, addRoster} = require('../controllers/team.controllers'); 

router.get('/test', test);
router.get('/new', newTeam);
router.get('/:id', getTeam);
router.get('/:id/roster', addRoster);

module.exports = router;