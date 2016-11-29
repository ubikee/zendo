import React from 'react';

// components
import Icon from './icon';

// styles
import './field.scss';

/**
 * InfoField
 */
class InfoField extends React.Component {

  state = {
    value: this.props.value,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value != this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleKeyPress = (event) => {
    if (event.charCode === 13) {
      this.handleDone();
      this.handleBlur();
    }
  }

  handleChange = (e) => {
    const newValue = e.target.value;
    this.setState({ value: newValue });
  }

  handleBlur = (e) => {
    setTimeout(this.reset,150);
  }

  handleDone = () => {
    this.props.onChange(this.props.id, this.state.value);
  }

  reset = () => {
    this.setState({ value: this.props.value });
  }

  renderDoneButton = () => {
    return this.state.value != this.props.value ? <Icon icon="done" action={this.handleDone} /> : '';
  }

  render() {
    const icon = this.props.icon ? <Icon icon={this.props.icon} /> : '';
    return (
      <div className="info" onBlur={this.handleBlur}>
        {icon}
        <label className="info-label">{this.props.label}</label>
        <input className="info-value" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
        {this.renderDoneButton()}
      </div>
    )
  }

}

/**
 * Field
 */
const Field = ({id, type='text', label, value, required, onChange }) => {

  const handleChange = (e) => {
    onChange(e.target.id, e.target.value);
  };

  const text = required ? `* ${label}` : label;
  const notEmpty = value && value.length > 0 ? 'notEmpty' : '';

  return (
    <div className="field">
      <div className="field-box">
        <input id={id} type={type} value={value} onChange={handleChange} required={required} className={notEmpty}/>
        <label>{text}</label>
        <div className="field-line" />
      </div>
    </div>
  )
}

/**
 * Select
 */
const Select = ({id, label, options, required, value, onChange }) => {

  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  const text = required ? `* ${label}` : label;

  return (
    <div className="info">
      <label className="info-label">{text}</label>
      <select className="info-value" onChange={handleChange} value={value}>
        <option disabled selected value>...</option>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
    </div>
  )
}

/**
 * SearchBox
 */
const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <Icon icon="search" />
      <Field icon="filter" onChange={props.onChange}/>
    </div>
  )
}

export { Field, SearchBox, InfoField, Select };
