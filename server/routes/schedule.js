const express = require('express');
const scheduleController = require('../controllers/scheduleController');
const router = express.Router();

router.get('/', scheduleController.getSchedules);
router.post('/', scheduleController.createSchedule);
router.put('/:studentId/:teacherId', scheduleController.updateSchedule);
router.delete('/:studentId/:teacherId', scheduleController.deleteSchedule);

module.exports = router;