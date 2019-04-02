const bodyParser = require('body-parser');
const express = require('express'); //Manda a llamar 
const morgan = require('morgan'); //Para que salgan mensajes con las solicitudes
const wagner = require('wagner-core');

// MODELS
require('./models/models')(wagner);

const user = require('./router/user.router.js')(wagner);
const place = require('./router/place.router.js')(wagner);

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});


// ROUTERS
//Que van a ser atendidas.
const uri = `/usuarios/v1/`;

app.use(uri + 'usuario', user);
app.use(uri + 'lugares', place);

module.exports = app;
