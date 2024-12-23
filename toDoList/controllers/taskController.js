const task = require('../models/task');
const Task = require('../models/task');

// Get all tasks
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.render('index', { tasks });
    } catch (error) {
        res.status(500).send('Error retrieving tasks');
    }
};

// Render add task page
exports.renderAddTask = (req, res) => {
    res.render('add', {task});
};

// Create new task
exports.createTask = async (req, res) => {
    try {
        const { task, level } = req.body;
        const newTask = new Task({ task, level });
        await newTask.save();
        res.redirect('/tasks');
    } catch (error) {
        res.status(500).send('Error creating task');
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.redirect('/tasks');
    } catch (error) {
        res.status(500).send('Error deleting task');
    }
};

// Render edit task page
exports.renderEditTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        res.render('add', { task });
    } catch (error) {
        res.status(500).send('Error retrieving task');
    }
};

// Update task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { task, level } = req.body;
        await Task.findByIdAndUpdate(id, { task, level });
        res.redirect('/tasks');
    } catch (error) {
        res.status(500).send('Error updating task');
    }
};
