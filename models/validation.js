const Joi = require('@hapi/joi');

// Register Validate
const registerValidation = function(data){
    const schema = Joi.object ({
        name:Joi.string(),
        email: Joi.string()
                   .email()
                   .min(6)
                   .required()
                   .messages({
                       'string.email':`The "Email" field is not a valid e-mail address!`
                   }),
        password: Joi.string()
                   .min(6)
                   .required()
                   .messages({
                    'string.min':`The password must be at least {#limit} characters long!`,
                    }),
        phone : Joi.string(),
        role : Joi.string()
                          
    })
   return  schema.validate(data)
}
const loginValidation = function(data){
    const schema = Joi.object ({
        email: Joi.string()
                   .email()
                   .min(6)
                   .required()
                   .messages({
                    'string.email':`The "Email" field is not a valid e-mail address!`
                }),
        password: Joi.string()
                   .min(6)
                   .required(),
                          
    })
   return  schema.validate(data)
}
module.exports = {registerValidation,loginValidation}