import React from 'react';
import Icon from './icon';
import './menu.scss';

const Menu = (props) => {

  const authorizedOptions = props.user && props.user.roles ? props.options.filter( option => {
    return !option.roles || option.roles.includes(props.user.roles[0]);
  }) : props.options;

  const options = authorizedOptions.map(option => {

    const handleClick = (event) => {
      props.goto(option.id);
      props.toggle();
    }

    const badge = option.info ? <span className="badge">{option.info}</span> : '';

    return (
      <li id={option.id} className={`menuitem`} onMouseUp={handleClick}>
        <Icon icon={option.icon} />
        <span className="label">{option.label}</span>
        <span className="info">{badge}</span>
      </li>
    )
  });

  return (
    <ul className={`menu ${props.className}`} data-header={props.title}>
      {options}
    </ul>
  )
}

export default Menu;
