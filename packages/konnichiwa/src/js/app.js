import React from 'react';

// components
import { Tatami, Drawer } from 'tatami';
import { Menu } from 'seito';

// pages
import { Login2, Exit, Wait } from 'tatami';
import Gallery from './pages/gallery';
import PanelPage from './pages/panel';
import FieldPage from './pages/field';
import ContainerPage from './pages/container';

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
    { id: 'CONTAINER', label: 'Containers', icon: 'keyboard_arrow_right' },
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

  const appDrawer = <Drawer>
                      <Menu title="Tatami" options={tatamiMenu} />
                      <Menu title="Pages" options={tatamiPages} />
                      <Menu title="Seito" options={seitoMenu} />
                    </Drawer>

  const infoDrawer =  <Drawer>
                        <Menu title="Tatami" options={tatamiMenu} />
                      </Drawer>

  const pages = {
    'LOGIN'  : <Login2 title="Zendo Konnichiwa"/>,
    'GALLERY': <Gallery title="Gallery" drawer={appDrawer} />,
    'PANEL'  : <PanelPage title="Panel" drawer={appDrawer} />,
    'FIELD'  : <FieldPage title="Field" drawer={appDrawer} />,
    'CONTAINER' : <ContainerPage title="Container" drawer={appDrawer} />
  }

  return (
    <Tatami title="Zendo" pages={pages} init="CONTAINER" menu={appMenu} drawer={appDrawer} info={infoDrawer}/>
  );

}

export default Application;
