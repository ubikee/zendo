import React from 'react';
import Page from '../components/page';
import Toolbar from '../components/toolbar';
import Session from '../stores/session';
import { Icon, Button, Field, Card , Header, Tab} from 'seito';
import { Validator as validate } from 'seito';
import API from '../api/userAPI';
import './login.scss';

class Login extends React.Component {

  state = {
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
        Session.init(data.token, me);console.log(this.props.next)
        this.props.goto(this.props.next);
      }, (error) => { this.setState({ error: error.message }); });
    }, (error) => { this.setState({ error: error.message }); });
  }

  handleChangeField = (id, value) => {
    this.setState({ [id] : value });
  }

  render() {
    const canLogin = validate.notEmpty(this.state.user) && validate.notEmpty(this.state.password);
    return (
      <Page className="login">
          <Card>
            <Header title={this.props.title} className='hero' />
            <div style={{ display: 'flex'}}>
              <Tab label="LOGIN" className="selected"/>
              <Tab label="REGISTER" />
              <Tab label="USERS" />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '2rem 4rem', justifyContent: 'center'}}>
              <center>{this.state.error}</center>
              <Field id="user"     icon="person" label="User"     value={this.state.user}     onChange={this.handleChangeField}/>
              <Field id="password" icon="lock"   label="Password" value={this.state.password} onChange={this.handleChangeField}/>
            </div>
            <div style={{ display: 'flex', padding: '1rem 4rem', justifyContent: 'flex-end'}}>
              <Button className="primary" label="OK" action={this.handleSubmit} disabled={!canLogin}/>
            </div>
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
