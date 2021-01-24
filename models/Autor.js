const { Mongoose } = require("mongoose");


const mongoose = require('mongoose');
const AutorSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    gradoacademico: String,
    nombreompleto: String

});

module.exports = mongoose.model('Autor', AutorSchema);