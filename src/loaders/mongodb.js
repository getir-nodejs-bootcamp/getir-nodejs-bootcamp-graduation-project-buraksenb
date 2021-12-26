const mongoose = require("mongoose");


const connectDB = (uri, callback) => {
    mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).catch(e => console.log(e?.message))
    mongoose.connection.on('connected', () => console.log("Connection to MongoDB is successful"))
    mongoose.connection.on('disconnected', () => console.log("Disconnected from MongoDB"))
    mongoose.connection.on('error', e => console.log(e?.message));


};

module.exports = {connectDB};
