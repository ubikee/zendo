import React from 'react';
import './tab.scss';

class Tabs extends React.Component {

  static defaultProps = {
    selected: 0,
  }

  state = {
    selected: this.props.selected,
  }

  toggleTab = (id) => {
    this.setState({ selected: id });
  }

  render() {
    const tabs = React.Children.map(this.props.children, (child, index) => {
      const onSelection = () => {
        this.toggleTab(index);
      }
      const selected = index === this.state.selected;
      return React.cloneElement(child, { onSelection, selected });
    });

    return (
      <div className="tabs">
        {tabs}
      </div>
    )
  }
}

const Tab = (props) => {
  const onSelection = () => {
    props.onSelection(props.id);
  }
  const selected = props.selected ? 'selected' : '';
  return (
    <span key={props.id} className={`tab ${selected} ${props.className}`} onMouseUp={onSelection}>
      {props.label}
    </span>
  )
}

export { Tabs, Tab }
