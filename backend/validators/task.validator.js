// middlewares/validationMiddleware.js
const { body, validationResult } = require('express-validator');

// Validación de la tarea
exports.validateTask = [
    body('title').notEmpty().withMessage('El título es obligatorio'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
