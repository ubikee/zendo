import React from 'react';

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

  renderDialog = (props) => {
    return props.dialog ? <div className="overlay">{props.dialog}</div> : '';
  }

  render() {
    const drawer = this.props.drawer ? React.cloneElement(this.props.drawer, { onToggleDrawer: this.toggleDrawer }) : '';
    const drawerState = this.state.drawer === true ? 'active' : '';
    const page = this.props.page ? React.cloneElement(this.props.page, { onToggleDialog: this.toggleDialog, onToggleDrawer: this.toggleDrawer }): '';
    return (
      <div className="screen">
        <main>
          <aside className={`animated ${drawerState}`} onMouseUp={this.toggleDrawer} >{drawer}</aside>
          <div className="content">{page}</div>
        </main>
        <footer>footer</footer>
        {this.renderDialog(this.props)}
      </div>
    )
  }
}

export default Screen;
