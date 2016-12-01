import React from 'react';

// components
import ToolBar from './toolbar';

// styles
import './page.scss'

// Page Component
const Page = (props) => {
  const title = props.title ? props.title : '<title>';
  return (
    <div className={`page ${props.className}`} onDragOver={props.onDragOver}>
      <ToolBar className="pageBar" icon={props.icon} title={title} />
      {props.children}
    </div>
  )
}

export default Page;
