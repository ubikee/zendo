import React from 'react';

// components
import { Icon } from './icon';

// styles
import './button.scss';

/**
 * Button
 */
const Button = (props) => {

  const handleMouseUp = (event) => {
    if (!props.disabled) props.action();
  }

  const disabled = props.disabled ? 'disabled' : '';
  console.log('button', props.disabled, disabled)

  return (
    <button className={`button ${disabled} ${props.className}`} onMouseUp={handleMouseUp}>{props.label}</button>
  )
}

/**
 * FAB
 */
const FAB = (props) => {
  return (
    <div className={`fab accent ${props.className}`} onMouseUp={props.action}><Icon icon={props.icon} /></div>
  )
}

class FAM extends React.Component {
  state = {
    toggled: false
  }
  toggle = () => {
    this.setState({ toggled: !this.state.toggled});
  }
  render() {
    const icon = this.state.toggled ? "close" : "more_vert";
    const options =<div className="fam-menu">{this.props.children}</div>
    return (
      <div className="fam">
        {this.state.toggled ? options : null}
        <FAB icon={icon} action={this.toggle} />
      </div>
    )
  }
}

/**
 * Link
 */
const Link = (props) => {
  return (
    <div className={`link ${props.className}`} onMouseUp={props.action}>{props.label}</div>
  )
}

export { Button, FAB, FAM, Link };
