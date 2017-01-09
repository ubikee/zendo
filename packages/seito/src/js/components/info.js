import React from 'react';
import Icon from './icon';
import './info.scss';

const InfoLine = (props) => {
  const icon = props.icon ? <Icon icon={props.icon} className="small"/> : '';
  console.log(icon)
  return (
    <div className={`infoline ${props.className}`}>
      <div className="info">{icon}{props.info}</div>
      <div className="content">{props.children}</div>
    </div>
  )
}

export { InfoLine }
