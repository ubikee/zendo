import React from 'react';
import { Icon, HCard, SimpleListItem } from 'seito';
import './loader.scss'

const LoadCard = (props) => {

  const gconfig = (props) => {
    const config = {
      'PENDING' : { thumb: ''          , icon: 'file_upload', className: 'uploading', message: 'ANALIZING', color: '#090'},
      'ERROR'   : { thumb: props.thumb , icon: 'close'      , className: 'error'    , message: 'ERROR',     color: 'red'},
      'CORRECT' : { thumb: props.thumb , icon: ''           , className: 'done'     , message: 'OK',        color: '#2A2'},
    }
    return config[props.status];
  }

  const download = () => {
    alert()
  }

  const config = gconfig(props);

  const subtitle = (
    <div style={{ display: 'flex'}}>
      <span style={{ flex: 1}}></span>
      <span style={{ textTransform: 'toUpperCase', color: config.color, }}>{config.message}</span>
    </div>
  )

  const progressBar = props.status === 'PENDING' ? (
    <progress max="100" value="80" style={{ width: '100%'}}/>
  ) : false;

  const noIcon = props.status != 'PENDING';

  const error = props.error ? (
    <div>
      <h4>{props.error.type}:</h4>
      <p>{props.error.description}</p>
    </div>
  ) : false;

  const actions = props.status === 'CORRECT' ? (
      <Icon icon="file_download" action={download} clickable={true}/>
  ) : false;

  const description = progressBar || error ;

  return (
    <HCard className={`loader ${config.className}`} image={config.thumb}>
      <SimpleListItem icon={config.icon} title={props.title} description={description} noIcon={noIcon} actions={actions}/>
      {subtitle}
    </HCard>
  )
}

export { LoadCard }
