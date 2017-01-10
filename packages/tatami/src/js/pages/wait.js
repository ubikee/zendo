import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import Session from '../stores/session';

const WaitPage = (props) => {
  Session.logout();
  return (
    <Page >
      <Toolbar title="WAIT" />
    </Page>
  )
}

export default WaitPage;
