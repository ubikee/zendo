import React from 'react';

// components
import { Tatami, Drawer } from 'tatami';

// pages
import Login from './pages/login';

// styles
import './app.scss';

/**
 * Application
 */
const Application = (props) => {

  const pages = {
    'LOGIN'    : <Login fullscreen={true} />,
  }

  const menu = [
    { id: 'SPLASH', title: 'Welcome', subtitle: '...', icon: 'card_giftcard',  group: "" },
    { id: 'LOGIN',  title: 'Login',   subtitle: '...', icon: 'cloud_done',     group: "" },
  ]

  const appDrawer = <Drawer icon="cloud_queue" title="Zendo" menu={menu}/>

  return (
    <Tatami pages={pages} init="LOGIN" drawer={appDrawer} />
  );

}

export default Application;
