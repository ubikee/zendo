import React from 'react';
import Icon from './icon.js';
import './panel.scss';

class Panel extends React.Component {

  static defaultProps = {
    open: true,
  }

  state = {
    icon: this.props.icon,
    open: this.props.open,
  }

  togglePanel = () => {
    const state = this.state.open === false ? true : false;
    this.setState({ open: state });
  }

  renderActions = (newActions) => {
    const actions = newActions? newActions : [];
    if (this.props.collapsable) {
      const toggleIcon = this.state.open === true ? 'keyboard_arrow_up' : "keyboard_arrow_down";
      actions.push({ icon: toggleIcon, do: this.togglePanel });
    }
    return actions ?
      <span className="actions">
        { actions.map( action => <Icon icon={action.icon} action={action.do} /> )}
      </span>
    : '';
  }

  renderContent = () => {
    return this.state.open === true ? (
      <div className="content">{this.props.children}</div>
    ) : null;
  }

  render() {
    return(
      <div className={`panel ${this.props.className}`}>
        <header>
          <Icon icon={this.state.icon}/>
          <span className="title">{this.props.title}</span>
          {this.renderActions(this.props.actions)}
        </header>
        {this.renderContent()}
      </div>
    );
  }
}

export default Panel;
