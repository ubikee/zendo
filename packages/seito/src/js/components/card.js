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
  return (
    <Card className="hcard">
      <div className="image">
        <img height="110%" src={props.src} alt="150x200"/>
      </div>
      <div className="content">
        <Header icon={props.icon} title={props.title}><Icon icon='close'/></Header>
        {props.children}
      </div>
    </Card>
  )
}

export { Card, HCard }
