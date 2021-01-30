const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const connectDatabase = require('./config/db'); //se llama al archivo de conexion


dotenv.config({ path: './config/config.env' });

connectDatabase();

const libro = require('./rutas/libro');
const autor = require('./rutas/autor');


const app = express();
app.use(express.json());
/*esta linea permique que express 
procese la data de tipo  el json que vienen en el response*/

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/libreriaAutor', autor);
app.use('/api/libro', libro); //el parametro libro es la ruta 


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