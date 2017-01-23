import React from 'react';

// components
import Icon from './icon';

// styles
import './button.scss';

/**
 * Button
 */
const Button = (props) => {

  const handleMouseUp = (event) => {
    if (!props.disabled) props.action();
  }

  const disabled = props.disabled ? 'disabled' : '';
  return (
    <button className={`button ${disabled} ${props.className}`} onMouseUp={handleMouseUp}>{props.label}</button>
  )
}

/**
 * FAB
 */
const FAB = (props) => {
  return (
    <div className={`fab ${props.className}`} onMouseUp={props.action}><Icon icon={props.icon} /></div>
  )
}

/**
 * Link
 */
const Link = (props) => {
  return (
    <div className={`link ${props.className}`} onMouseUp={props.action}>{props.label}</div>
  )
}

export { Button, FAB, Link };
