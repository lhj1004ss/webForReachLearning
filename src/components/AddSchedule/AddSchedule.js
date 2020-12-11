import React,{useState} from 'react';
import Button from '../Button';
import Input from '../Input';
import './AddSchedule.css';

/**
 * 
 * @param {object} props
 * @param {(schdule: object) => void} props.addSchedule
 */
const AddSchedule = ({addSchedule}) => {
  const [studentId, setStudentId] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [note, setNote] = useState("");

  const changeHandler = (e) => {
    console.log(e.target);
    const type = e.target.name;
    switch(type){
      case 'studentId':
        setStudentId(e.target.value);
        break;
      case 'teacherId':
        setTeacherId(e.target.value);
        break;
      case 'date':
        setDate(e.target.value);
        break;
      case 'start':
        setStartTime(e.target.value);
        break;
      case 'end':
        setEndTime(e.target.value);
        break;
      case 'note':
        setNote(e.target.value);
        break;
      default:
      }
  }

  const getCalculateTime = (time1, time2) => {
    const [hour1, min1] = time1.split(':');
    const [hour2, min2] = time2.split(':');
    return (hour2 - hour1) * 60 + min2 - min1;
  }
  const submitHandler = (e) => { 
    e.preventDefault(e);

    const minutes = getCalculateTime(startTime, endTime);
    let data ={
      studentId,
      teacherId,
      date,
      minutes,
      note
    }
    addSchedule(data);
  }

  return (
    <form className="form-container" onSubmit={submitHandler}> 
      <div className="ids-container">
        <Input type="text" label="Student ID" name="studentId" value={studentId} changeHandler={changeHandler} />
        <Input type="text" label="Teacher ID" name="teacherId" value={teacherId} changeHandler={changeHandler} />
      </div> 
      <Input type="date" label="" name="date" value={date} changeHandler={changeHandler} />
      <div className="addschedule-container">
        <Input type="time" label="Start" name="start" value={startTime} changeHandler={changeHandler} vertical/>
        <Input type="time" label="End" name="end" value={endTime} changeHandler={changeHandler} vertical/>
        <Input type="text" label="Note" name="note" value={note} changeHandler={changeHandler} vertical/>
        <Button>Add</Button>
      </div>
    </form>
  );
}

export default AddSchedule;
