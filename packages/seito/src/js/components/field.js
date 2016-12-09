import React from 'react';
import Icon from './icon';
import './field.scss';

const Field = ({id, type='text', icon, label, value, required, onChange }) => {

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  };

  const text = required ? `* ${label}` : label;
  const notEmpty = value && value.length > 0 ? 'notEmpty' : '';

  return (
    <div className="field" style={{ flex: '1', margin: '16px 12px 8px 16px'}}>
      <Icon icon={icon} />
      <div className="field" style={{ flex: '1', marginLeft: '1rem'}}>
        <div className="field-box">
          <input id={id} type={type} value={value} onChange={handleChange} required={required} className={notEmpty}/>
          <label htmlFor={id}>{text}</label>
          <div className="field-line" />
        </div>
      </div>
    </div>
  )
}

export default Field;
