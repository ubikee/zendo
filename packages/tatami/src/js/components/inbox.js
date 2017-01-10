import React from 'react';
import { ToolBar } from './toolbar';
import { Icon, Header } from 'seito';
import './inbox.scss';

class Inbox extends React.Component {

  state = {
    viewer: false,
  }

  toggleView = () => {
    this.setState({ viewer: !this.state.viewer });
  }

  render() {
    const viewerClass = this.props.viewer ? 'show' : '';
    const title = this.props.viewer ? this.props.viewer.props.title: 'Job';
    return (
      <div className="inbox">
        <div className="list">
          {this.props.items}
        </div>
        <div className={`viewer ${viewerClass}`} onMouseUp={this.toggleView}>
          <Header icon="arrow_back" title={title}/>
          {this.props.viewer}
        </div>
      </div>
    )
  }
}

export default Inbox;
