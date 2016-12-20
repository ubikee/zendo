import React from 'react';

//components
import { Button, PAnel } from 'seito';

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
    <Panel icon={icon} title={title} actions={actions} className="window dialog">
      <div className="message">{children}</div>
      <div className="buttons">
        <Button label="CANCEL" className="accent" action={handleCancel}/>
        <Button label="OK" className="accent" action={handleOK}/>
      </div>
    </Panel>
  )
}

export { ConfirmDialog }
