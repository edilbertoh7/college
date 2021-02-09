const { Router } = require('express');
const express = require('express');
const ruta = express.Router();

const { crearAutor, getAutor, getAutorbyId, updateAutor, deleteaAutor } = require('../controllers/autor');
//const { put } = require('./libro');

ruta
    .route('/')
    .post(crearAutor)
    .get(getAutor)

ruta
    .route('/:id')
    .get(getAutorbyId)
    .put(updateAutor)
    .delete(deleteaAutor)




module.exports = ruta;