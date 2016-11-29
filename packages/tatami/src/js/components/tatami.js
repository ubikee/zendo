import React from 'react'

//components
import Screen from './screen';

/**
 * Tatami
 */
class Tatami extends React.Component {

  state = {
    page: null,
  }

  componentWillMount() {
    this.navigate(this.props.init);
  }

  canNavigateTo = (newPageID) => {
    const nextPage = this.props.pages[newPageID];
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
    const drawer = this.props.drawer ? this.props.drawer : '';
    const page = React.cloneElement(this.props.pages[this.state.page], { goto: this.navigate, onClose: this.onClose });
    return (
      <Screen page={page} drawer={drawer}/>
    );
  }
}

export default Tatami
