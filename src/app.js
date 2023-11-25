const express = require('express'); 
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loginController = require('./controllers/loginController');
//servidor
const app = express();
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

//rutas de back
// const rutaDeLogin = require('./routes/loginRoutes');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(session({
    secret: 'domotichouse', // Una cadena secreta para firmar la cookie de sesión
    resave: false,
    saveUninitialized: true,
}));

// rutas de front
app.set('views', 'src/views');
app.get('/login', loginController.login);
app.post('/ingresar', loginController.ingresar);
app.get('/registro', loginController.vistaRegistro);
app.post('/registrarUsuarios', loginController.registrarUsuarios)
app.get('/mostrar-usuario', (req, res) => {
    const usuario = req.session.usuario || 'Usuario no encontrado';
    res.json({ usuario });
});



// Rutas estáticas
app.use(express.static('src/public'));
app.use(express.static('src'));


// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }));







