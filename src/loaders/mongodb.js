const Mongoose = require("mongoose");

const connectDB = async (uri, callback) => {
    // const { DB_CONNECTION_STRING } = process.env;
    // console.log(DB_CONNECTION_STRING)
    await Mongoose.connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = { connectDB };
