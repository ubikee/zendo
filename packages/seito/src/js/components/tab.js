import React from 'react';
import './tab.scss';

class Tabs extends React.Component {

  state = {
    selected: null,
  }

  render() {
    const tabs = React.Children.map(this.props.children, (child => React.cloneElement(child, { onSelection: this.toggleTab })));
    return (
      <div className="tabs">
        {tabs}
      </div>
    )
  }
}

const Tab = (props) => {
  return (
    <span className={`tab ${props.className}`} onMouseUp={props.onSelection}>
      {props.label}
    </span>
  )
}

export { Tabs, Tab }
