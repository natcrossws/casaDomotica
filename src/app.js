//declaración de vriables que incluyen las libererías 
const express = require('express'); // librería de express
const dbConnection = require('pg-promise')();// librería ue facilita las consultas con postgres
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const johnnyFive = require('johnny-five');// Librería que deja interactuar con arduino

//declaración de variables para incluir las rutas
const rutaDeLogin = require('./routes/loginRoutes');

//incluir de rutas de controladores
const loginController = require('./controllers/loginController');

const app = express();
app.set('port', 3000);

// Rutas
app.set('views', 'src/views');
app.get('/login', loginController.login);
app.get('/menuhome', (req, res) => {
    res.sendFile(__dirname + '/../src/views/menuhome.html');    
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Rutas estáticas
app.use(express.static('src/public'));
app.use(express.static('src'));


//Conexion a la bd
const db = dbConnection({
    host: 'localhost',
    user: 'postgres',
    password: '83505',
    port: 5433,
    database: 'casaDomoticadb'
});

// Ruta para recibir datos del ESP8266
app.post('/datosDesdeArduino', (req, res) => {
    const datos = req.body; // Datos recibidos desde el ESP8266
    console.log('Datos recibidos desde Arduino:', datos);

    // Realiza la lógica necesaria con los datos recibidos
    res.send('Datos recibidos correctamente');
});

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});





