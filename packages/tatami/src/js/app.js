import React from 'react';

// components
import Screen from './components/screen';
import AppDrawer from './appDrawer';
import Header from './components/header';
import Icon from './components/icon';

// pages
import Login from './pages/login';
import Dossiers from './pages/dossiers';

// styles
import './app.scss';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

/**
 * Application
 */
class Application extends React.Component {

  state = {
    page: null,
  }

  componentWillMount() {
    this.navigate('LOGIN');
  }

  pages = {
    'LOGIN'    : <Login fullscreen={true}/>,
    'DOSSIERS' : <Dossiers />,
  }

  canNavigateTo = (newPageID) => {
    const nextPage = this.pages[newPageID];
    return nextPage && (!nextPage.props.private || session.isLoggedIn());
  }

  navigate = (newPageID, me) => {
    const nextPageID = this.canNavigateTo(newPageID) ? newPageID : 'LOGIN';
    const nextMe = me ? me : this.state.me;
    this.setState({ page: nextPageID });
  }

  onClose = (event) => {
    session.logout();
    this.gotoPage('LOGIN');
  }

  render() {
    const appDrawer = <AppDrawer />;
    const page = React.cloneElement(this.pages[this.state.page], { goto: this.navigate, onClose: this.onClose });
    return (
      <Screen drawer={appDrawer} pages={this.pages} page={page} />
    );
  }
}

export default Application;
