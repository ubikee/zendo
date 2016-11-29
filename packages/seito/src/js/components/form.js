import React from 'react';
import './form.scss';

const Form = (props) => {
  const title = props.title ? <h4>{props.title}</h4> : '';
  return (
    <div className="formu">
      {title}
      <div className="fieldset">
        {props.children}
      </div>
    </div>
  )
}

export default Form;
