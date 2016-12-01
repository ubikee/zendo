import React from 'react';

// components
import { Icon } from 'seito';

// styles
import './appBar.scss';

// AppBar Component
const AppBar = (props) => {
  return (
    <header className={`appBar ${props.className}`}>
      <Icon className="navIcon" icon={props.icon} action={props.toggleDrawer} />
      <div className="title">{props.title}</div>
      <div className="actions">
        <Icon icon="search" />
        <Icon icon="more_vertical" />
      </div>
    </header>
  )
}

export default AppBar;
