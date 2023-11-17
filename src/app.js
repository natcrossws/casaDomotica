const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dbConnection = require('pg-promise')();
//const johnnyFive = require('johnny-five');

const app = express();

//importar rutas
const customerRoutes = require('./routes/customer');

//Configuración de express
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));

//Conexion a la bd
const db = dbConnection({
    host: 'localhost',
    user: 'postgres',
    password: '83505',
    port: 5433,
    database: 'casaDomoticadb'
});


//rutas
app.listen(app.get('port'), () => {
    console.log('Server connection success');
});

app.use('/', customerRoutes);
app.use(express.static(path.join(__dirname, 'assets')));