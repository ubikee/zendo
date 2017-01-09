import React from 'react'

//components
import Screen from './screen';

/**
 * Tatami
 */
class Tatami extends React.Component {

  state = {
    page: 'WAIT',
    ctx : {},
  }

  componentWillMount() {
    this.navigate(this.props.init);
  }

  canNavigateTo = (newPageID) => {
    const nextPage = this.props.pages[newPageID];
    return nextPage && (!nextPage.props.private || session.isLoggedIn());
  }

  navigate = (newPageID, params) => { console.log(newPageID)
    const nextPageID = this.canNavigateTo(newPageID) ? newPageID : 'LOGIN';
    const nextPage = this.props.pages[nextPageID]; console.log(nextPage.props)
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
    const page     = React.cloneElement(nextPage, { ctx: this.state.ctx, goto: this.navigate, onExit: this.onExit });
    const drawer   = page.props.drawer ? React.cloneElement(page.props.drawer, { goto: this.navigate }) : '';
    const fullscreen = page.props.fullscreen;
    return (
      <Screen title={this.props.title} page={page} drawer={drawer} menu={this.props.menu} goto={this.navigate} fullscreen={fullscreen}/>
    );
  }
}

export default Tatami
