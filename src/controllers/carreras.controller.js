const {Carreras} = require('../db/models')
const {Materia} = require('../db/models')

const controller = {}

const getAllCarreras = async (req, res) => {
    res.status(200).json(await Carreras.findAll({}))
}
controller.getAllCarreras = getAllCarreras

const getCarreraById = async(req, res) => {
    const idCarrera = req.params.id
    const materia = await Carreras.findOne(
        {
            where: {id: idCarrera},
            include: [
            {
                model: Materia,
                as: 'materias',
            }
            ]
        }
    )
    res.status(200).json(materia)
}
controller.getCarreraById = getCarreraById

const crearCarrera = async (req, res) => {
    const nuevaCarrera = await Carreras.create(req.body)
    res.status(201).json(nuevaCarrera)
}
controller.crearCarrera = crearCarrera

const getMateriasDeCarrera = async (req, res) => {
    const idCarrera = req.params.id;
    const carrera = await Carreras.findOne(
        {
            where: {id: idCarrera},
            include: [
            {
                model: Materia,
                as: 'materias',
            }
            ]
        }
    )
    const materias = carrera.materias
    res.status(200).json(materias)
}
controller.getMateriasDeCarrera = getMateriasDeCarrera


const crearMateriaEnCarrera = async (req, res) => {
    const idCarrera = req.params.id;
    const { nombre, cuatrimestral, anio } = req.body

    const nuevaMateria = await Materia.create({
      nombre,
      cuatrimestral,
      anio,
      carreraId: idCarrera
    });

    res.status(201).json(nuevaMateria);
}
controller.crearMateriaEnCarrera = crearMateriaEnCarrera

const borrarCarrera = async (req, res)=>{
    const id = req.params.id;
    await Carreras.destroy({where: {id}})
    res.status(200).json(`La carrera con id ${id} se borro con exito.`)
}
controller.borrarCarrera = borrarCarrera


module.exports = controller