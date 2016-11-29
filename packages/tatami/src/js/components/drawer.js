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

  const visible = props.visible ? 'visible' : '';

  return (
    <div className={`drawer animated0 ${visible}`} onMouseUp={stopEvent}>
      <Header icon={props.icon} title={props.title} action={props.onToggleDrawer}/>
      <main>
        {props.children}
        <List data={props.menu} groupBy="group"/>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Drawer;
