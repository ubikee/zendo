import React from 'react';
import Icon from './icon';
import Header from './header';
import './card.scss';

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  )
}

const HCard = (props) => {

  const image = props.image ? (
    <div className="image">
      <img height="110%" src={props.image} alt="150x200"/>
    </div>
  ) : '';

  const caption = props.caption ? <div className="caption">{props.caption}</div> : '';
  return (
    <Card className={`hcard ${props.className}`}>
      {image}
      <div className="content">
        {caption}
        {props.children}
      </div>
    </Card>
  )
}

export { Card, HCard }
