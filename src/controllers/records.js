const service = require("../services/records");
const {successfulApiResponse} = require("../utils/api-response");
const ApiError = require("../errors/api-error");

const recordsBetweenDateAndCount = (req, res,next) => {
    service.recordsBetweenDateAndCount(req.body).then(records => {
        const payload = records.length > 0 ?
            successfulApiResponse({records : records}) :
            successfulApiResponse({records : "There are not any records within date and count range specified."}) // This is not an error; but it is better to inform than send empty array.
        res.status(200).send(payload)
    }).catch(e => {
        return next(new ApiError(e?.message))
    })

};


module.exports = {
    recordsBetweenDateAndCount,
};
