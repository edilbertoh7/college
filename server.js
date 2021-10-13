const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDatabase = require('./config/db'); //se llama al archivo de conexion

dotenv.config({ path: './config/config.env' });
connectDatabase();

const alumno = require('./rutas/alumno');

const profesor = require('./rutas/profesor');

const app = express();
app.use(express.json());
/*esta linea permite que express 
procese la data de tipo  el json que vienen en el response*/
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/profesores', profesor);
app.use('/api/alumnos', alumno); //el parametro alumno es la ruta 

app.use(errorHandler);


const PORT = process.env.PORT || 5000;
// funcion app.listen para levantar el servidor
const server = app.listen(
    PORT,
    console.log('servidor se ejecuta en ambiente', process.env.NODE_ENV)
);
// funcion para atrapar los errores que se puwdan presentar al momento de la conexion
process.on('unhandledRejection', (err, Promise) => {
    console.log('errores', err.message);

    server.close(() => {
        process.exit(1);
    })
});