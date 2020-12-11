import React from 'react';
import { FaRegCalendarTimes } from 'react-icons/fa';
import './Input.css';

/**
 * 
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.type
 * @param {string} props.name
 * @param {string} props.value
 * @param {(e: any) => void} props.changeHandler
 * @param {boolean} [props.vertical]
 */
const Input = ({label, type, name, value, changeHandler, vertical}) => (
  <div className={vertical ? "vertical-container" : "input-container"}>
    {label !== "" ? <label htmlFor={name}>{label}</label> : <label htmlFor={name} id="cal"><FaRegCalendarTimes /></label>}
    <input type={type} value={value} name={name} id={name} onChange={changeHandler}></input>
  </div>
)

export default Input;