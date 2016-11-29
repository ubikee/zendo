import React from 'react';

// components
import List from './components/list';
import Drawer from './components/drawer';
import UserInfo from './components/user';

/**
 * Application Drawer
 */
const AppDrawer = (props) => {

  const menu = [
    { id: 'CAMPAIGNS',    title: 'Campañas',           subtitle: '...', icon: 'card_giftcard',  area: "" },
    { id: 'DOSSIERS',     title: 'Dossiers Publicos',  subtitle: '...', icon: 'cloud_done',     area: "" },


    { id: 'MYDOSSIERS',   title: 'Mis Dossiers',       subtitle: '...', icon: 'folder_shared',  area: "Bandeja" },
    { id: 'PUBLIC',       title: 'Compartido Conmigo', subtitle: '...', icon: 'people',         area: "Bandeja" },
    { id: 'RECENT',       title: 'Importantes',        subtitle: '...', icon: 'folder_special', area: "Bandeja" },
    { id: 'ARCHIVED',     title: 'Archivados',         subtitle: '...', icon: 'archive',        area: "Bandeja" },
    { id: 'BIN',          title: 'Papelera',           subtitle: '...', icon: 'delete',         area: "Bandeja" },

//    { id: 'ESCAPARATES',  title: 'Escaparates',        subtitle: '...', icon: 'map',            area: "Tipos" },
//    { id: 'AMBIENTACION', title: 'Ambientaciones',     subtitle: '...', icon: 'map',            area: "Tipos" },

    { id: 'CAMPAIGNS',    title: 'Configuración',      subtitle: '...', icon: 'settings',       area: "." },
    { id: 'DOSSIERSS',    title: 'Ayuda',              subtitle: '...', icon: 'help',           area: "." },
  //  { id: 'PROMOTIONS', title: 'Campañas',    subtitle: '...', icon: 'card_giftcard', area: "Contenidos"  },
  //  { id: 'DOSSIERS',   title: 'Dossiers',    subtitle: '...', icon: 'folder_open',   area: "Contenidos"  },
  //  { id: 'IMAGES',     title: 'Imagenes',    subtitle: '...', icon: 'photo_library', area: "Contenidos"  },
  //  { id: 'TEMPLATES',  title: 'Plantillas',  subtitle: '...', icon: 'grid_on',       area: "Contenidos"  },
  ]

  const handleMenuItemSelected = (id) => {
    props.onSelection(id);
  }

  return (
    <Drawer icon="cloud_queue" title="iDossiers" onToggleDrawer={props.onToggleDrawer}>
      <UserInfo fullname="Google inc." role="Sundar Pichai" email="spichai@gmail.com"/>
      <List data={menu} onSelected={handleMenuItemSelected} sortBy={false} groupBy="area" selected={props.selected}/>
    </Drawer>
  )
}

export default AppDrawer;
