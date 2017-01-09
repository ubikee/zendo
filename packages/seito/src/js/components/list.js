import React from 'react';
import Icon from './icon';
import Panel from './panel';

import './list.scss';

const defaultListItemRenderer = (item, onSelection) => {

  const id =  item.id;

  const content = {
    caption: item.caption,
    title: item.label || item.title,
    subtitle: item.subtitle,
    info: item.info,
    description: item.description,
  };

  const primaryAction = {
    icon: item.icon,
    action() {
      onSelection(item)
    },
  };

  const secondaryAction = {
    icon: 'close',
    action: null,
  }

  return (
      <li id={id} className={`listitem0`}>
        <span className="primaryAction" onClick={primaryAction.action}>
          <Icon icon={primaryAction.icon} />
          <span className="content">
            <span className="caption">{content.caption}</span>
            <span className="title">{content.title}</span>
            <span className="subtitle">{content.subtitle}</span>
          </span>
          <span className="info">{content.info}</span>
        </span>
        <span className="secondaryAction">
          <Icon icon={secondaryAction.action} />
        </span>
      </li>
  )
}

const List = (props) => {

  const renderer = props.renderer ? props.renderer : defaultListItemRenderer;

  const items = props.data.map(item => {
    return renderer(item, props.onSelection);
  });

  return (
    <ul className={`list ${props.className}`}>
      {items}
    </ul>
  )
}

/*
  GroupList

  @model = [
    { id: '1', label: 'group1', items: [ { id: '11', icon: 'person', label: 'item' } ]},
    { id: '2', label: 'group2', items: [ { id: '22', icon: 'person', label: 'item' } ]},
    { id: '3', label: 'group3', items: [ { id: '33', icon: 'person', label: 'item' } ]},
  ]

*/
const GroupList = (props) => {

  const handleItemPrimaryAction = (id) => {
    props.onPrimaryAction(id);
  }

  const groups = props.data.map(group => {
    return (
      <Panel id={group.id} title={group.label} collapsed={false}>
        <List data={group.items} onSelection={handleItemPrimaryAction}/>
      </Panel>
    )
  })

  return (
    <div className={`grouplist ${props.className}`}>
      {groups}
    </div>
  )
}


export { List, GroupList };
