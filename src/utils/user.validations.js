const Joi = require('joi');

module.exports = {
    validateBody: schema => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

            if (result.error) {
                return res.status(400).json(result.error);
            }

            if (!req.value) {
                req.value = {};
            }
            req.value['body'] = result.value;

            next();
        };
    },

    schemas: {
        authSchema: Joi.object().keys({
            firstname: Joi.string(),
            lastname: Joi.string(),
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
                .required(),
        }),
    },
};