const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API para la gestión de tareas',
    },
  },
  apis: ['./routes/task.routes.js','./config/db.js'],
};

const swaggerDocs = (app) => {
  const swaggerSpec = swaggerJsDoc(swaggerOptions);
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
