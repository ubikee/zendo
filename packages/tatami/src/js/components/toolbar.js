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
    const menu = this.state.menu ? <Menu className="ctxMenu" options={this.props.menu}/> : '';
    return (
      <Header className={`${this.props.className}`} icon={this.props.icon} title={this.props.title} action={this.props.toggleDrawer}>
        <Icon icon="more_vertical" action={this.toggleMenu}/>
        {menu}
      </Header>
    )
  }
}

export default ToolBar;
