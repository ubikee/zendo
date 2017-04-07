import React from 'react';

// components
import { Header } from 'seito';

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
  const minimized = props.minimized ? 'minimized' : '';
  return (
    <div className={`drawer ${minimized}`} onMouseUp={stopEvent}>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Drawer;
