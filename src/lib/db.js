const dbConnection = require('pg-promise')();

//Conexion a la bd
const db = dbConnection({
    host: 'localhost',
    user: 'postgres',
    password: '83505',
    port: 5433,
    database: 'casaDomoticadb'
});

module.exports = {
    db
  };