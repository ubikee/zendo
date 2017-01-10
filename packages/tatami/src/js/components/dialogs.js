import React from 'react';

//components
import { Icon, Button, Panel } from 'seito';

// style
import './dialogs.scss';

/**
 * Confirm Dialog
 */
const ConfirmDialog = ({icon, title, message, onOK, onCancel, onClose, children}) => {

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
        <Button label="OK" className="accent" action={handleOK}/>
      </div>
    </Panel>
  )
}

export { ConfirmDialog }
