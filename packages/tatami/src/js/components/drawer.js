import React from 'react';

// components
import { Header } from 'seito';
import { User } from  './user';

// css
import './drawer.scss';

/**
 * Drawer
 */
const Drawer = (props) => {

  const stopEvent = (event) => {
    event.stopPropagation();
  }

  const children = React.Children.map(props.children, (child => React.cloneElement(child, { user: props.user, goto: props.goto, toggle : props.onToggleDrawer })));

  return (
    <div className={`drawer`} onMouseUp={stopEvent}>
      <main>
        <User avatar="/user.png" name={`${props.user.name} ${props.user.family_name}`} info={props.user.email} />
        {children}
      </main>
    </div>
  )
}

export default Drawer;
