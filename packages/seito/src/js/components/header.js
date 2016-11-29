import React from 'react';
import Icon from './icon';
import './header.scss';

const Header = (props) => {

  const icon = props.icon ? <Icon icon={props.icon} action={props.action}/> : null;

  return (
    <header className={`header ${props.className}`}>
      {icon}
      <span className="title">{props.title}</span>
      <nav>
        {props.children}
      </nav>
    </header>
  )
}

export default Header;
