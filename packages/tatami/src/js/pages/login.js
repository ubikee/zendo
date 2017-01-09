import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import Session from '../stores/session';
import { Icon, Button, Field, Card , Header, Tabs, Tab, Stack, List} from 'seito';
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
    {id:'p_lopez', icon:'person', title:'P. Lopez',  caption:'Marketing', role: 'compras'},
    {id:'i_diaz', icon:'person', title:'I. Diaz' ,  caption:'Marketing', role: 'marketing' },
    {id:'j_huete', icon:'person', title:'Julio Huete',  caption:'PPV', role: 'ppv'},
    {id:'j_rayon', icon:'person', title:'Javier Rayón',  caption:'Realización', role: 'realizacion'},
  ]

  done(users);
}

class Login extends React.Component {

  static defaultProps= {
    tab: 2,
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
    API.authenticate(user, password, (data) => {
      Session.init(data.token, '');
      API.me((me) => {
        Session.init(data.token, me);
        this.props.goto(this.props.next);
      }, (error) => { this.setState({ error: error.message }); });
    }, (error) => { this.setState({ error: error.message }); });
  }

  handleChangeField = (id, value) => {
    this.setState({ [id] : value });
  }

  handleChangeTab = (tab) => {
    this.setState({ tab })
  }

  handleSelectUser = (user) => {
    const me = {
      
    }
    Session.init('*', user.role, user.name);
    setTimeout(() => {
      this.props.goto(this.props.next);
    }, 1000);
  }

  render() {
    const canLogin = check.notEmpty(this.state.user) && check.notEmpty(this.state.password);
    return (
      <Page className="login">
          <Card>
            <Header title={this.props.title} className='hero' />
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
                <div style={{ display: 'flex', padding: '1rem 4rem', justifyContent: 'flex-end'}}>
                  <Button className="primary" label="OK" action={this.handleSubmit} disabled={!canLogin}/>
                </div>
              </div>
              <div>1</div>
              <div>
                <List data={this.props.ctx} onSelection={this.handleSelectUser}/>
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
