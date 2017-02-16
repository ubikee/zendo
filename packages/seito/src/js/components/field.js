import React from 'react';
import Icon from './icon';
import Validator from '../validator';

import './field.scss';

const FieldFactory = (WField) => {

  return class FieldBox extends React.Component {

    static propTypes = {
      id: React.PropTypes.string,
      icon: React.PropTypes.string,
      type: React.PropTypes.string,
      label: React.PropTypes.string,
      actions: React.PropTypes.array, // [ { icon: '...', action: {handler}}, ... ]
      readOnly: React.PropTypes.bool,
      required: React.PropTypes.bool,
    }

    static defaultProps = {
      type: 'text',
      label: null,
      actions: [],
      readOnly: false,
      required: false,
    }

    handleChange = (id, newValue) => {
      this.props.onChange(id, newValue);
    };

    handleClear = () => {
      this.handleChange(this.props.id, "");
    }

    render() {
      const icon = this.props.icon ? <Icon icon={this.props.icon} /> : '';
      const text = this.props.required ? `* ${this.props.label}` : this.props.label;
      const label = this.props.label ? <label htmlFor={this.props.id}>{text}</label> : '';
      const clearIcon = Validator.notEmpty(this.props.value) ? <Icon icon="close" className="small" action={this.handleClear}/> : '';
      const actions = this.props.readOnly === true ? [] : [clearIcon];
      return (
        <div className={`field ${this.props.className}`}>
          <div className="icon-box">{icon}</div>
          <div className={`field-box`}>
            <WField {...this.props} onChange={this.handleChange}/>
            {label}
          </div>
          <div className="actions-box">{actions}</div>
        </div>
      )
    }
  }
}

const Field = ({id, type='text', value, required, onChange, readOnly }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  const notEmpty = value && value.length > 0 ? 'notEmpty' : '';
  const decorator = readOnly ? 'readOnly' : '';
  return (
    <input id={id} type={type} value={value} onChange={handleChange} required={required} className={`${notEmpty} ${decorator}`} readOnly={readOnly}/>
  )
}


const Select = (props) => {

  const renderOption = (option) => {
    return (
      <option value={option.value}>{option.label}</option>
    )
  }

  const renderSelect = (props) => {
    return (
      <select required={props.required} disabled={props.disabled} value={props.value}>
        {props.options.map(renderOption)}
      </select>
    )
  }

  return props.readOnly ? Field(props) : renderSelect(props);
}

const FField = FieldFactory(Field);
const FSelect = FieldFactory(Select);
export { FField as Field, FSelect as Select };
