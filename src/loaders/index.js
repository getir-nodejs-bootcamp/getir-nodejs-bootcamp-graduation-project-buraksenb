const { connectDB } = require("./mongodb");

module.exports = () => {
    connectDB().then(() => console.log("Connection to MongoDB is successful."))
        .catch(() => console.log("Connection to MongoDB is NOT successful."));
};
