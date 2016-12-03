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

  const children = React.Children.map(props.children, (child => React.cloneElement(child, { goto: props.goto, toggleDrawer : props.onToggleDrawer })));

  return (
    <div className={`drawer`} onMouseUp={stopEvent}>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Drawer;
