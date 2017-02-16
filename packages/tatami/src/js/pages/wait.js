import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import Session from '../stores/session';

import { Icon, Button, Field, Card , Header, Tabs, Tab, Stack, List, Swapable } from 'seito';

const WaitPage = (props) => {
  Session.logout();
  return (
    <Page >
      <Toolbar title="WAIT" />

      <Card>
        <h3>Buttons</h3>
        <div style={{ display: 'flex', padding: '1rem 0rem', justifyContent: 'center'}}>
          <Button className=""                   label="Normal"   />
          <Button className="disabled"           label="Normal"   />
          <Button className="primary"            label="Primary"   />
          <Button className="primary disabled"   label="Primary"   />
          <Button className="accent"             label="Accent"    />
          <Button className="accent disabled"    label="Accent"    />
          <Button className="danger"             label="Danger"    />
          <Button className="danger disabled"    label="Danger"    />
        </div>
      </Card>

      <Card>
        <h3>Icons</h3>
        <div style={{ display: 'flex', padding: '1rem 0rem', justifyContent: 'center'}}>
          <div><Icon icon="menu" className="tiny" /><span>tiny</span></div>
          <div><Icon icon="menu" className="small" /><span>small</span></div>
          <div><Icon icon="menu" className="" decorator="person"/><span>normal</span></div>
          <div><Icon icon="menu" className="medium" /><span>medium</span></div>
          <div><Icon icon="menu" className="large clickable" decorator="done"/><span>large</span></div>
        </div >
      </Card>

    </Page>
  )
}

export default WaitPage;
