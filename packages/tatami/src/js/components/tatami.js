import React from 'react'
import Session from '../stores/session';

//components
import Screen from './screen';

class StateEngine {
    constructor(states) {
      this.actualState = null;
      this.states = states;
    }
    actualState = "";
    goto(stateID) {

    }
}

const StateType = (View, onEnter, onExit, transitions, constraints) => {
  return class State extends React.Component {
    static propTypes = {
      onEnter,
      onExit,
    }
    render() {
      return (
        <View {...this.props} />
      )
    }
  }
}

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
    const nextPage   = this.props.pages[this.state.page];
    const page       = React.cloneElement(nextPage, { ctx: this.state.ctx, goto: this.navigate, changeUser: this.changeUser, onExit: this.onExit });
    const title      = this.props.title      ? this.props.title      : '[App Title]';
    const drawer     = page.props.drawer     ? React.cloneElement(this.props.drawer, { goto: this.navigate, user: this.state.me }) : '';
    const menu       = this.props.menu       ? this.props.menu       : [];
    const fullscreen = page.props.fullscreen ? page.props.fullscreen : false;
    return (
      <Screen title={title} page={page} drawer={drawer} menu={menu} goto={this.navigate} fullscreen={fullscreen} tools={this.props.tools}/>
    );
  }
}

export default Tatami
