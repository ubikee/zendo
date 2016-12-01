import React from 'react'
import './icon.scss';

const Icon = (props) => {
  const iconset = props.set ? props.set : 'material-icons';
  const clickable = props.action ? 'clickable' : '';
  return (
    <span className={`icon ${iconset} ${clickable} ${props.className}`} onClick={props.action}>{props.icon}</span>
  )
}

export default Icon;
