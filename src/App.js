import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddSchedule from './components/AddSchedule';
import Schedules from './components/Schedules';
import './App.css';
import Schedule from './components/Schedule';

const URL = "http://localhost:8000/schedule";

const App = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    axios.get(URL).then(res => setSchedules(res.data.data.schedules))
  }, [])

  /**
   * 
   * @param {object} schedule 
   */
  const addSchedule = (schedule) => {
    //@@ desc create new data
    schedule.id = schedules.length + 1;
    setSchedules([...schedules, schedule])
    axios.post(URL, schedule).then(()=>{
      alert("data is successfully uploaded");
    })
  }
  console.log(schedules)
  return (
  <div className="main-container">
    <AddSchedule addSchedule={addSchedule} />
    <Schedules data={schedules} />
  </div>
  )
}
    
export default App;
