const scheduleService = require("../services/scheduleService");

const scheduleController = {
  getSchedules: async (req, res, next) => {
    try {
      const schedules =  await scheduleService.getSchedules();
      res.json({
        result: 'ok',
        data: { schedules }
      })
    } catch(err) {
      next(err);
    }
  },
  createSchedule: async (req, res, next) => {
    try {
      const schedule =  await scheduleService.createSchedule(req.body);
      res.json({
        result: 'ok',
        data: { schedule }
      })
    } catch(err) {
      next(err);
    }
  },
  updateSchedule: async (req, res, next) => {
    try {
      const { studentId, teacherId } = req.params
      const schedule =  await scheduleService.updateSchedule(studentId, teacherId, req.body);
      res.json({
        result: 'ok',
        data: { schedule }
      })
    } catch(err) {
      next(err);
    }
  },
  deleteSchedule: async (req, res, next) => {
    try {
      const { studentId, teacherId } = req.params
      const schedule =  await scheduleService.deleteSchedule(studentId, teacherId);
      res.json({
        result: 'ok',
        data: { schedule }
      })
    } catch(err) {
      next(err);
    }
  }
}

module.exports = scheduleController;