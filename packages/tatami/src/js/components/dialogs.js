import React from 'react';

//components
import { Icon, Button, Panel } from 'seito';

// style
import './dialogs.scss';

const Dialog = (props) => {

  const actionz = <Icon icon="close" action={props.onClose}/>

  return (
    <Panel icon={props.icon} title={props.title} className="window dialog" collapsed={false} collapsable={false} actions={actionz}>
      <div className="message">{props.children}</div>
    </Panel>
  )
}

/**
 * Confirm Dialog
 */
const ConfirmDialog = ({icon, title, message, onOK, canOK = true, onCancel, onClose, children}) => {

  const handleOK = () => {
    onOK();
  }

  const handleCancel = () => {
    onCancel();
  }

  const actionz = <Icon icon="close" action={onClose}/>

  return (
    <Panel icon={icon} title={title}  className="window dialog" collapsed={false} collapsable={false} actions={actionz} >
      <div className="message">{children}</div>
      <div className="buttons">
        <Button label="CANCEL"  action={handleCancel}/>
        <Button label="OK" className="primary" action={handleOK} disabled={!canOK}/>
      </div>
    </Panel>
  )
}

export { Dialog, ConfirmDialog }
