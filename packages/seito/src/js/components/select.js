import React from 'react';

/**
 * Select
 */
const Select = ({id, label, options, required, value, className, onChange }) => {

  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  const text = required ? `* ${label}` : label;
  const renderLabel = label ? <label>{text}</label> : '';
  return (
    <div className="select">
      {renderLabel}
      <select className={`${className}`} onChange={handleChange} value={value}>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
}

export default Select;
