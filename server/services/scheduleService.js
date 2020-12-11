const { Schedule } = require('../models')

const scheduleService = {
  getSchedules: () => {
    return Schedule.findAll({});
  },
  createSchedule: (schedule) => {
    return Schedule.create(schedule);
  },
  updateSchedule: (studentId, teacherId, schedule) => {
    return Schedule.update(schedule, {
      where: {
        studentId,
        teacherId
      }
    })
  },
  deleteSchedule: (studentId, teacherId) => {
    return Schedule.destory({where: { studentId, teacherId }})
  }
}

module.exports = scheduleService;