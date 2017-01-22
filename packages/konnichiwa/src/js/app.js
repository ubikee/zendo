import React from 'react';

// components
import { Tatami, Drawer } from 'tatami';
import { Menu } from 'seito';

// pages
import { Login, Exit, Wait } from 'tatami';
import Gallery from './pages/gallery';
import PanelPage from './pages/panel';
import FieldPage from './pages/field';


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

  const tatamiPages = [
    { id: 'LOGIN' , label: 'Login' , icon: 'people' },
  ]

  const seitoMenu = [
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
                      <Menu title="Tatami" options={tatamiMenu} />
                      <Menu title="Pages" options={tatamiPages} />
                      <Menu title="Seito" options={seitoMenu} />
                    </Drawer>

  const pages = {
    'LOGIN'  : <Login title="Zendo Konnichiwa"/>,
    'GALLERY': <Gallery title="Gallery" drawer={appDrawer} />,
    'PANEL'  : <PanelPage title="Panel" drawer={appDrawer} />,
    'FIELD'  : <FieldPage title="Field" drawer={appDrawer} />
  }

  return (
    <Tatami title="Zendo" pages={pages} init="FIELD" menu={appMenu} drawer={appDrawer}/>
  );

}

export default Application;
