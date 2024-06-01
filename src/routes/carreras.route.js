const { Router } = require('express')
const {Carreras} = require('../db/models')
const {Materia} = require('../db/models')
const carrerasController = require('../controllers/carreras.controller')
const middleware = require('../middlewares/exist.middleware')
const carreraSchema = require('../schemas/carreras.schemas')
const materiaSchema = require('../schemas/materias.schemas')
const route = Router()


route.get('/carreras', carrerasController.getAllCarreras)
route.get('/carreras/:id', middleware.existsById(Carreras),carrerasController.getCarreraById)
route.post('/carreras', middleware.validaSchema(carreraSchema),carrerasController.crearCarrera)
route.post('/carreras/:id/materias', middleware.existsById(Carreras), middleware.validaSchema(materiaSchema), carrerasController.crearMateriaEnCarrera)
route.get('/carreras/:id/materias', middleware.existsById(Carreras) ,carrerasController.getMateriasDeCarrera)

route.delete('/carreras/:id', middleware.existsById(Carreras), middleware.validaElementosConectados(Carreras, Materia), carrerasController.borrarCarrera)

module.exports = route