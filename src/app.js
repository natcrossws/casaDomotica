const express = require('express'); // librería de express
const { engine } = require('express-handlebars'); // Facilita la creación de plantillas HTML dinámicas
const dbConnection = require('pg-promise')();
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const loginRoutes = require('./routes/login');

const path = require('path');
const johnnyFive = require('johnny-five');

const app = express();
app.set('port', 3000);

app.set('views', __dirname+'/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Conexion a la bd
const db = dbConnection({
    host: 'localhost',
    user: 'postgres',
    password: '83505',
    port: 5433,
    database: 'casaDomoticadb'
});

app.use('/', loginRoutes);

// Ruta inicial
app.get('/', (req, res) => {
    res.render('home');
});






