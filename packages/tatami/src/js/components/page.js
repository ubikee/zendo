import React from 'react';

// styles
import './page.scss'

// Page Component
const Page = (props) => {
  return (
    <div className={`page ${props.className}`} onDragOver={props.onDragOver}>
      {props.children}
    </div>
  )
}

export default Page;
