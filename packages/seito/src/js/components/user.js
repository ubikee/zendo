import React from 'react';

import './user.scss';

const User = ({avatar = 'user.png', role, fullname, email }) => {

  return (
    <div className="userinfo">

      <div className="picture">
        <div className="avatar">
          <img src={avatar} width="100%"/>
        </div>
      </div>
      <div className="text">
        <div className="role">{role}</div>
        <div className="name">{fullname}</div>
        <div className="email">{email}</div>
      </div>
    </div>
  )
}

export default User;
