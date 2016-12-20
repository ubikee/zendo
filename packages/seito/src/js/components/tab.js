import React from 'react';
import './tab.scss';

const Tab = (props) => {
  return (
    <span className={`tab ${props.className}`}>
      {props.label}
    </span>
  )
}

export { Tab }
