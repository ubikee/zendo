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
    this.props.onChange(id);
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

const Stack = (props) => {
  const selected = props.selected ? props.selected : 0;
  const child = React.Children.toArray(props.children).filter((child, index) => {
    return index === selected;
  })[0];
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem 4rem', justifyContent: 'center'}}>
      {child}
    </div>
  )
}


export { Tabs, Tab, Stack }
