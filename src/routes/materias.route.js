const { Router } = require('express')
const {Materia} = require('../db/models')
const {Cursos} = require('../db/models')
const materiasController = require('../controllers/materias.controller')
const middleware = require('../middlewares/exist.middleware')
/*const carreraSchema = require('../schemas/carreras.schemas')*/
/*const materiasSchema = require('../schemas/materias.schemas')*/
const cursosSchema = require('../schemas/cursos.schemas')
const route = Router()


route.get('/materias', materiasController.getAllMaterias)
route.get('/materias/:id', middleware.existsById(Materia),materiasController.getMateriaById)
route.get('/materias/:id/cursos', middleware.existsById(Materia),materiasController.getCursosDeMateria)
route.post('/materias/:id/cursos', middleware.existsById(Materia), middleware.validaSchema(cursosSchema), materiasController.creaCursoParaMateria)
route.delete('/materias/:id', middleware.existsById(Materia), middleware.validaElementosConectados(Materia, Cursos), materiasController.borrarMateria)


module.exports = route