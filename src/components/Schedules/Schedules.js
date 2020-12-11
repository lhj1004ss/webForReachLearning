import React from 'react';
import Schedule from '../Schedule';
import './Schedules.css';

/**
 * 
 * @param {object} props
 * @param {array} props.data
 */
const Schedules = ({data}) => (
  <ul className="schedules-container">
    <Schedule studentId="Student" teacherId="Teacher" minutes="Minutes" note="Note" />
    {data && data.map(e => <Schedule key={e.studentId + e.teacherId} {...e} />)}
    {data.length === 0 && <Schedule studentId="" teacherId="" minutes="" note="" />}
  </ul>
)

export default Schedules;