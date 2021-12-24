const Mongoose = require("mongoose");

const connectDB = async (uri, callback) => {
    await Mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = { connectDB };
