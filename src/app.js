require('dotenv').config({path: './variables_entorno.env'}); // allowEmptyValues: true
const express = require('express')
const db = require('./db/models')

//RUTAS
const carrerasRoute = require('./routes/carreras.route')
const materiasRoute = require('./routes/materias.route')
const cursosRoute = require('./routes/cursos.route')
const profesoresRoute = require('./routes/profesores.route')

//DATOS TEST
const datosTest = require('./utils/datosTest');
const agregarCursoAProfe = require('./utils/agregarCursoAProfe');

const _ = require('lodash');
const app = express();

app.use(express.json())
app.use(carrerasRoute)
app.use(materiasRoute)
app.use(cursosRoute)
app.use(profesoresRoute)

const PORT = process.env.PORT || 3000;

app.listen(PORT, async ()=>{
    console.log(`La aplicacion arranco correctamente en el puerto ${PORT}`);

    try {
    //Esto verifica si me pude conectar bien a la base de datos
        await db.sequelize.authenticate()

    // El método sync solo se usa en ambientes de desarrollo. No utilizar en produccion
    // porque borra todas las tablas y las vueve a crear
        await db.sequelize.sync({force:true});

        
        /*####################### CARRERAS #######################*/
        await Promise.all(datosTest.carreras.map(async carrera => {
            await db.Carreras.create(carrera);
        }));
        
        /*####################### MATERIAS #######################*/        
        await Promise.all(datosTest.materias.map(async materias => {
            await db.Materia.create(materias);
        }));

        /*####################### CURSOS #######################*/        
        await Promise.all(datosTest.cursos.map(async cursos => {
            await db.Cursos.create(cursos);
        }));

        /*####################### PROFESORES #######################*/  
        await Promise.all(datosTest.profesores.map(async profesores => {
            await db.Profesores.create(profesores);
        }));
    
       
        agregarCursoAProfe(1,1)
        agregarCursoAProfe(1,2)

    } catch(err){
    console.log(err)
    }
})