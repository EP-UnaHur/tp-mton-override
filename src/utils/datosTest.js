
const datos = {}

const carreras = [
        {
            nombre: 'Licenciatura en Informatica',
            grado: 'Grado',
            universidad: 'UNAHUR'
        },
        {
            nombre: 'Ingenieria Metalurgica',
            grado: 'Grado',
            universidad: 'UNAHUR'
        },
        {
            nombre: 'Tecnicatura en Diseño Industrial',
            grado: 'Pre - Grado',
            universidad: 'UNAHUR'
        },
        {
            nombre: 'Maestria en Salud Comunitaria',
            grado: 'Posgrado',
            universidad: 'UNAHUR'
        }
    ]
datos.carreras = carreras

const materias = [
    {
        nombre: 'Matematica 1',
        cuatrimestral: true,
        anio: 1,
        carreraId: 1
    },
    {
        nombre: 'Programacion con Objetos 1',
        cuatrimestral: true,
        anio: 1,
        carreraId: 1
    },
    {
        nombre: 'Base de datos',
        cuatrimestral: true,
        anio: 1,
        carreraId: 1
    },
    {
        nombre: 'Redes Informaticas',
        cuatrimestral: true,
        anio: 1,
        carreraId: 1
    },
    {
        nombre: 'Estructuras de Datos',
        cuatrimestral: true,
        anio: 1,
        carreraId: 1
    },
    {
        nombre: 'Sociopolitica',
        cuatrimestral: true,
        anio: 1,
        carreraId: 4
    }
]
datos.materias = materias

const cursos = [
    {
        comision: "A1",
        turno: "Mañana",
        fechaInicio: new Date('2024-03-05'),
        fechaFin: new Date('2024-06-05'),
        materiaId:5
    },
    {
        comision: "A2",
        turno: "Tarde",
        fechaInicio: new Date('2024-03-05'),
        fechaFin: new Date('2024-06-05'),
        materiaId:4
    },
    {
        comision: "A3",
        turno: "Noche",
        fechaInicio: new Date('2024-03-05'),
        fechaFin: new Date('2024-06-05'),
        materiaId:4
    },
    {
        comision: "A4",
        turno: "Mañana",
        fechaInicio: new Date('2024-03-05'),
        fechaFin: new Date('2024-06-05'),
        materiaId:4
    },
    {
        comision: "A5",
        turno: "Tarde",
        fechaInicio: new Date('2024-03-05'),
        fechaFin: new Date('2024-06-05'),
        materiaId:2
    },
    {
        comision: "A6",
        turno: "Noche",
        fechaInicio: new Date('2024-03-05'),
        fechaFin: new Date('2024-06-05'),
        materiaId:6
    }

]
datos.cursos = cursos

const profesores =[
    {
        nombre: "Juan Perez",
        fechaNacimiento: "1990-08-15",
        legajo: 35999666,
        activo: true
    },
    {
        nombre: "Carlos Lopez",
        fechaNacimiento: "1989-05-20",
        legajo: 34899666,
        activo: true
    },
    {
        nombre: "Sofia Sanchez",
        fechaNacimiento: "1988-01-25",
        legajo: 33159777,
        activo: true
    },
    {
        nombre: "Carla Alaniz",
        fechaNacimiento: "1991-10-05",
        legajo: 35321896,
        activo: true
    }
]
datos.profesores = profesores

module.exports = datos