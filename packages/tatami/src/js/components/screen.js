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
    const drawer = this.props.drawer ? React.cloneElement(this.props.drawer, { onToggleDrawer: this.toggleDrawer }) : '';
    const aside = this.props.drawer ? <aside className={`${drawerState}`} onMouseUp={this.toggleDrawer} >{drawer}</aside> : '';
    const page   = this.props.page   ? React.cloneElement(this.props.page  , { toggleDrawer: this.toggleDrawer, toggleDialog: this.toggleDialog }): '';
    const drawerState = this.state.drawer ? 'active' : '';
    return (
      <div className="screen">
        <ToolBar className="appBar" icon="cloud" title={this.props.title} toggleDrawer={this.toggleDrawer} />
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
