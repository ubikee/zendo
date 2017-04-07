import React from 'react';
import './icon2.scss';

const Icon2 = (props) => {
  const fontIconset = props.set       ? props.set : 'material-icons';
  const fontIcon    = props.icon      ? <span className={`${fontIcoset}`}>{props.icon}</span> : '';
  const badge       = props.badge     ? <span className='decorator2'>{props.badge}</span> : '';
  const decorator   = props.decorator ? <Icon2 className='decorator2' icon={props.decorator} /> : '';
  return (
    <span className={`icon2 ${props.className}`}>
      {fontIcon}
      {badge}
      {decorator}
    </span>
  )
}

export default Icon2;
