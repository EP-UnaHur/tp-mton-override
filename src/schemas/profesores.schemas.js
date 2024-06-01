/*
nombre: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATEONLY,
    legajo: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
*/

const Joi = require('joi')
const validateDate = require('../utils/date.validator')

const profesorSchema = Joi.object().keys({
    nombre: Joi.string().required().min(10).max(35).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "any.custom": "El formato de la fecha debe ser YYYY-MM-DD",
        "any.required": "El campo fechaNacimiento es obligatorio"
    }),
    legajo: Joi.number().integer().min(7).required().messages({
        "number.base": "El legajo debe ser un número",
        "number.integer": "El legajo debe ser un entero",
        "number.min": "El legajo debe ser al menos {#limit}",
        "any.required": "El legajo es requerido"
    }),
    activo: Joi.boolean().required().messages({
        "boolean.base": "El campo activo debe ser un booleano",
        "any.required": "El campo activo es requerido"
    })
})

module.exports = profesorSchema