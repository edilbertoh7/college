const ErrorResponse = require("../helper/errorResponse");
const Alumno = require("../models/alumno"); //se hace la instancia del archivo donde se crea el modelo

exports.crearAlumno = async (req, res, next) => {
  try {
    const alumnoData = await Alumno.create(req.body);
    /* en el body se envia la informacio a mongo y mongo retormande nuevo una data 
        con la informacion del registro y el id ue mongo creo automaticamente
        esta data que devuelve mongo se alacena en alumnoData y es retormnada mediante un json
            */
    res.status(200).json({
      status: 200,
      data: alumnoData,
      // se da respuesta al cliente mediante un json
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
// consultar todos los alumnoes
exports.getAlumno = async (req, res, next) => {
  try {
    const alumnolista = await Alumno.find();
    /* en el body se envia la informacio a mongo y mongo retormande nuevo una data 
        con la informacion del registro y el id ue mongo creo automaticamente
        esta data que devuelve mongo se alacena en alumnoData y es retormnada mediante un json
            */
    /* res.status(200).json({
             status: 200,
             data: alumnolista
                 // se da respuesta al cliente mediante un json
         });*/

    res.status(200).json(alumnolista);
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
// consulta de alumno por id
exports.getAlumnobyId = async (req, res, next) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (!alumno) {
      return next(
        new ErrorResponse(
          `el alumno no exite en la bd con ese idd ${req.params.id} `,
          404
        )
      );
    }
    res.status(200).json(alumno);
  } catch (err) {
    //res.status(400).json({ status: 400, mensaje: err })
    /*/ ahora se va a usar un middleware para manejar el error*/
    //next(new ErrorResponse('el alumno no existe con este id' + req.params.id, 400));
    next(
      new ErrorResponse(
        `el alumno no exite con ese idd ${req.params.id} `,
        404
      )
    );
  }
};
// actualizacion de alumno
exports.updateAlumno = async (req, res, next) => {
  try {
    const alumno = await Alumno.findByIdAndUpdate(req.params.id, req.body);
    const alumno1 = await Alumno.findById(req.params.id);
    if (!alumno) {
      return res.status(400).json({
        status: 400,
        mensaje: "no se enecontro un alumno registrado con ese id",
      });
    }
    res.status(200).json({
      status: 200,
      data: alumno1,
      mensaje: "se ha actualizado correctamente el alumno",
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
// eliminacion de alumno
exports.deleteaAlumno = async (req, res, next) => {
  try {
    const alumno = await Alumno.findByIdAndDelete(req.params.id);
    if (!alumno) {
      return res
        .status(400)
        .json({ status: 400, mensaje: "el alumno no existe" });
    }
    res.status(200).json({ status: 200, mensaje: "se ha eliminado el alumno" });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
