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