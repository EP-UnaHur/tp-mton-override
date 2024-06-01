const {Cursos} = require('../db/models')
const {Materia} = require('../db/models')
const {Profesores} = require('../db/models')

const controller = {}

const getAllCursos = async (req, res) => {
    res.status(200).json(await Cursos.findAll({}))
}
controller.getAllCursos = getAllCursos

const getCursosById = async(req, res) => {
    const idCurso = req.params.id
    const curso = await Cursos.findOne(
        {
            where: {id: idCurso},
            include: [
            {
                model: Materia,
                as: 'materia',
            },
            {
                model: Profesores,
                through: { attributes: [] },
            }
            ]
        }
    )
    res.status(200).json(curso)
}
controller.getCursosById = getCursosById

const modificarCurso = async(req, res) => {
    const idCurso = req.params.id
    const { comision, turno, fechaInicio, fechaFin, materiaId } = req.body
    const cursoAModificar = await Cursos.findByPk(idCurso);
    
    cursoAModificar.comision = comision
    cursoAModificar.turno = turno
    cursoAModificar.fechaInicio = fechaInicio
    cursoAModificar.fechaFin = fechaFin
    cursoAModificar.materiaId = materiaId

    await cursoAModificar.save();

    res.status(200).json(cursoAModificar)    
}
controller.modificarCurso = modificarCurso

const borrarCursos = async (req, res)=>{
    const id = req.params.id;
    await Cursos.destroy({where: {id}})
    res.status(200).json(`El curso con id ${id} se borro con exito.`)
}
controller.borrarCursos = borrarCursos


const getProfesoresDeCurso = async (req, res) => {
    const idCurso = req.params.id;
    const curso = await Cursos.findOne(
        {
            where: {id: idCurso},
            include: [
            {
                model: Profesores,
                through: { attributes: [] },
            }
            ]
        }
    )
    const profesores = curso.Profesores; //profesor.cursos
    res.status(202).json(profesores)
}
controller.getProfesoresDeCurso = getProfesoresDeCurso

const creaProfesorParaCurso = async (req, res) => {
    const idCurso = req.params.id;
    const idProfesor = req.body.id

    const curso = await Cursos.findByPk(idCurso);
    const profesor = await Profesores.findAll({where:{id: idProfesor}});

    await curso.addProfesores(profesor);

    res.status(201).json(`El profesor con id ${idProfesor} se agrego al curso con id ${idCurso}`);
}
controller.creaProfesorParaCurso = creaProfesorParaCurso

module.exports = controller

