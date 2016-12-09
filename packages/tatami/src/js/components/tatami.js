import React from 'react'

//components
import Screen from './screen';

/**
 * Tatami
 */
class Tatami extends React.Component {

  state = {
    page: null,
    ctx: null,
  }

  componentWillMount() {
    this.navigate(this.props.init);
  }

  canNavigateTo = (newPageID) => {
    const nextPage = this.props.pages[newPageID];
    return nextPage && (!nextPage.props.private || session.isLoggedIn());
  }

  navigate = (newPageID, params) => {
    const nextPageID = this.canNavigateTo(newPageID) ? newPageID : 'LOGIN';
    const nextPage = this.props.pages[nextPageID];
    if (nextPage.props.inputAction) {
      nextPage.props.inputAction(params, (nextCtx) => {
        this.setState({ page: nextPageID, ctx: nextCtx });
      });
    } else {
      this.setState({ page: nextPageID });
    }
  }

  onExit = (event) => {
    session.logout();
    this.gotoPage('LOGIN');
  }

  render() {
    const page = React.cloneElement(this.props.pages[this.state.page], { ctx: this.state.ctx, goto: this.navigate, onExit: this.onExit });
    const drawer = page.props.drawer ? React.cloneElement(page.props.drawer, { goto: this.navigate }) : '';
    return (
      <Screen title={this.props.title} page={page} drawer={drawer} />
    );
  }
}

export default Tatami
