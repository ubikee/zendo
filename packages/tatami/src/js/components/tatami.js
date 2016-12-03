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

  navigate = (newPageID, me) => { console.log(newPageID, me)
    const nextPageID = this.canNavigateTo(newPageID) ? newPageID : 'LOGIN';
    const nextMe = me ? me : this.state.me;
    this.setState({ page: nextPageID });
  }

  onExit = (event) => {
    session.logout();
    this.gotoPage('LOGIN');
  }

  render() {
    const page = React.cloneElement(this.props.pages[this.state.page], { goto: this.navigate, onExit: this.onExit });
    const drawer = page.props.drawer ? React.cloneElement(page.props.drawer, { goto: this.navigate }) : '';
    return (
      <Screen title={this.props.title} page={page} drawer={drawer} />
    );
  }
}

export default Tatami
