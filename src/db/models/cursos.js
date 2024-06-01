'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cursos.belongsTo(models.Materia, {
        as: 'materia',
        foreignKey: 'materiaId',
      });

      Cursos.belongsToMany(models.Profesores,{through: 'CursoProfesor'})

      
    }
  }
  Cursos.init({
    comision: DataTypes.STRING,
    turno:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false 
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false 
    },
    materiaId: {
      type: DataTypes.INTEGER,
      allowNull: false 
    }
  }, {
    sequelize,
    modelName: 'Cursos',
    timestamps: false,
  });
  return Cursos;
};