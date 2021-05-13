var express = require('express');
var router = express.Router();
const {getTeam, newTeam, test} = require('../controllers/team.controllers'); 

router.get('/test', test);
router.get('/new', newTeam);
router.get('/:id', getTeam);

module.exports = router;