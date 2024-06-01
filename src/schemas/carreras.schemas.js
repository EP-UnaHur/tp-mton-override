const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(10).max(35).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    grado: Joi.string().required().min(5).max(20).messages({
        "string.min": `grado debe tener al menos {#limit} caracters.`,
        "string.max": `grado debe tener como máximo {#limit} caracters.`,
        "string.empty": "grado no puede ser vacio",
        "any.required": "grado es requerido"      
    }),
    universidad: Joi.string().required().min(3).max(35).messages({
        "string.min": `universidad debe tener al menos {#limit} caracters.`,
        "string.max": `universidad debe tener como máximo {#limit} caracters.`,
        "string.empty": "universidad no puede ser vacio",
        "any.required": "universidad es requerido"      
    })

})

module.exports = carreraSchema