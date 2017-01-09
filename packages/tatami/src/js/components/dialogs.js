import React from 'react';

//components
import { Button, Panel } from 'seito';

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

  const actions = [{ icon: 'close', do: () => { onClose() }}];

  return (
    <Panel icon={icon} title={title}  className="window dialog" collapsed={false} collapsable={false}>
      <div className="message">{children}</div>
      <div className="buttons">
        <Button label="CANCEL" className="accent" action={handleCancel}/>
        <Button label="OK" className="accent" action={handleOK}/>
      </div>
    </Panel>
  )
}

export { ConfirmDialog }
