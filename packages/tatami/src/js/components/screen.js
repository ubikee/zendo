import React from 'react';

// components
import ToolBar from './toolbar';
import  { Picon } from 'seito';

// css
import './screen.scss';

/**
 * Screen component
 */
class Screen extends React.Component {

  state = {
    drawer: false,
    dialog: false,
    hidetoolbar: false,
  }

  toggleDialog = (dialog) => {
    this.setState({ dialog });
  }

  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  }

  toggleToolbar = (value) => {
    const hidetoolbar = value != null ? value : !this.state.toolbar;
    this.setState({ hidetoolbar });
  }

  renderDialog = () => {
    return this.state.dialog ? <div className="overlay">{this.state.dialog}</div> : '';
  }

  renderDrawer = () => {
    const drawer      = this.props.drawer ? React.cloneElement(this.props.drawer, { onToggleDrawer: this.toggleDrawer }) : '';
    const drawerState = this.state.drawer ? 'active' : '';
    return this.props.drawer ? (
      <aside className={`${drawerState}`} onMouseUp={this.toggleDrawer} >{drawer}</aside>
    ) : '';
  }

  renderToolbar = () => {
    const appIcon = this.props.icon ? this.props.icon : 'menu';
    return this.props.fullscreen ? '' : (
      <ToolBar className="appBar" icon={appIcon} title={this.props.title} goto={this.props.goto} toggleDrawer={this.toggleDrawer} hidden={this.state.hidetoolbar} userMenu={this.props.menu}>
      </ToolBar>
    );
  }

  render() {
    const aside   = this.props.drawer ? this.renderDrawer() : '';
    const page    = this.props.page   ? React.cloneElement(this.props.page  , { toggleDrawer: this.toggleDrawer, toggleDialog: this.toggleDialog }): '';
    const footer  = '';
    return (
      <div className="screen">
        {this.renderToolbar()}
        <main className="contentArea" >
          {this.renderDrawer()}
          {page}
        </main>
        <footer className="bottomBar">
          {footer}
        </footer>
        {this.renderDialog()}
      </div>
    )
  }
}

export default Screen;
