const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(8).max(35).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido" 
    }),
    cuatrimestral: Joi.boolean().required().messages({
        "boolean.base": "El campo cuatrimestral debe ser un booleano",
        "any.required": "El campo cuatrimestral es requerido"
    }),
    anio: Joi.number().integer().min(1).required().messages({
    "number.base": "El año debe ser un número",
    "number.integer": "El año debe ser un entero",
    "number.min": "El año debe ser al menos {#limit}",
    "any.required": "El año es requerido"
  })    
})
module.exports = materiaSchema