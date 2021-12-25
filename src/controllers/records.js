const service = require("../services/records");
const {successfulApiResponse} = require("../utils/api-response");

const recordsBetweenDateAndCount = (req, res) => {
    service.recordsBetweenDateAndCount(req.body).then(records => {
        res.status(200).send(successfulApiResponse(records))
    })

};


module.exports = {
    recordsBetweenDateAndCount,
};
