import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import Session from '../stores/session';

const ExitPage = (props) => {
  Session.logout();
  return (
    <Page >
      <Toolbar title="EXIT" />
    </Page>
  )
}

export default ExitPage;
