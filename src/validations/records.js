const Joi = require("joi");

const queryRecordSchema = Joi.object(
    {
        startDate: Joi.date().required().iso().less(Joi.ref("endDate")),
        endDate: Joi.date().required().iso(),
        minCount: Joi.number().required().positive().allow(0).integer().less(Joi.ref("maxCount")),
        maxCount: Joi.number().required().positive().integer(),
    });

module.exports = queryRecordSchema
