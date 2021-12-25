const Joi = require("joi");

const queryRecordSchema = Joi.object(
    {
    startDate: Joi.date().required().iso(),
    endDate: Joi.date().required().iso(),
    minCount: Joi.number().required().positive().integer(),
    maxCount: Joi.number().required().positive().integer(),
});

module.exports = queryRecordSchema
