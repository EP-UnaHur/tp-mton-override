const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const cursosSchema = Joi.object().keys({
    comision: Joi.string().required().min(2).max(10).messages({
        "string.min": `comision debe tener al menos {#limit} caracters.`,
        "string.max": `comision debe tener como máximo {#limit} caracters.`,
        "string.empty": "comision no puede ser vacio",
        "any.required": "comision es requerido" 
    }),
    turno: Joi.string().required().min(5).max(10).messages({
        "string.min": `turno debe tener al menos {#limit} caracters.`,
        "string.max": `turno debe tener como máximo {#limit} caracters.`,
        "string.empty": "turno no puede ser vacio",
        "any.required": "turno es requerido" 
    }),
    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha es obligatorio"
    }),
    fechaFin: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fecha es obligatorio"
    }),
})
module.exports = cursosSchema