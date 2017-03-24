import React from 'react';
import { Icon } from './icon';
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
      <img src={props.image} />
    </div>
  ) : '';

  return (
    <Card className={`hcard ${props.className}`}>
      {image}
      <div className="content">
        {props.children}
      </div>
    </Card>
  )
}

export { Card, HCard }
