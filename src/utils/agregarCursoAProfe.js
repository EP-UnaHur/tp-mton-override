const db = require('../db/models')

const addCursoAProfe = async (profesorId, cursoId) => {
    try {
        const profesor = await db.Profesores.findByPk(profesorId);
        if (!profesor) {
            console.log('No se encontró el profesor con el ID especificado.');
            return;
        }

        const curso = await db.Cursos.findByPk(cursoId);
        if (!curso) {
            console.log('No se encontró el curso con el ID especificado.');
            return;
        }

        await profesor.addCurso(curso);
        console.log('Se agregó el curso al profesor.');
    } catch (error) {
        console.error('Error al agregar el curso al profesor:', error);
    }
};

module.exports = addCursoAProfe