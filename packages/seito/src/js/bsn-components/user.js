import React from 'react';
import { Icon } from '../components/index';
import './user.scss';

const UserTag = (props) => {
  const handlePrimaryAction = () => {
    props.onSelection(props);
  }
  const initial = props.title ? props.title[0] : '-' ;
  const avatar = props.avatar ? <img src={props.avatar} /> : <div>{initial}</div>
  return (
    <div className="usertag">
      <div className="avatar" onMouseUp={handlePrimaryAction}>{avatar}</div>
      <div className="content" onMouseUp={handlePrimaryAction}>
        <span className="line1">{props.title}</span>
        <span className="line2">{props.subtitle}</span>
      </div>
    </div>
  )
}

const UserListItem = (props) => {
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

const User = ({avatar, name, info, onSwitch}) => {
  return (
    <div className="user">
      <div className="avatar">
        <img className="picture" src={avatar} width="100%"/>
      </div>
      <div className="info">
        <div className="title">{name}</div>
        <div className="subtitle">{info}</div>
      </div>
      <div className="actions">
        <Icon icon="arrow_drop_down" action={onSwitch}/>
      </div>
    </div>
  )
}

const UserHeader = ({avatar, name, info, onSwitch}) => {
  return (
    <div className="userHeader">
      <div className="avatar">
        <img className="picture" src={avatar} width="100%"/>
      </div>
      <div className="info">
        <div className="title">{name}</div>
        <div className="subtitle">{info}</div>
      </div>
      <div className="actions">
        <Icon icon="arrow_drop_down" action={onSwitch}/>
      </div>
    </div>
  )
}
export { User, UserHeader, UserListItem, UserTag };
