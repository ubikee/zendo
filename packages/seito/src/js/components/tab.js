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
    if (this.props.onChange)
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
      <div className={`tabs ${this.props.className}`}>
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
  const badge = props.info ? <span className="badge">{props.info}</span> : '';
  return (
    <span key={props.id} className={`tab ${selected} ${props.className}`} onMouseUp={onSelection}>
      {props.label}{badge}
    </span>
  )
}

const Stack = (props) => {
  const selected = props.selected ? props.selected : 0;
  const child = React.Children.toArray(props.children).filter((child, index) => {
    return index === selected;
  })[0];
  return (
    <div className="stack" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem 0 0 0'}}>
      {child}
    </div>
  )
}


export { Tabs, Tab, Stack }
