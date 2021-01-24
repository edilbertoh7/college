const mongoose = require('mongoose');

const connectDatabase = async() => {

    const conexion = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log('mongoDB servidor atlas conectado', conexion.connection.host);
}

module.exports = connectDatabase