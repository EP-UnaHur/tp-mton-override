'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carreras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Carreras.hasMany(models.Materia, { 
        as: 'materias', /*Como quiero que se llame la coleccion*/
        foreignKey: 'carreraId'
      })
    }
  }
  Carreras.init({
    nombre: {type: DataTypes.STRING, allowNull: false },
    grado: {type: DataTypes.STRING, allowNull: false },
    universidad: {type: DataTypes.STRING, allowNull: false }    
  }, {
    sequelize,
    modelName: 'Carreras',
    timestamps: false,
  });
  return Carreras;
};