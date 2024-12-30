const express = require('express');
const router = express.Router();
//const taskRoutes = require('../routes/task.routes');
const taskController = require('../controllers/task.controller');
const { check, validationResult } = require('express-validator');

// Crear tarea
router.post('/', [
  check('title').notEmpty().withMessage('El título es obligatorio'),
], taskController.createTask);

// Obtener todas las tareas
router.get('/', taskController.getTasks);

// Obtener tarea por ID
router.get('/:id', taskController.getTaskById);

// Actualizar tarea
router.put('/:id', taskController.updateTask);

// Eliminar tarea
router.delete('/:id', taskController.deleteTask);

module.exports = router;
