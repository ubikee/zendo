import React from 'react';
import AppBar from './appBar';

const Page = (props) => {
  const title = props.title ? <h3>{props.title}</h3> : '';
  return (
    <div className={`page ${props.className}`} onDragOver={props.onDragOver}>
      <AppBar icon="person" title="< page title >" className="secondaryBar"/>
      {title}
      {props.children}
    </div>
  )
}

export default Page;
