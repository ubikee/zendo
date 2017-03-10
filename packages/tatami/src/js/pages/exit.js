import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import Session from '../stores/session';
import { Button } from 'seito';

const ExitPage = (props) => {
  Session.logout();
  const gotoLogin = () => {
    this.props.goto('LOGIN')
  }
  return (
    <Page >
      <Toolbar title="EXIT" />
      <Button action={gotoLogin} />
    </Page>
  )
}

export default ExitPage;
