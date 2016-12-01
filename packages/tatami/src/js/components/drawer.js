import React from 'react';

// components
import { Header, List } from 'seito';

// css
import './drawer.scss';

/**
 * Drawer
 */
const Drawer = (props) => {

  const stopEvent = (event) => {
    event.stopPropagation();
  }

  return (
    <div className={`drawer`} onMouseUp={stopEvent}>
      <main>
        {props.children}
        <List data={props.menu} groupBy="group"/>
      </main>
    </div>
  )
}

export default Drawer;
