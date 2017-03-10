import React from 'react';
import Hammer from 'react-hammerjs';

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

  render() {
    const drawer      = this.props.drawer ? React.cloneElement(this.props.drawer, { onToggleDrawer: this.toggleDrawer }) : '';
    const drawerState = this.state.drawer ? 'active' : '';
    const aside       = this.props.drawer ? <aside className={`${drawerState}`} onMouseUp={this.toggleDrawer} >{drawer}</aside> : '';
    const page        = this.props.page   ? React.cloneElement(this.props.page  , { toggleDrawer: this.toggleDrawer, toggleDialog: this.toggleDialog }): '';
    const appIcon     = this.props.icon   ? this.props.icon : 'menu';
    const toolbar     = this.props.fullscreen ? '' : <ToolBar className="appBar" icon={appIcon} title={this.props.title} goto={this.props.goto} toggleDrawer={this.toggleDrawer} menu={this.props.menu} hidden={this.state.hidetoolbar}/>;
    return (
      <div className="screen">
        {toolbar}
        <main className="contentArea" >
          {aside}
          {page}
        </main>
        <footer className="bottomBar"></footer>
        {this.renderDialog()}
      </div>
    )
  }
}

/**

  handlePan = (event) => {

    console.log(event.deltaY, this.state.hidetoolbar)

    if (event.deltaY > 0 && this.state.hidetoolbar) {
      this.toggleToolbar(false);
    }

    if (event.deltaY <0 && !this.state.hidetoolbar) {
      this.toggleToolbar(true);
    }
  }

const hammerOptions = {
touchAction:'compute',
recognizers: {
pan: { direction: 24, threshold: 300 }
}
};


<Hammer onPan={this.handlePan} options={hammerOptions}>

</Hammer>

**/

export default Screen;
