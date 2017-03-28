import React from 'react';

// components
import ToolBar from './toolbar';
import  { Icon, Picon } from 'seito';

// css
import './screen.scss';

/**
 * Screen component
 */
class Screen extends React.Component {

  state = {
    drawer: false,
    dialog: false,
    toolbar: true,
    drawer2: false,
  }

  toggleDialog = (dialog) => {
    this.setState({ dialog });
  }

  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer });
  }

  toggleToolbar = (value) => {
    const toolbar = value != null ? value : !this.state.toolbar;
    this.setState({ toolbar });
  }

  toggleDrawer2 = () => {
    this.setState({ drawer2: !this.state.drawer2 });
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

  renderDrawer2 = () => {
    const drawerState = this.state.drawer2 ? 'active' : '';
    return (
      <aside className={`${drawerState}`} onMouseUp={this.toggleDrawer2} >
        <div className="drawer2">info panel </div>
      </aside>
    );
  }

  renderToolbar = () => {
    const appIcon = this.props.icon ? this.props.icon : 'menu';
    const actions = this.props.tools ? this.props.tools.map(tool => {
      return (<Icon icon={tool.icon} className="clickable" action={this.toggleDrawer2}/>)
    }) : [];
    return this.props.fullscreen ? '' : (
      <ToolBar
        className="appBar"
        icon={appIcon}
        title={this.props.title}
        userMenu={this.props.menu}
        actions={actions}
        goto={this.props.goto}
        toggleDrawer={this.toggleDrawer}
        hidden={!this.state.toolbar}>
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
          {this.renderDrawer2()}
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
