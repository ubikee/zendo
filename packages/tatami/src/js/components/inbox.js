import React from 'react';
import { Icon, Header } from 'seito';
import './inbox.scss';

class Inbox extends React.Component {
  render() {
    const viewerClass = this.props.viewer ? 'show' : '';
    const title = this.props.viewer ? this.props.viewer.props.title: 'Job';
    return (
      <div className="inbox">
        <div className="inboxlist">
          {this.props.items}
        </div>
        <div className={`inboxviewer ${viewerClass}`}>
          <Header icon="arrow_back" title={title} action={this.props.onCloseViewer}>{this.props.actions}</Header>
          {this.props.viewer}
        </div>
      </div>
    )
  }
}

const InboxItemWrapper = (WrappedItem) => {
  return class InboxItem extends React.Component {
    render() {
      const selected = this.props.selected ? 'selected' : '';
      return (
        <div className="inboxItemWrapper">
          <div className={`itemState ${selected}`}>.</div>
          <WrappedItem {...this.props}/>
        </div>
      )
    }
  }
}

export { Inbox, InboxItemWrapper };
