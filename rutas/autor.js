const { Router } = require('express');
const express = require('express');
const ruta = express.Router();

const { crearAutor, getAutor, getAutorbyId } = require('../controllers/autor');

ruta
    .route('/')
    .post(crearAutor)
    .get(getAutor)

ruta
    .route('/:id')
    .get(getAutorbyId)




module.exports = ruta;