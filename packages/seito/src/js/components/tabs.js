import React from 'react';

// styles
import './tabs.scss';

/**
 * Tab
 */
const Tab = (props) => {
  const handleClick = () => {
    props.onMouseUp(props.id);
  }
  const icon = '';
  const label = props.label;
  const active = 'active';
  return (
    <label className={`tab ${active}`} onClick={handleClick}>
      {icon}{label}
    </label>
  );
}

/**
 * Tabs
 */
const Tabs = (props) => {

  const handleTabSelected = (id) => {
    props.onSelected(id);
  }

  const tabs = React.Children.map( props.children, (child) =>
    React.cloneElement(child, {
      active: props.selected === child.props.id,
      onMouseUp: handleTabSelected,
    }
  ));

  return (
    <div className='tabs'>{tabs}</div>
  );
};

export { Tabs, Tab };
