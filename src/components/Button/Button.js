import React from 'react';
import './Button.css';

/**
 * 
 * @param {object} props
 * @param {any} props.children
 * @param {boolean} [props.image]
 */
const Button = ({children, image}) => (
    <button className={image? 'image-btn': 'btn'}>{children}</button>
)

export default Button;