import React from 'react';

// components
import { Tatami, Drawer } from 'tatami';
import { Header, Menu } from 'seito';

// pages
import Login from './pages/login';
import Gallery from './pages/gallery';
import PanelPage from './pages/panel';

// styles
import './app.scss';

/**
 * Application
 */
const Application = (props) => {

  const appMenu = [
    { icon: 'fullscreen' , label: 'Full Screen'},
    { icon: 'exit_to_app', label: 'Exit'},
  ]

  const tatamiMenu = [
    { id: 'TATAMI' , label: 'Tatami' , icon: 'devices' },
    { id: 'DRAWER' , label: 'Drawer' , icon: 'menu' },
    { id: 'TOOLBAR', label: 'Toolbar', icon: 'keyboard_arrow_right' },
  ]

  const drawerMenu = [
    { id: 'PANEL', label: 'Panel', icon: 'keyboard_arrow_right' },
    { id: 'HEADER', label: 'Header', icon: 'keyboard_arrow_right' },
    { id: 'CARD', label: 'Card', icon: 'keyboard_arrow_right' },
    { id: 'LIST', label: 'List', icon: 'keyboard_arrow_right' },
    { id: 'MENU', label: 'Menu', icon: 'keyboard_arrow_right' },
    { id: 'ICON', label: 'Icon', icon: 'keyboard_arrow_right' },
    { id: 'BUTTON', label: 'Button', icon: 'keyboard_arrow_right' },
    { id: 'FIELD', label: 'Field', icon: 'keyboard_arrow_right' },
    { id: 'SELECT', label: 'Select', icon: 'keyboard_arrow_right' },
  ]

  const appDrawer = <Drawer icon="cloud_queue" title="Zendo" >
                      <Header title="Zendo" />
                      <Menu title="Tatami" options={tatamiMenu} />
                      <Menu title="Seito" options={drawerMenu} />
                    </Drawer>

  const pages = {
    'LOGIN'  : <Login />,
    'GALLERY': <Gallery drawer={appDrawer} />,
    'PANEL'  : <PanelPage drawer={appDrawer} />
  }

  return (
    <Tatami title="Zendo" pages={pages} init="PANEL" menu={appMenu}/>
  );

}

export default Application;
