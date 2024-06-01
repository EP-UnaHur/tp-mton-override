const {Materia} = require('../db/models')
const {Carreras} = require('../db/models')
const {Cursos} = require('../db/models')


const controller = {}

const getAllMaterias = async (req, res) => {
    res.status(200).json(await Materia.findAll({}))
}
controller.getAllMaterias = getAllMaterias

const getMateriaById = async(req, res) => {
    const idMateria = req.params.id
    const materia = await Materia.findOne(/*{where: {id: idMateria}})*/
        {
            where: {id: idMateria},
            include: [
            {
                model: Carreras,
                as: 'carreras',
            },
            {
                model: Cursos,
                as: 'cursos'
            }
            ]
        }
    )
    res.status(200).json(materia)
}
controller.getMateriaById = getMateriaById

const getCursosDeMateria = async (req, res) => {
    const idMateria = req.params.id
    const materia = await Materia.findOne(
        {
            where: {id: idMateria},
            include: [
                {
                    model: Cursos,
                    as: 'cursos'
                }
            ]
        }
    )
    const cursos = materia.cursos
    res.status(200).json(cursos)
}
controller.getCursosDeMateria = getCursosDeMateria

const creaCursoParaMateria = async (req, res) => {
    const idMateria = req.params.id;
    const { comision, turno, fechaInicio, fechaFin } = req.body

    const nuevoCurso = await Cursos.create({
      comision,
      turno,
      fechaInicio,
      fechaFin,
      materiaId: idMateria
    });

    res.status(201).json(nuevoCurso);
}
controller.creaCursoParaMateria = creaCursoParaMateria

const borrarMateria = async (req, res)=>{
    const id = req.params.id;
    await Materia.destroy({where: {id}})
    res.status(200).json(`La materia con id ${id} se borro con exito.`)
}
controller.borrarMateria = borrarMateria


module.exports = controller