import React from 'react';
import Icon from './icon';
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

    render() {
      const icon = this.props.icon ? <Icon icon={this.props.icon} /> : '';
      const text = this.props.required ? `* ${this.props.label}` : this.props.label;
      const label = this.props.label ? <label htmlFor={this.props.id}>{text}</label> : '';
      const actions = [<Icon icon="close" className="small"/>]
      return (
        <div className="field">
          <div className="icon-box">{icon}</div>
          <div className="field-box">
            <WField {...this.props} onChange={this.handleChange}/>
            {label}
          </div>
          <div className="actions-box">{actions}</div>
        </div>
      )
    }
  }
}

const Field = ({id, type='text', icon, label, value, required, onChange }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  const notEmpty = value && value.length > 0 ? 'notEmpty' : '';
  return (
    <input id={id} type={type} value={value} onChange={handleChange} required={required} className={notEmpty}/>
  )
}

export default FieldFactory(Field);
