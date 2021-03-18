const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/tasks', controllers.createTask);

router.get('/tasks', controllers.getAllTasks);

router.get('/tasks/:taskId', controllers.getTaskById);

router.put('/tasks/:taskId', controllers.updateTask);

router.delete('/tasks/:taskId', controllers.deleteTask);

module.exports = router;