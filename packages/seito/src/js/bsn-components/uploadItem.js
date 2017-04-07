import React from 'react';
import { Icon } from '../components/index';
//import ReportDialog from '../dialogs/report';
import './uploadItem.scss'

const UploadListItem = (props) => {

  const renderers = {

    'LOADING': (props) => {
      return(
          <div className={`uploadlistitem loading`}>
            <span className="gauge"><Icon icon="file_upload"/></span>
            <span className="fileinfo">
              <span className="filename">{props.title}</span>
              <progress max="100" value={props.progress} style={{ width: '95%'}}/>
              <span className={`filestatus ${props.status}`}>{props.status}</span>
            </span>
          </div>
      )
    },

    'PENDING': (props) => {
      return (
          <div className={`uploadlistitem checking`}>
            <span className="gauge"><Icon icon="playlist_add_check"/></span>
            <span className="fileinfo">
              <span className="filename">{props.title}</span>
              <progress max="100" value={props.progress} style={{ width: '95%'}}/>
              <span className={`filestatus ${props.status}`}>CHECKING</span>
            </span>
          </div>
      )
    },

    'CORRECT': (props) => {
      const handleDownload = () => {

      }
      return (
          <div className={`uploadlistitem`}>
            <span className="thumbnail"><img src={props.thumb} width="60px"/></span>
            <span className="fileinfo">
              <span className="filename">{props.title}</span>
              <span className={`filestatus ${props.status}`}>
                <Icon icon="file_download" className="clickable" action={handleDownload}/>
                {props.status}
              </span>
            </span>
          </div>
      )
    },

    'ERROR': (props) => {

      const onClose = () => {
        props.toggleDialog(null);
      }

      const handleReport = () => {

        const report = {
          error : props.error,
          fileName : props.title,

        }
      //  props.toggleDialog(<ReportDialog report={report} onOK={onClose} onCancel={onClose} onClose={onClose} />)
      }

      return (
          <div className={`uploadlistitem`}>
            <span className="thumbnail"><img src={props.thumb} width="60px"/></span>
            <span className="fileinfo">
              <span className="filename">{props.title}</span>
              <span className={`filestatus ${props.status}`}>
                <Icon icon="assignment" className="clickable" action={handleReport}/>
                {props.status}
              </span>
            </span>
          </div>
      )
    }
  }

  console.log(props)

  return (
    <li style={{ display: 'block', margin: '0 1rem 0rem 1rem'}}>
        {renderers[props.status](props)}
    </li>
  )
}

export default UploadListItem;
