import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, Header } from 'seito';

// styles
// import './login.scss';

/**
 * Gallery Page
 */
const Gallery = (props) => {

  const ctxMenu = [
    { icon: 'refresh', label: 'Update'},
    { icon: 'sort', label: 'Sorting'},
  ]

  const title = props.title ? props.title : '<title>';

  return (
    <Page className="gallery" {...props}>
      <Toolbar className="pageBar" icon={props.icon} title={title} menu={ctxMenu}/>
    </Page>
  );
}

export default Gallery;
