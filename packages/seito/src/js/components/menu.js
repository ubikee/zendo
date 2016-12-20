import React from 'react';
import Icon from './icon';
import './menu.scss';

const Menu = (props) => {

  const options = props.options.map(option => {

    const handleClick = (event) => {
      props.goto(option.id);
      props.toggle();
    }

    return (
      <li id={option.id} className={`menuitem`} onMouseUp={handleClick}>
        <Icon icon={option.icon} />
        <span className="label">{option.label}</span>
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
