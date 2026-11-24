const {Sequelize} = require('sequelize');  
// Configuración de la conexión a la base de datos  
const sequelize = new Sequelize(
    'tarea',
    'root',
    'parsival823', {
    host: 'localhost',
    port: 3306, 
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexión establecida con la base de datos');
    })
    .catch((error) => {
        console.error('Error al conectar con la base de datos:', error);
    });

module.exports = sequelize;