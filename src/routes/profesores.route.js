const { Router } = require('express')
const {Profesores} = require('../db/models')
const {Cursos} = require('../db/models')
const profesoresController = require('../controllers/profesores.controller')
const middleware = require('../middlewares/exist.middleware')
const profesoresSchema = require('../schemas/profesores.schemas')
const route = Router()

route.get('/profesores', profesoresController.getAllProfesores)
route.get('/profesores/:id', middleware.existsById(Profesores),profesoresController.getProfesorById)
route.post('/profesores', middleware.validaSchema(profesoresSchema),profesoresController.crearProfesor)
route.put('/profesores/:id', middleware.existsById(Profesores), profesoresController.modificarProfesor)

route.delete('/profesores/:id', middleware.existsById(Profesores), middleware.validaElementosConectados(Profesores, Cursos), profesoresController.borrarProfesores)

route.get('/profesores/:id/cursos', middleware.existsById(Profesores),profesoresController.getCursosDeProfesor)

module.exports = route