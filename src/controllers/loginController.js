const path = require('path');
const dbConnection = require('../lib/db'); 

function loginView(req, res) {
    //res.render('login.html');
    res.sendFile(path.join(__dirname, '../', 'views','login.html'));
}

function iniciaSesion(req, res){
    const mail = req.body.mail;
    const paasw = req.body.paasw;

    dbConnection.db.query("SELECT * FROM usrsys_domotic WHERE email = '"+mail+"' AND upass = '"+paasw+"'").then(data => {
        console.log(data.length);



        if (data.length > 0){
            req.session.usuario = data[0].nombre+" "+data[0].primer_apellido+" "+data[0].segundo_apellido+" ";
            const usuario = req.session.usuario;
            console.log(usuario);
            // res.render('menuhome', { usuario }); 
            res.sendFile(path.join(__dirname, '../', 'views','menuhome.html'));
        }else{
            res.sendFile(path.join(__dirname, '../', 'views','login.html'));
        }
   
    }).catch(error => {
        console.log(error);
    } );
    
}

function viewReg(req, res){
    res.sendFile(path.join(__dirname, '../', 'views','usrsysReg.html'));
}

function getUsers(req, res){
    const nombre = req.body.nombre;
    const p_apellido = req.body.p_apellido;
    const s_apellido = req.body.s_apellido;
    const mail = req.body.mail;
    const contrasena = req.body.contrasena;
    const tipo_usuario = req.body.tipo_usuario;    

    // console.log(nombre);
    dbConnection.db.query("INSERT INTO usrsys_domotic(nombre, primer_apellido, segundo_apellido, email, upass, fk_id_type_ursys) VALUES('"+nombre+"', '"+p_apellido+"', '"+s_apellido+"', '"+mail+"', '"+contrasena+"', '"+tipo_usuario+"');"
     ).then(data => {
        console.log(data);
   
    }).catch(error => {
        console.log(error);
    } );

}

module.exports = {
    login: loginView,
    ingresar: iniciaSesion,
    vistaRegistro: viewReg,
    registrarUsuarios: getUsers
};
