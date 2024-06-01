const existsById = (Model) => {
    
    return async (req, res, next) => {
        const id = req.params.id
        const instancia = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if (!instancia) {
            return res.status(404).json({
                mensaje: `El elemento ${modelName} con id ${id} no existe`
            }
            )
        }

        next()
    }
}

const validaSchema = (schema) => {
    return async (req, res, next) => {
        const result = schema.validate(req.body, {abortEarly: false})
        if (result.error) {
            return res.status(400).json(
                {
                    errores : result.error.details.map( error=> ( {
                        error: error.message
                    })
                )}  
            )
        }
        next()
    }
}

const validaElementosConectados = (Model, relacion) => {
    return async (req, res, next) => {
        const id = req.params.id;
        const association = Model.associations[
            Object.keys(Model.associations).find(key => Model.associations[key].target === relacion)];
        const instancia = await Model.findByPk(id, {
            
            include: [{ 
                model: relacion, 
                as: association.as 
            }]
            
        })
        
        if (instancia[association.as].length > 0 /*|| 
            instancia[association.foreignKey] !== null && 
            instancia[association.foreignKey] !== undefined && 
            instancia[association.foreignKey] !== ''*/    
        ) {
            return res.status(500).json({
                mensaje: `No se puede borrar ${Model.name} cuando tiene ${relacion.name} cargados.`
            })
        }
        next()
    }
}


const existsByIdBody = (Model) => {
    
    return async (req, res, next) => {
        const id = req.body.id
        const instancia = await Model.findByPk(id)
        const modelName = Model.modelName || (Model.options.name && Model.options.name.singular);
        if (!instancia) {
            return res.status(404).json({
                mensaje: `El elemento ${modelName} con id ${id} no existe`
            }
            )
        }

        next()
    }
}


module.exports = {existsById, validaSchema, validaElementosConectados,existsByIdBody}