import React from 'react';

// components
import { Icon } from './icon';
import Header  from './header';

import './panel.scss';

class Panel extends React.Component {

  static defaultProps = {
    collapsable: true,
    collapsed: true,
  }

  state = {
    collapsable: this.props.collapsable,
    open: !this.props.collapsed,
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const noicon = this.props.icon ? '' : 'noicon';
    const content = this.state.open ? this.props.children : '';
    const icon = this.state.open ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
    const toggleButton = this.state.collapsable ? <Icon icon={icon} action={this.toggle} className="clickable" /> : '';
    return (
      <div className={`panel ${this.props.className}`}>
        <Header className={`${noicon} ${this.props.className}`} title={this.props.title} icon={this.props.icon}>
          {this.props.actions}
          {toggleButton}
        </Header>
        <div className="content">
          {content}
        </div>
      </div>
    )
  }
}

export default Panel;
