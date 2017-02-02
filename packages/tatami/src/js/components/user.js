import React from 'react';
import { Icon } from 'seito';
import './user.scss';

const UserListItem = (props) => {
  const handlePrimaryAction = () => {
    console.log(props.id)
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
        <Icon icon="more_vert" />
      </div>
    </div>
  )
}

const User = (props) => {
  return (
    <div className="user">
      <div className="avatar">
        <img className="picture" src={props.avatar} width="100%"/>
      </div>
      <div className="info">
        <div className="title">{props.name}</div>
        <div className="subtitle">{props.info}</div>
      </div>
      <div className="actions">
        <Icon icon="arrow_drop_down" action={props.onSwitch}/>
      </div>
    </div>
  )
}

export { User, UserListItem };
