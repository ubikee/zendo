import React from 'react';
import Icon from './icon';
import './header.scss';

const Header = (props) => {

  const icon = props.icon ? <Icon className="navIcon" icon={props.icon} action={props.action}/> : null;

  return (
    <header className={`header ${props.className}`}>
      {icon}
      <div className="title">{props.title}</div>
      <div className="actions">
        {props.children}
      </div>
    </header>
  )
}

export default Header;
