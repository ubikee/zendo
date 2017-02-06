import React from 'react';
import Icon from './icon';
import Panel from './panel';
import Hammer from 'react-hammerjs';
import Collections from '../collections';

import './list.scss';

const Swapable = (WrappedItem, leftActions, rightActions) => {

  return class SwapItem extends React.Component {

    state = {
      pan: 1, // 0 swapped left, 1 no-swap, 2 swapped right
    }

    handleSwapLeft = () => {
      this.setState({ swapped: this.state.swapped + 1 })
    }

    handleSwapRight = () => {
      this.setState({ swapped: this.state.swapped - 1 })
    }

    handlePan = (event) => {
      const nextPan = event.srcEvent.type === 'pointerup' ? 1 : 0;
      const shiftX = Math.abs(event.deltaX) < 100 ? event.deltaX : this.state.shiftX;
      this.setState({ pan: nextPan, shiftX: shiftX });
    }

    render() {

      const hammerOptions = {
        touchAction:'compute',
        recognizers: {
          pan: { direction: 6  }
        }
      };

      const panStyles = {
        0: 'pan-left',
        1: 'no-pan',
        2: 'pan-right'
      }

      const panStyle = panStyles[this.state.pan];

      const itemStyle = {
        left: this.state.shiftX
      }

      return (
        <Hammer onPan={this.handlePan} options={hammerOptions}>
          <div className={`listitem panable ${panStyle}`}>
            <div className="leftActions">{leftActions}</div>
            <div className="item" style={itemStyle}>
              <WrappedItem {...this.props} />
            </div>
            <div className="rightActions">{rightActions}</div>
          </div>
        </Hammer>
      )
    }
  }
}

const defaultListItemRenderer = ({item, onSelection}) => {

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
    icon: item.action ? item.action.icon : '',
    action: item.action ? item.action.do : '',
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
          <span className="info0" style={{ display: 'flex', alignItems: 'center'}}>{content.info}</span>
        </span>
        <span className="secondaryAction">
          <Icon icon={secondaryAction.icon} />
        </span>
      </li>
  )
}


const SimpleListItem = (props) => {
  const handlePrimaryAction = () => {
    props.onSelection(props);
  }
  const initial = props.title ? props.title[0] : '-' ;
  const avatar = props.avatar ? <img src={props.avatar} /> : <div>{initial}</div>
  return (
    <div className="userlistitem">
      <div className="avatar" onMouseUp={handlePrimaryAction}>{avatar}</div>
      <div className="content" onMouseUp={handlePrimaryAction}>
        <span className="line1">{props.title}</span>
        <span className="line2">{props.subtitle}</span>
        <span className="line3">{props.description}</span>
      </div>
      <div className="actions">

      </div>
    </div>
  )
}

const List = (props) => {
  const data = props.groupBy ? Collections.groupBy(props.data, props.groupBy) : props.data;
  const Renderer = props.renderer ? props.renderer : defaultListItemRenderer;
  const items = data ? data.map(item => {
    return item.grouper ?
      <li className="grouper" style={{ position: 'sticky', top: '0px', backgroundColor: 'white', display: 'block', height: '2.5rem' }}>{item.title}</li> :
      <Renderer {...item} item={item} onSelection={props.onSelection} />
  }) : [];

  return (
    <ul className={`list ${props.className}`} data-header={props.title}>
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

  const collapsed = props.collapsed ? props.collapsed : true;

  const groups = props.data.map(group => {
    return (
      <Panel id={group.id} title={group.label} collapsed={collapsed}>
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


export { List, GroupList, Swapable, SimpleListItem };
