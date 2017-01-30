import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import User from '../components/user';
import { DomainAware } from '../http/domain';
import { Icon, Button, Field, Card , Header, Tabs, Tab, Stack, List, Swapable } from 'seito';
import { Validator as check } from 'seito';
import API from '../api/userAPI';
import './login.scss';

const localUsers = (params, done) => {
  const users = [
    {id:'p_lopez', icon:'person', title:'Pedro Lopez', caption:'Compras', role: 'compras'},
    {id:'d_echebarria', icon:'person', title:'David Echebarria', caption:'Marketing', role: 'marketing' },
    {id:'j_huete', icon:'person', title:'Julio Huete', caption:'PPV', role: 'ppv'},
    {id:'j_rayon', icon:'person', title:'Javier Rayón', caption:'Realización', role: 'realizacion'},
  ]
  done(users);
}

class Login extends React.Component {

  static defaultProps= {
    tab: 0,
    inputAction: localUsers,
  }

  state = {
    tab: this.props.tab,
    user: 'admin',
    password: '12345678',
    error: '',
  }

  handleSubmit = () => {
    const user = this.state.user;
    const password = this.state.password;
    API.login(
      user, password,
      (me) => { this.props.changeUser(me), this.props.goto(this.props.next); },
      (error) => {
        const mssg = error.status ? error.message : error.error;
        this.setState({ error: mssg });
      }
    );
  }

  handleChangeField = (id, value) => {
    this.setState({ [id] : value });
  }

  handleChangeTab = (tab) => {
    this.setState({ tab })
  }

  handleSelectUser = (user) => {
    API.login(
      user.id, '12345678',
      (me) => { this.props.changeUser(me), this.props.goto(this.props.next); },
      (error) => { this.setState({ error: error.message }); }
    );
  }

  render() {
    const canLogin = check.notEmpty(this.state.user) && check.notEmpty(this.state.password);
    const leftActions =
      <Button label="done" className="primary"/>

    const rightActions = [
      <Button label="close" className="danger"/>
    ]

    return (
      <Page className="login">
          <Card>
            <Header icon={this.props.icon} title={this.props.title} className='hero' />
            <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
              <Tab label="LOGIN" />
              <Tab label="REGISTER" />
              <Tab label="USERS" />
            </Tabs>
            <Stack selected={this.state.tab}>
              <div>
                <center>{this.state.error}</center>
                <Field id="user"     icon="person" label="User"     value={this.state.user}     onChange={this.handleChangeField}/>
                <Field id="password" icon="lock"   label="Password" value={this.state.password} onChange={this.handleChangeField}/>
                <div style={{ display: 'flex', padding: '1rem 0rem', justifyContent: 'flex-end'}}>
                  <Button className="primary" label="OK" action={this.handleSubmit} disabled={!canLogin}/>
                </div>
              </div>
              <div>TODO: Register Form</div>
              <div>
                <List data={this.props.ctx} onSelection={this.handleSelectUser} />
              </div>
            </Stack>
          </Card>
      </Page>
    )
  }
}

export default Login;
