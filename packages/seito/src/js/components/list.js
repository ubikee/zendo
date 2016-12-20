import React from 'react';
import Icon from './icon';
import Panel from './panel';

import './list.scss';

const listControls = (props) => {
  const controls =  {
    //'thumb': <Thumb img={img} />,
    'icon'    : <Icon icon={icon} action={action} />,
    //'check'   : < >,
    //'switch'  : < >,
    //'reorder' : < >,
    //'collapse': < >,
  }
  return controls[props.type];
}

const listItem = ({ id, content, primaryAction, secondaryAction }) => {
  return (
      <li id={id} className={`listitem0`}>
        <span className="primaryAction" onClick={primaryAction.action}>
          <Icon icon={primaryAction.icon} />
          <span className="content">
            <span className="caption">{content.caption}</span>
            <span className="title">{content.title}</span>
            <span>{content.subtitle}</span>
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

  const handleItemPrimaryAction = (event) => {
    props.onSelection(item.id);
  }

  const items = props.data.map(item => {
    return listItem({
        id: item.id,
        content: {
          caption: item.caption,
          title: item.label,
          subtitle: item.subtitle,
          info: item.info,
        },
        primaryAction: {
          icon: item.icon,
          action: handleItemPrimaryAction,
        },
        secondaryAction: {
          icon: 'close',
          action: null,
        }
    });
  })

  console.log(items)

  return (
    <ul className={`list ${props.className}`}>
      {items}
    </ul>
  )
}

const List2 = (props) => {

  const items = props.data.map(item => {
    const handleClick = (event) => {
      props.onSelection(item.id);
    }
    return (
      <li id={item.id} className={`listitem`} onMouseUp={handleClick}>
        <Icon icon={item.icon} />
        <span className="label">{item.label}</span>
        <span className="action"></span>
      </li>
    )
  })

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
    const items = group.items.map( item => {
      return listItem({
        id: item.id,
        content: {
          caption: item.caption,
          title: item.label,
          subtitle: item.subtitle,
          info: item.info,
        },
        primaryAction: {
          icon: item.icon,
          action: handleItemPrimaryAction,
        },
        secondaryAction: {
          icon: 'close',
          action: null,
        }
      });
    });

    return (
      <Panel id={group.id} title={group.label} collapsed={false}>
        <ul className={`list ${props.className}`}>
          {items}
        </ul>
      </Panel>
    )
  });

  return (
    <div className={`grouplist ${props.className}`}>
      {groups}
    </div>
  )
}


export { List, GroupList };
