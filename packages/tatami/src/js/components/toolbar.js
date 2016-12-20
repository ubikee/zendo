import React from 'react';

// components
import { Icon, Header, Menu } from 'seito';

// styles
import './toolbar.scss';

// ToolBar Component
class ToolBar extends React.Component {

  state = {
    menu: false
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const menu = this.state.menu ? <Menu className="ctxMenu" title={this.props.title} options={this.props.menu} goto={this.props.goto} toggle={this.toggleMenu}/> : '';
    const toggleButton = this.props.menu ? <Icon icon="more_vertical" action={this.toggleMenu}/> : '';
    return (
      <Header className={`${this.props.className}`} icon={this.props.icon} title={this.props.title} action={this.props.toggleDrawer}>
        {this.props.children}
        {toggleButton}
        {menu}
      </Header>
    )
  }
}

export default ToolBar;
