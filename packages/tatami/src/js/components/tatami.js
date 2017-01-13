import React from 'react'
import Session from '../stores/session';

//components
import Screen from './screen';

/**
 * Tatami
 */
class Tatami extends React.Component {

  static defaultProps = {
    page: 'WAIT'
  }

  state = {
    page: this.props.init,
    ctx : {},
    me : {},
  }

  componentWillMount() {
    this.navigate(this.props.init);
  }

  canNavigateTo = (newPageID) => {
    const nextPage = this.props.pages[newPageID];
    return nextPage && (!nextPage.props.private || session.isLoggedIn());
  }

  changeUser = (me) => {
    this.setState({ me });
  }

  navigate = (newPageID, params) => {
    console.log('TATAMI.navigate to ',newPageID)
    const nextPageID = this.canNavigateTo(newPageID) ? newPageID : 'LOGIN';
    const nextPage = this.props.pages[nextPageID];
    if (nextPage.props.inputAction) {
      nextPage.props.inputAction(params, (nextCtx) => {
        this.setState({ page: nextPageID, ctx: nextCtx });
      });
    } else {
      this.setState({ page: nextPageID, ctx: {} });
    }
  }

  render() {
    const nextPage = this.props.pages[this.state.page];
    const page     = React.cloneElement(nextPage, { ctx: this.state.ctx, goto: this.navigate, changeUser: this.changeUser, onExit: this.onExit });
    const drawer   = page.props.drawer ? React.cloneElement(page.props.drawer, { goto: this.navigate, user: this.state.me }) : '';
    const fullscreen = page.props.fullscreen;
    return (
      <Screen title={this.props.title} page={page} drawer={drawer} menu={this.props.menu} goto={this.navigate} fullscreen={fullscreen}/>
    );
  }
}

export default Tatami
