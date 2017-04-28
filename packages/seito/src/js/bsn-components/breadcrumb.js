import React from 'react';
import './breadcrumb.scss';

const BreadCrumb = (props) => {
    return (
      <div className="breadcrumb">
        {props.children}
      </div>
    )
}

export default BreadCrumb;
