const dotenv = require("dotenv");
const cors = require('cors')

// To allow only POST method to the API.
const options = {
    "origin": "*",
    "methods": "POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
module.exports = () => {
    dotenv.config();
    cors(options);
};
