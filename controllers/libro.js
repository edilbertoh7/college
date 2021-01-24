exports.getlibros = (req, res, next) => {
    res.status(200).json({ status: 200, mensaje: 'se proceso correctamente' })
}

exports.getlibro = (req, res, next) => {
    res.status(200).json({ status: 200, mensaje: 'se devuelve el libro por id' })
}

exports.crearlibro = (req, res, next) => {
    res.status(200).json({ status: 200, mensaje: 'se ha creado el libro de forma correcta' })
}

exports.actualizarlibro = (req, res, next) => {
    res.status(200).json({ status: 200, mensaje: 'se ha actualizado el libro' })
}

exports.elimnarlibro = (req, res, next) => {
    res.status(200).json({ status: 200, mensaje: 'se elimino el libro exitosamente' })
}