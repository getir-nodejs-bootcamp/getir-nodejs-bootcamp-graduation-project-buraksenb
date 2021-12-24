
const validator = (schema) => (req, res, next) => {

    const { value, error } = schema.validate(req.body);

    if (error) {
        const errorMessage = error?.details?.map((detail) => detail?.message).join(", ");
        return res.status(500).send({ error: errorMessage });
    }
    Object.assign(req, value);
    return next();
};

module.exports = validator;
