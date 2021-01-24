const express = require('express');
const ruta = express.Router();

const {
    getlibro,
    getlibros,
    crearlibro,
    actualizarlibro,
    elimnarlibro
} = require('../controllers/libro');

ruta
    .route('/')
    .get(getlibros)
    .post(crearlibro)

ruta.route('/:id')
    .get(getlibro)
    .put(actualizarlibro)
    .delete(elimnarlibro)


module.exports = ruta;