import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, Tabs, Tab } from 'seito';

// styles
import './gallery.scss';

/**
 * Gallery Page
 */
const Gallery = (props) => {

  const renderTabs = () => {
    return (
      <Tabs className={`bottomShadow`}>
        <Tab label="INFO" />
        <Tab label="JOBS" />
      </Tabs>
    )
  }

    return (
      <Page  {...props}
        threshold={40}
        fixedHeader = {renderTabs()}
        scrollableHeader={renderTabs()}
        stickyHeader={renderTabs()}>

        <dl>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
          <dd className="card">card1</dd>
        </dl>

      </Page>
    )
}

export default Gallery;
