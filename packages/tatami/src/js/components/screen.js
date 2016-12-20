import React from 'react';

// components
import ToolBar from './toolbar';

// css
import './screen.scss';

/**
 * Screen component
 */
class Screen extends React.Component {

  state = {
    drawer: false,
    dialog: false,
  }

  toggleDialog = (dialog) => {
    this.setState({ dialog });
  }

  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer })
  }

  renderDialog = () => {
    return this.state.dialog ? <div className="overlay">{this.state.dialog}</div> : '';
  }

  render() {
    const drawer      = this.props.drawer ? React.cloneElement(this.props.drawer, { onToggleDrawer: this.toggleDrawer }) : '';
    const drawerState = this.state.drawer ? 'active' : '';
    const aside       = this.props.drawer ? <aside className={`${drawerState}`} onMouseUp={this.toggleDrawer} >{drawer}</aside> : '';
    const page        = this.props.page   ? React.cloneElement(this.props.page  , { toggleDrawer: this.toggleDrawer, toggleDialog: this.toggleDialog }): '';
    const appIcon     = this.props.icon   ? this.props.icon : 'menu';
    return (
      <div className="screen">
        <ToolBar className="appBar" icon={appIcon} title={this.props.title} goto={this.props.goto} toggleDrawer={this.toggleDrawer} menu={this.props.menu}/>
        <main className="contentArea">
          {aside}
          {page}
        </main>
        <footer className="bottomBar"></footer>
        {this.renderDialog()}
      </div>
    )
  }
}

export default Screen;
