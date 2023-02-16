export const joiValidation = (schema) => {
    return (req, res, next) => {
        const { body } = req;   
        const { error } = schema.validate(body)
        const valid = error == null;
        if (valid) {
            next()
        } else {
            const { details } = error;
            console.log("ERROR: ", details)
            res.status(422).json({details})
        }
    }
}

