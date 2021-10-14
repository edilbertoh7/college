const { Router } = require('express');
const express = require('express');
const ruta = express.Router();

const { crearProfesor, getProfesor, getProfesorbyId, updateProfesor, deleteaProfesor } = require('../controllers/profesor');
//const { put } = require('./libro');

ruta
    .route('/')
    .post(crearProfesor)
    .get(getProfesor)

ruta
    .route('/:id')
    .get(getProfesorbyId)
    .put(updateProfesor)
    .delete(deleteaProfesor)




module.exports = ruta;