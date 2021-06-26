const mongoose = require("mongoose");
const config = require('config');
// config connect mongodb
exports.connect = async() => {
    try {
        await mongoose.connect(config.get("mongoURI"), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            dbName: 'kaydadocument',
        });
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
    return mongoose.connection;
};