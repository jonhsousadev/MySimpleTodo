const { Task } = require('../models');

const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({
            task,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllTasks = async(req, res) => {
    try {
        const tasks = await Task.findAll();
        return res.status(200).json({ tasks });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getTaskById = async(req, res) => {
    try {
        const { taskId } = req.params;
        const task = await Task.findOne({
            where: { id: taskId }
        });
        if (task) {
            return res.status(200).json({ task });
        }
        return res.status(404).send('Task with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateTask = async(req, res) => {
    try {
        const { taskId } = req.params;
        const [updated] = await Task.update(req.body, {
            where: { id: taskId }
        });
        if (updated) {
            const updatedTask = await Task.findOne({ where: { id: taskId } });
            return res.status(200).json({ post: updatedTask });
        }
        throw new Error('Post not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteTask = async(req, res) => {
    try {
        const { taskId } = req.params;
        const deleted = await Task.destroy({
            where: { id: taskId }
        });
        if (deleted) {
            return res.status(204).send("Post deleted");
        }
        throw new Error("Post not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}