import React from 'react';

// components
import { Icon, Picon, Header, Menu } from 'seito';

// styles
import './toolbar.scss';

// ToolBar Component
class ToolBar extends React.Component {

  state = {
    menu: false,
    hide: false,
  }

  toggleMenu = () => {
    this.setState({ menu: !this.state.menu });
  }

  toggleHide = () => {
    this.setState({ hide : !this.state.hide });
  }

  render() {

    const options = this.props.menu ? this.props.menu : this.props.userMenu ? this.props.userMenu : '';
    const menu = this.state.menu ? <Menu className="ctxMenu" title={this.props.title} options={options} goto={this.props.goto} toggle={this.toggleMenu}/> : '';
    const menuToggleButton = this.props.menu ? <Icon icon="more_vertical" action={this.toggleMenu}/> : '';
    const userMenuToggleButton = this.props.userMenu ? <Picon src="https://randomuser.me/api/portraits/thumb/men/3.jpg" action={this.toggleMenu}/> : '';

    const hidden = this.props.hidden ? 'hidden' : '';
    const action = this.props.action ? this.props.action : this.props.toggleDrawer;

    return (
      <Header className={`toolbar ${hidden} ${this.props.className}`} icon={this.props.icon} title={this.props.title} action={action} onMouseUp={this.toggleHide}>
        {this.props.children}
        {menuToggleButton}
        {this.props.actions}
        {userMenuToggleButton}
        {menu}
      </Header>
    )
  }
}

export default ToolBar;
