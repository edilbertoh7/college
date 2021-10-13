const { Mongoose } = require("mongoose");


const mongoose = require('mongoose');
const ProfesorSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  gradoacademico: String,
  nombreompleto: String,
});

module.exports = mongoose.model("profesores", ProfesorSchema);