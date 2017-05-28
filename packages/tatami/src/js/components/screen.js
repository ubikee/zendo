import React from 'react';

// components
import ToolBar from './toolbar';
import  { Icon, Picon, Micon, Menu, SearchBox  } from 'seito';

// css
import './screen.scss';

/**
 * Screen component
 */
class Screen extends React.Component {

  state = {
    toolbar: true,
    drawer: false,
    drawer_min: false,
    info: false,
    footer: false,
    dialog: false,
  }

  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  }

  toggleDrawerMin = () => {
    this.setState({ drawer_min: !this.state.drawer_min });
  }

  toggleToolbar = (value) => {
    const toolbar = value != null ? value : !this.state.toolbar;
    this.setState({ toolbar });
  }

  toggleInfo = () => {
    this.setState({ info: !this.state.info });
  }

  toggleDialog = (dialog) => {
    this.setState({ dialog });
  }

  renderToolbar = () => {
    const appIcon = this.props.icon ? this.props.icon : 'menu';
    return this.props.fullscreen ? '' : (
      <ToolBar
        className="appBar"
        icon={appIcon}
        title={this.props.title}
        toggleDrawer={this.toggleDrawer}
        toggleInfo={this.toggleInfo}
        hidden={!this.state.toolbar}>
        
        <Micon src={this.props.avatar}>
          <Menu title={this.props.title} options={this.props.menu} goto={this.props.goto} toggle={this.toggleMenu}/>
        </Micon>
      </ToolBar>
    );
  }

  renderDrawer = () => {
      const stopEvent = (event) => {
        event.stopPropagation();
      }
    const drawer      = this.props.drawer ? React.cloneElement(this.props.drawer, { onToggleDrawer: this.toggleDrawer, minimized: this.state.drawer_min }) : '';
    const drawerState = this.state.drawer ? 'active' : '';
    const minButton   = this.state.drawer_min ? 'keyboard_arrow_right' : 'keyboard_arrow_left';
    const minimized   = this.state.drawer_min ? 'minimized' : '';
    return this.props.drawer ? (
      <aside className={`${drawerState}`} onMouseUp={this.toggleDrawer} >
        {drawer}
        <div className={`drawer_toolbar ${minimized}`} onMouseUp={stopEvent}>
          <Icon icon={minButton} action={this.toggleDrawerMin} className="clickable"/>
        </div>
      </aside>
    ) : '';
  }

  renderInfo = () => {
    const infoState = this.state.info ? 'active' : '';
    const info = this.props.info ? React.cloneElement(this.props.info, { onToggleDrawer: this.toggleDrawer }) : '';
    return (
      <aside className={`${infoState}`} onMouseUp={this.toggleInfo} >
        {info}
      </aside>
    );
  }

  renderDialog = () => {
    return this.state.dialog ? <div className="overlay">{this.state.dialog}</div> : '';
  }

  render() {
    const page    = this.props.page   ? React.cloneElement(this.props.page  , { toggleDrawer: this.toggleDrawer, toggleDialog: this.toggleDialog, toggleInfo: this.toggleInfo }): '';
    const footer  = '';
    return (
      <div className="screen">
        {this.renderToolbar()}
        <main className="contentArea" >
          {this.renderDrawer()}
          {page}
          {this.renderInfo()}
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
