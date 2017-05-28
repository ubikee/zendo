import React from 'react';
import './container.scss';

const Row = (props) => {
  const right = props.right? 'right' : '';
  return (
    <div className={`row ${right} ${props.className}`}>{props.children}</div>
  )
}

const Column = (props) => {
  return (
    <div className={`column  ${props.className}`}>{props.children}</div>
  )
}

const Grid = (props) => {
  const style = {
    gridTemplateColumns: props.columns
  }
  return (
    <div className={`grid ${props.className}`} style={style}>{props.children}</div>
  )
}

export { Row, Column, Grid }
