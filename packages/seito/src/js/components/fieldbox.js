import React from 'react';
import { Icon } from 'seito';
import './fieldbox.scss';

const FieldBox = (props) => {
  const label = props.label ? <label htmlFor={props.id}>{props.label}</label> : '';
  const actions = [<Icon icon='close' size="tiny"/>]
  return (
    <div className={`field-box ${className}`}>
      <div className="icon-box">{icon}</div>
      <div className="field">
        {label}
        {props.children}
      </div>
      <div className="actions-box">{actions}</div>
    </div>
  )
}

FieldBox.propTypes = {
  id: React.PropTypes.string.required,
  icon: React.PropTypes.element,
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  actions: React.PropTypes.array, // [ { icon: '...', action: {handler}}, ... ]
  readOnly: React.PropTypes.bool,
  required: React.PropTypes.bool,
}

FieldBox.defaultProps = {
  type: 'text',
  label: null,
  actions: [],
  readOnly: false,
  required: false,
}
