const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTasks);
router.get('/add', taskController.renderAddTask);
router.post('/create', taskController.createTask);
router.get('/delete/:id', taskController.deleteTask);
router.get('/edit/:id', taskController.renderEditTask);
router.post('/edit/:id', taskController.updateTask);

module.exports = router;
