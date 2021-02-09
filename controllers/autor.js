const Autor = require('../models/Autor'); //se hace la instancia del archivo donde se crea el modelo 

exports.crearAutor = async(req, res, next) => {

    try {
        const autorData = await Autor.create(req.body);
        /* en el body se envia la informacio a mongo y mongo retormande nuevo una data 
        con la informacion del registro y el id ue mongo creo automaticamente
        esta data que devuelve mongo se alacena en autorData y es retormnada mediante un json
            */
        res.status(200).json({
            status: 200,
            data: autorData
                // se da respuesta al cliente mediante un json
        });

    } catch (err) {
        res.status(400).json({ status: 400, mensaje: err })
    }


};
// consultar todos los autores
exports.getAutor = async(req, res, next) => {

    try {
        const autorlista = await Autor.find();
        /* en el body se envia la informacio a mongo y mongo retormande nuevo una data 
        con la informacion del registro y el id ue mongo creo automaticamente
        esta data que devuelve mongo se alacena en autorData y es retormnada mediante un json
            */
        /* res.status(200).json({
             status: 200,
             data: autorlista
                 // se da respuesta al cliente mediante un json
         });*/

        res.status(200).json(autorlista);

    } catch (err) {
        res.status(400).json({ status: 400, mensaje: err })
    }


};
// consulta de autor por id
exports.getAutorbyId = async(req, res, next) => {

    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) {
            return res.status(400).json({ status: 400, mensaje: 'no se enecontro un autor registrado con ese id' });
        }
        res.status(200).json(autor);
    } catch (err) {
        res.status(400).json({ status: 400, mensaje: err })
    }
};
// actualizacion de autor
exports.updateAutor = async(req, res, next) => {

    try {
        const autor = await Autor.findByIdAndUpdate(req.params.id, req.body);
        if (!autor) {
            return res.status(400).json({ status: 400, mensaje: 'no se enecontro un autor registrado con ese id' });
        }
        res.status(200).json({ status: 200, data: autor, mensaje: 'se ha actualizado correctamente el autor' });

    } catch (err) {
        res.status(400).json({ status: 400, mensaje: err })
    }
};
// eliminacion de autor
exports.deleteaAutor = async(req, res, next) => {

    try {
        const autor = await Autor.findByIdAndDelete(req.params.id);
        if (!autor) {
            return res.status(400).json({ status: 400, mensaje: 'el autor no existe' });
        }
        res.status(200).json({ status: 200 });
    } catch (err) {
        res.status(400).json({ status: 400, mensaje: err })
    }
};