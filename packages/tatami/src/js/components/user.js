import React from 'react';
import { Icon } from 'seito';
import './user.scss';

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

export default User;
