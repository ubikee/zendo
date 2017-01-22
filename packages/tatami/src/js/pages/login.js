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

  /*
  const users = [
    { avatar: 'MKT', name: 'p_lopez', info: 'Compras de Material' },
    { avatar: 'MKT', name: 'i_diaz' , info: 'Marketing' },
    { avatar: 'PPV', name: 'j_huete', info: 'Marketing' },
    { avatar: 'RLZ', name: 'j_rayon', info: 'Realización' },
  ]
  */

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
      (error) => { this.setState({ error: error.message }); }
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
      (me) => { console.log(me); this.props.changeUser(me), this.props.goto(this.props.next); },
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
                <List data={this.props.ctx} onSelection={this.handleSelectUser} renderer={Swapable(User, leftActions, rightActions)}/>
              </div>
            </Stack>
          </Card>
      </Page>
    )
  }
}

export default Login;

/*

{
 "has_next": false,
 "total": 3,
 "users": [
   {
     "_id": "58505fc215d14cd1de5cc03c",
     "email": "admin@ywana.com",
     "name": "Juan",
     "family_name": "Pérez García",
     "login": "admin",
     "roles": [
       "manager",
       "customer"
     ]
   },
   {
     "_id": "58505fc215d14cd1de5cc03d",
     "email": "customer@ywana.com",
     "name": "Pedro",
     "family_name": "Martínez García",
     "login": "customer",
     "roles": [
       "customer"
     ]
   },
   {
     "_id": "58505fc315d14cd1de5cc03e",
     "email": "manager@ywana.com",
     "name": "Luis",
     "family_name": "Durán Fernández",
     "login": "manager",
     "roles": [
       "manager"
     ]
   }
 ]
}



NEW TICKET =>
{
 "id": "57e52790-c639-11e6-8f6f-4141cca1a68d",
 "idTicket": "58599294bfabf967543d4e70",
 "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU3ZTUyNzkwLWM2MzktMTFlNi04ZjZmLTQxNDFjY2ExYTY4ZCIsImlkVGlja2V0IjoiNTg1OTkyOTRiZmFiZjk2NzU0M2Q0ZTcwIiwidGltZXN0YW1wIjoxNDgyMjY1MjM2OTMyfQ.PmvDEPopiRacRaGs42xlb_zs-oHMQjahO61OvYyI8jI"
}



*/
