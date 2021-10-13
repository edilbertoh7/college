const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
const AlumnoSchema = new mongoose.Schema({
  basicos: {
    nombre: String,
    apellido: String,
    correo: String,
  },
  identificacion: {
    tipodoc: String,
    numedoc: String,
  },
  acudiente: {
    nombre: String,
    apellido: String,
    parentesco: String,
    correo: String,
  },
  perfil: {
    grado: String,
    jornada: String,
  },
});

module.exports = mongoose.model("alumnos", AlumnoSchema);
