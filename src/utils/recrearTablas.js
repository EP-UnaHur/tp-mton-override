// Importa tu archivo de configuración de Sequelize
const db = require('../db/models');

async function recrearTablas() {
  try {
    // Elimina las tablas existentes
    await db.sequelize.drop();
    
    // Crea nuevas tablas basadas en las definiciones de modelos
    await db.sequelize.sync({ force: true });
    
    console.log('Tablas recreadas exitosamente.');
  } catch (error) {
    console.error('Error al recrear las tablas:', error);
  } finally {
    // Cierra la conexión con la base de datos
    await db.sequelize.close();
  }
}

// Llama a la función para recrear las tablas
recrearTablas();