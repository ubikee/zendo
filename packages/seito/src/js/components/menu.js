import React from 'react';
import Icon from './icon';
import './menu.scss';

const Menu = (props) => {

  const authorizedOptions = props.user && props.user.rol ? props.options.filter( option => {
    const rol = props.user.rol;
    return !option.roles || option.roles.includes(rol);
  }) : props.options;

  const options = authorizedOptions.map(option => {

    const handleClick = (event) => {
      if (option.action) {
        option.action()
      } else {
        props.goto(option.id);
      }
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
