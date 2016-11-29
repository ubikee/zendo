import React from 'react';

// components
import Icon from './icon';
import { Link } from '../components/button';

// style
//import './list.scss';

/**
 * listitem
 **/
const ListItem = ({id, icon, thumbnail, title, subtitle, cells = [], actions, selected, onSelected, className}) => {

  const selectItem = () => {
    onSelected(id);
  }

  const renderIcon = icon ? <Icon icon={icon} action={selectItem}/> : null;
  const renderThumb = thumbnail ? <img className="thumbnail" src={thumbnail}/> : null;
  const selectedClassName = selected ? 'selected' : '';
  const renderActions = actions ? actions.map((action, index) => action.label ? <Link id={index} label={action.label} action={action.do} /> : <Icon id={index} icon={action.icon} action={action.do}/>) : null;

  return (
    <div key={id} className={`listitem ${className} ${selectedClassName}`}>
      {renderIcon}
      {renderThumb}
      <section onMouseUp={selectItem}>
        <div className="title"><span>{title}</span></div>
        {cells.map(cell => <div className="title">{cell}</div>)}
        <div className="subtitle">{subtitle}</div>
      </section>
      <section className="actions">
        {renderActions}
      </section>
    </div>
  );
};

/**
 * List
 *
 **/
const List = (props) => {

  const sort = (data, groupBy) => {
    return data.sort((a,b) => {
      return a[groupBy].localeCompare(b[groupBy]);
    });
  }

  const group = (data, groupBy) => {
    let grouped = {};
    data.forEach(item => {
      const key = item[groupBy];
      if (!grouped[key]) grouped[key] = new Array();
      grouped[key].push(item);
    })
    return grouped;
  }

  const renderGroups = (groups) => {
    return Object.keys(groups).map( key => {
      const values = groups[key];
      const items = values.map(renderItem);
      return (
        <div key={key} className="list-group">
          <header className="sticky-header">{key}</header>
          {items}
        </div>)
    })
  }

  const renderItem = (item) => {
    const selected = props.selected === item.id;
    return <ListItem
      key={item.id}
      id={item.id}
      icon={item.icon}
      thumbnail={item.thumbnail}
      title={item.title}
      cells = {item.cells}
      subtitle={item.subtitle}
      selected={selected}
      onSelected={props.onSelected}
      className={props.itemStyle}
      actions={item.actions}
    />
  }

  let items = null;
  if (props.groupBy) {
    const sorted = props.sortBy && props.groupBy ? sort(props.data, props.groupBy) : props.data;
    const grouped = group(props.data, props.groupBy);
    items = renderGroups(grouped);
  } else {
    items = props.data.map(renderItem);
  }

  const title = props.title ? <div className="title">{props.title}</div> : '';

  return (
    <div className="list">
      {title}
      {items}
    </div>
  );
};

export default List;
