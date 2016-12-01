import React from 'react';

// components
import { Tatami, Drawer } from 'tatami';
import { Header } from 'seito';

// pages
import Login from './pages/login';
import Gallery from './pages/gallery';

// styles
import './app.scss';

/**
 * Application
 */
const Application = (props) => {

  const menu = [
    { id: 'GALLERY', title: 'Gallery', subtitle: '...', icon: 'list',  group: "" },
  ]

  const appDrawer = <Drawer icon="cloud_queue" title="Zendo" menu={menu}>
                      <Header title="Zendo" />
                    </Drawer>

  const pages = {
    'LOGIN'    : <Login   title="Login" />,
    'GALLERY'  : <Gallery icon="list" title="Gallery" drawer={appDrawer} />,
  }

  return (
    <Tatami title="Zendo" pages={pages} init="GALLERY" />
  );

}

export default Application;
