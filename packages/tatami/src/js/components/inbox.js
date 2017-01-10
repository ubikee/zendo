import React from 'react';
import { Icon, Header } from 'seito';
import './inbox.scss';

class Inbox extends React.Component {
  render() {
    const viewerClass = this.props.viewer ? 'show' : '';
    const title = this.props.viewer ? this.props.viewer.props.title: 'Job';
    return (
      <div className="inbox">
        <div className="list">
          {this.props.items}
        </div>
        <div className={`viewer ${viewerClass}`}>
          <Header icon="arrow_back" title={title} action={this.props.onCloseViewer}/>
          {this.props.viewer}
        </div>
      </div>
    )
  }
}

export default Inbox;
