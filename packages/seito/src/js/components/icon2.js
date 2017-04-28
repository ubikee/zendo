import React from 'react';
import './icon2.scss';

const Icon2 = (props) => {
  const clickable   = props.clickable ? 'clickable' : '';
  const fontIconset = props.set       ? props.set : 'material-icons';
  const fontIcon    = props.icon      ? <span className={`${fontIconset}`}>{props.icon}</span> : '';
  const badge       = props.badge     ? <Badge2 className='decorator2 tiny' text={props.badge} /> : '';
  const decorator   = props.decorator ? <Icon2 className='decorator2' icon={props.decorator} /> : '';
  return (
    <span className={`icon2 ${clickable} ${props.className}`} onClick={props.action}>
      {fontIcon}
      {badge}
      {decorator}
    </span>
  )
}

const Badge2 = (props) => {
  return (
    <div className={`badge2 ${props.bgcolor} ${props.className}`}>{props.text}</div>
  )
}

export { Icon2, Badge2 };
