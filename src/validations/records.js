const Joi = require("joi");

const queryRecordSchema = Joi.object(
    {
    startDate: Joi.date().required().iso().less(Joi.ref("endDate")),
    endDate: Joi.date().required().iso(),
    minCount: Joi.number().required().positive().integer().less(Joi.ref("maxCount")),
    maxCount: Joi.number().required().positive().integer(),
});

module.exports = queryRecordSchema
