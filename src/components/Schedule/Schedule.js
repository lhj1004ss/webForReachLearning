import React from 'react';
import './Schedule.css'

/**
 * 
 * @param {object} props
 * @param {string} props.studentId
 * @param {string} props.teacherId
 * @param {string} props.minutes
 * @param {string} props.note
 */
const Schedule = ({studentId, teacherId, minutes, note}) => (
  <div className="schedule-container">
    {
      studentId === "" ? <span>No data</span> : (
        <>
        <span>{studentId}</span>
        <span>{teacherId}</span>
        <span>{minutes}</span>
        <span>{note}</span>
        </>
      )
    }
  </div>
)

export default Schedule;