const Joi = require("joi");

const queryRecordSchema = Joi.object(
    {
    minDate: Joi.date().required().iso(),
    maxDate: Joi.date().required().iso(),
    minCount: Joi.number().required().positive().integer(),
    maxCount: Joi.number().required().positive().integer(),
});

module.exports = queryRecordSchema
