'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CursoProfesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CursoProfesor.belongsTo(models.Cursos/*, { foreignKey: 'cursoId' }*/);
      CursoProfesor.belongsTo(models.Profesores/*, { foreignKey: 'profesorId' }*/);
    }
  }
  CursoProfesor.init({}, 
  {
    sequelize,
    modelName: 'CursoProfesor',
    timestamps: false,
  });
  return CursoProfesor;
};