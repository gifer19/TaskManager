const Task = require('../models/task.model');

// Crear una nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Error al crear la tarea' });
  }
};

// Obtener todas las tareas con opción de filtrado
exports.getTasks = async (req, res) => {
  try {
    const { completed } = req.query;
    const query = completed !== undefined ? { completed: completed === 'true' } : {};
    const tasks = await Task.find(query);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
};

// Obtener una tarea por ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener la tarea' });
  }
};

// Actualizar una tarea
exports.updateTask = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true });
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar la tarea' });
  }
};

// Eliminar una tarea
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.status(200).json({ message: 'Tarea eliminada' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar la tarea' });
  }
};
