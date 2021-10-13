const ErrorResponse = require('../helper/errorResponse');
const Profesor = require("../models/profesor"); //se hace la instancia del archivo donde se crea el modelo 

exports.crearProfesor = async (req, res, next) => {
  try {
    const profesorData = await Profesor.create(req.body);
    /* en el body se envia la informacio a mongo y mongo retormande nuevo una data 
        con la informacion del registro y el id ue mongo creo automaticamente
        esta data que devuelve mongo se alacena en profesorData y es retormnada mediante un json
            */
    res.status(200).json({
      status: 200,
      data: profesorData,
      // se da respuesta al cliente mediante un json
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
// consultar todos los profesores
exports.getProfesor = async(req, res, next) => {

    try {
      const profesorlista = await Profesor.find();
      /* en el body se envia la informacio a mongo y mongo retormande nuevo una data 
        con la informacion del registro y el id ue mongo creo automaticamente
        esta data que devuelve mongo se alacena en profesorData y es retormnada mediante un json
            */
      /* res.status(200).json({
             status: 200,
             data: profesorlista
                 // se da respuesta al cliente mediante un json
         });*/

      res.status(200).json(profesorlista);
    } catch (err) {
        res.status(400).json({ status: 400, mensaje: err })
    }


};
// consulta de profesor por id
exports.getProfesorbyId = async (req, res, next) => {
  try {
    const profesor = await Profesor.findById(req.params.id);
    if (!profesor) {
      return next(
        new ErrorResponse(
          `el profesor no exite en la bd con ese idd ${req.params.id} `,
          404
        )
      );
    }
    res.status(200).json(profesor);
  } catch (err) {
    //res.status(400).json({ status: 400, mensaje: err })
    /*/ ahora se va a usar un middleware para manejar el error*/
    //next(new ErrorResponse('el profesor no existe con este id' + req.params.id, 400));
    next(
      new ErrorResponse(
        `el profesor no exite con ese idd ${req.params.id} `,
        404
      )
    );
  }
};
// actualizacion de profesor
exports.updateProfesor = async (req, res, next) => {
  try {
    const profesor = await Profesor.findByIdAndUpdate(req.params.id, req.body);
    const profesor1 = await Profesor.findById(req.params.id);
    if (!profesor) {
      return res.status(400).json({
        status: 400,
        mensaje: "no se enecontro un profesor registrado con ese id",
      });
    }
    res.status(200).json({
      status: 200,
      data: profesor1,
      mensaje: "se ha actualizado correctamente el profesor",
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
// eliminacion de profesor
exports.deleteaProfesor = async (req, res, next) => {
  try {
    const profesor = await Profesor.findByIdAndDelete(req.params.id);
    if (!profesor) {
      return res
        .status(400)
        .json({ status: 400, mensaje: "el profesor no existe" });
    }
    res.status(200).json({ status: 200 });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};