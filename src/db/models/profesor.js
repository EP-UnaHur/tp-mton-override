'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profesores.belongsToMany(models.Cursos,{through: 'CursoProfesor'})
    }
  }
  Profesores.init({
    nombre: {type: DataTypes.STRING, allowNull: false },
    fechaNacimiento: {type: DataTypes.DATEONLY, allowNull: false },
    legajo: DataTypes.INTEGER,
    activo: {type: DataTypes.BOOLEAN, allowNull: false }
  }, {
    sequelize,
    modelName: 'Profesores',
    timestamps: false,
  });
  return Profesores;
};