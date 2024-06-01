const { Router } = require('express')
const {Cursos} = require('../db/models')
const {Profesores} = require('../db/models')
const cursosController = require('../controllers/cursos.controller')
const middleware = require('../middlewares/exist.middleware')
const profesoresSchema = require('../schemas/profesores.schemas')
const idSchema = require('../schemas/id.schemas')

const route = Router()

route.get('/cursos', cursosController.getAllCursos)
route.get('/cursos/:id', middleware.existsById(Cursos),cursosController.getCursosById)
route.put('/cursos/:id', middleware.existsById(Cursos), cursosController.modificarCurso)

route.delete('/cursos/:id', middleware.existsById(Cursos), middleware.validaElementosConectados(Cursos, Profesores), cursosController.borrarCursos)

route.get('/cursos/:id/profesores', middleware.existsById(Cursos),cursosController.getProfesoresDeCurso)

route.post('/cursos/:id/profesores', middleware.existsById(Cursos), middleware.validaSchema(idSchema),middleware.existsByIdBody(Profesores), cursosController.creaProfesorParaCurso)

module.exports = route

