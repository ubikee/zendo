import React from 'react'
import './icon.scss';

const Icon = (props) => {
  const iconset = props.set ? props.set : 'material-icons';
  const clickable = props.action ? 'clickable' : '';
  const toggled = props.toggled ? 'toggled' : '';
  const decorator = props.decorator ? <Icon icon={props.decorator} className="decorator tiny"/> : '';
  return (
    <span className={`icon ${iconset} ${clickable} ${toggled} ${props.className}`} onClick={props.action}>
      {props.icon}
      {decorator}
    </span>
  )
}

const Picon = (props) => {
  const clickable = props.action ? 'clickable' : '';
  const toggled = props.toggled ? 'toggled' : '';
  const decorator = props.decorator ? <Icon icon={props.decorator} className="decorator tiny"/> : '';
  return (
    <span className={`picon ${clickable} ${toggled} ${props.className}`} onClick={props.action}>
      <img src={props.src} />
      {decorator}
    </span>
  )
}


export { Icon, Picon };
