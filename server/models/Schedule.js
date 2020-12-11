const Schedule = (sequelize, DataTypes) => {
  return sequelize.define('Schedule', {
    scheduleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: DataTypes.STRING,
    teacherId: DataTypes.STRING,
    date: DataTypes.STRING,
    minutes: DataTypes.STRING,
    note: DataTypes.STRING,
  }, {
    timestamps: true
  })
}

module.exports = Schedule;