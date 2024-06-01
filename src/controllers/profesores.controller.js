const {Profesores} = require('../db/models')
const {CursoProfesor} = require('../db/models')
const {Cursos} = require('../db/models')
const {Materia} = require('../db/models')


const controller = {}

const getAllProfesores = async (req, res) => {
    res.status(200).json(await Profesores.findAll({}))
}
controller.getAllProfesores = getAllProfesores

const getProfesorById = async(req, res) => {
    const idProfesor = req.params.id
    const profesor = await Profesores.findOne(
        {
            where: {id: idProfesor},
            include: [
            {
                model: Cursos,
                /*as: 'cursos',*/
                include: [
                    {
                        model: Materia,
                        as: 'materia'
                    }
                ],
                through: { attributes: [] }
            }]
        }
    )
    res.status(200).json(profesor)
}
controller.getProfesorById = getProfesorById

const crearProfesor = async (req, res) => {
    const nuevoProfesor = await Profesores.create(req.body)
    res.status(201).json(nuevoProfesor)
}
controller.crearProfesor = crearProfesor

const modificarProfesor = async(req, res) => {
    const idProfesor = req.params.id
    const { nombre, fechaNacimiento, legajo, activo } = req.body
    const profesorAModificar = await Profesores.findByPk(idProfesor);
    
    profesorAModificar.nombre = nombre
    profesorAModificar.fechaNacimiento = fechaNacimiento
    profesorAModificar.legajo = legajo
    profesorAModificar.activo = activo

    await profesorAModificar.save();

    res.status(200).json(profesorAModificar)    
}
controller.modificarProfesor = modificarProfesor

const borrarProfesores = async (req, res)=>{
    const id = req.params.id;
    await Profesores.destroy({where: {id}})
    res.status(200).json(`El profesor con id ${id} se borro con exito.`)
}
controller.borrarProfesores = borrarProfesores

const getCursosDeProfesor = async (req, res) => {
    const idProfesor = req.params.id;
    const profesor = await Profesores.findOne(
        {
            where: {id: idProfesor},
            include: [
            {
                model: Cursos,
                through: { attributes: [] },//'CursoProfesor'
            }
            ]
        }
    )
    const cursos = profesor.Cursos; //profesor.cursos
    res.status(200).json(cursos)
}
controller.getCursosDeProfesor = getCursosDeProfesor




module.exports = controller