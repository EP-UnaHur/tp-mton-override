'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materia.belongsTo(models.Carreras, {
        as: 'carreras',
        foreignKey: 'carreraId',
      })
      Materia.hasMany(models.Cursos, { 
        as: 'cursos', 
        foreignKey: 'materiaId'
      })
    }
  }
  Materia.init({
    nombre: {type: DataTypes.STRING, allowNull: false },
    cuatrimestral: {type: DataTypes.BOOLEAN, allowNull: false },
    anio: {type: DataTypes.INTEGER, allowNull: false }    
  }, {
    sequelize,
    modelName: 'Materia',
    timestamps: false,
  });
  return Materia;
};