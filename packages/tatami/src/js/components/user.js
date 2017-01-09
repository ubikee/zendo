import React from 'react';
import './user.scss';

const User = (props) => {
  return (
    <div className="user">
      <div className="avatar">
          <img src={props.avatar} width="100%"/>
      </div>
      <div className="info">
        <div>{props.name}</div>
        <div>{props.role}</div>
        <div>{props.email}</div>
      </div>
    </div>
  )
}

export default User;
