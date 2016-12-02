import React from 'react';

// components
import { Icon, Header } from 'seito';

// styles
import './toolbar.scss';

// ToolBar Component
const ToolBar = (props) => {
  return (
    <Header className={`${props.className}`} icon={props.icon} title={props.title} action={props.toggleDrawer}>
      <Icon icon="search" />
      <Icon icon="more_vertical" />
    </Header>
  )
}

export default ToolBar;
