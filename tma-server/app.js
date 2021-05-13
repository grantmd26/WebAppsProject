const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();
const routes = require('./routes/team.routes');

app.use(localhostHandler);
app.use('/api/team', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


function localhostHandler(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    next();
}

app.listen(port);
console.log(`Server is running on port ${port}...`);