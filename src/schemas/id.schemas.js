const Joi = require('joi')

const idSchema = Joi.object().keys({
    id: Joi.number().integer().min(1).required().messages({
    "number.base": "El id debe ser un número",
    "number.integer": "El id debe ser un entero",
    "number.min": "El id debe ser al menos {#limit}",
    "any.required": "El id es requerido"
  })
})
module.exports = idSchema