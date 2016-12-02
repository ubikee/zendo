import React from 'react';
import Icon from './icon';

import './menu.scss';

const Menu = (props) => {

  const options = props.options.map(option => {

    const handleClick = (event) => {
      console.log(props)
      if (props.onSelected) props.toggleDrawer();
    }

    return (
      <li id={option.id} className={`menuitem`} onMouseUp={handleClick}>
        <Icon icon="person" />
        <span className="label">{option.label}</span>
      </li>
    )
  });

  return (
    <ul className={`menu`}>
      {options}
    </ul>
  )
}

export default Menu;
