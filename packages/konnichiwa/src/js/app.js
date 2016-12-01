import React from 'react';

// components
import { Tatami, Drawer } from 'tatami';

// pages
import Login from './pages/login';
import Gallery from './pages/gallery';

// styles
import './app.scss';

/**
 * Application
 */
const Application = (props) => {

  const pages = {
    'LOGIN'    : <Login title="Login" fullscreen={true} />,
    'GALLERY'  : <Gallery title="Gallery" />,
  }

  const menu = [
    { id: 'GALLERY', title: 'Gallery', subtitle: '...', icon: 'list',  group: "" },
  ]

  const appDrawer = <Drawer icon="cloud_queue" title="Zendo" menu={menu}/>

  return (
    <Tatami pages={pages} init="LOGIN" drawer={appDrawer} />
  );

}

export default Application;
