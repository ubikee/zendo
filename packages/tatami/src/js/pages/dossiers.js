import React from 'react';

import Page from '../components/page';
import Header from '../components/header';
import Panel from '../components/panel';
import List from '../components/list';
import Icon from '../components/icon';
import Form from '../components/form';
import { Button } from '../components/button';
import { InfoField, Select } from '../components/field';
import { DossierCard } from '../components/dossiers';

// styles
import './upload.scss';

/**
 * Dossiers Page
 */
class Dossiers extends React.Component {

  render() {
    const appBar = <Header icon="cloud_upload" title="iSend"></Header>;

    return (
        <Page>
          <Header icon="menu" title="Dossiers" className="forPage" action={this.props.onToggleDrawer}>
            <Icon icon="more_vertical" />
          </Header>
          <div style={{ height: '100vh', maxWidth: '632px', overflow: 'auto', margin: '0 auto', padding:'4px'}}>
            {dossiers.map( dossier => {
              return (
                <DossierCard title={dossier.title} subtitle="<Nombre Campaña>" owner="<Nombre Propietario>"/>
              )
            })}
          </div>
        </Page>
    );
  }
}

const dossiers = [
  { id:1, title: '#Dossier 1', cells: ['received'],         subtitle: '01/12/2016' },
  { id:2, title: '#Dossier 2', cells: ['work in progress'], subtitle: '01/12/2016' },
  { id:3, title: '#Dossier 3', cells: ['work in progress'], subtitle: '01/12/2016' },
  { id:4, title: '#Dossier 4', cells: ['finished'],         subtitle: '01/12/2016' },
  { id:5, title: '#Dossier 1', cells: ['received'],         subtitle: '01/12/2016' },
  { id:6, title: '#Dossier 2', cells: ['work in progress'], subtitle: '01/12/2016' },
  { id:7, title: '#Dossier 3', cells: ['work in progress'], subtitle: '01/12/2016' },
  { id:8, title: '#Dossier 4', cells: ['finished'],         subtitle: '01/12/2016' },
  { id:9, title: '#Dossier 1', cells: ['received'],         subtitle: '01/12/2016' },
  { id:10, title: '#Dossier 2', cells: ['work in progress'], subtitle: '01/12/2016' },
  { id:11, title: '#Dossier 3', cells: ['work in progress'], subtitle: '01/12/2016' },
  { id:12, title: '#Dossier 4', cells: ['finished'],         subtitle: '01/12/2016' },
]

export default Dossiers;
