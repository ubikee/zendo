import React from 'react';
import { Button, Icon2, Field } from '../components/index';
import { UserListItem } from './user';
import './comment.scss';

const Comment = ({avatar, author, time, description, children}) => {
  return (
    <div className="comment">
      <UserListItem avatar={avatar} title={author} subtitle={time} description={description}/>
      <p>{children}</p>
    </div>
  )
}

const CommentBox = ({avatar}) => {
  return (
    <div className="commentBox">
      <div className="avatar"><img src={avatar}/></div>
      <Field id="comment" label="añade un comentario" />
      <Button className="accent" label={<Icon2 icon="keyboard_return" />} />
    </div>
  )
};

export { Comment, CommentBox};
