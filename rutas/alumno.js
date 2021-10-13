const { Router } = require("express");
const express = require("express");
const ruta = express.Router();

const {
  crearAlumno,
  getAlumno,
  getAlumnobyId,
  updateAlumno,
  deleteaAlumno,
} = require("../controllers/Alumno");
//const { put } = require('./libro');

ruta.route("/").post(crearAlumno).get(getAlumno);

ruta
  .route("/:id")
  .get(getAlumnobyId)
  .put(updateAlumno)
  .delete(deleteaAlumno);

module.exports = ruta;
