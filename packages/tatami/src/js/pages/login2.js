import React from 'react'

import { Tabs, Tab, Stack, Field, Button } from 'seito';
import { Validator as check } from 'seito';
import API from '../api/userAPI';
import './login2.scss';

class Login2 extends React.Component {

  static defaultProps= {
    tab: 0,
    user: '',
    password: ''
  }

  state = {
    tab: this.props.tab,
    user: this.props.user,
    password: this.props.password,
    error: '',
  }

  handleSubmit = () => {
    const user = this.state.user;
    const password = this.state.password;
    API.login(
      user, password,
      (me) => {
        this.props.changeUser(me);
        const nextPage = typeof this.props.next === 'function' ? this.props.next(me) : this.props.next;
        this.props.goto(nextPage);
      },
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

  render() {
    const canLogin = check.notEmpty(this.state.user) && check.notEmpty(this.state.password);
    const logo = this.props.logo ? <div className="logo"><img src={this.props.logo}/></div> : null;
    const title = this.props.title ? <div className="title">{this.props.title}</div> : null;
    const version = this.props.version ? <div className="version">{this.props.version}</div> : null;
    return (
      <div className="login2">
          <header>
            {logo}
            {title}
            {version}
          </header>
          <main>
            <Tabs selected={this.state.tab} onChange={this.handleChangeTab}>
              <Tab label="LOGIN" />
              <Tab label="REGISTRO" />
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
              <div style={{ display: 'flex', flexDirection: 'column', color: 'rgba(0,0,0,.8)', fontSize: '1.4rem', alignItems: 'center'}}>

                <span>Para registrarte como usuario de iSend</span>
                <span>debes contactar con el administrador del sistema</span>
                <br/>
                <span><a>isend-admin@popteam.com</a></span>
              </div>
            </Stack>
          </main>
      </div>
    )
  }
}

export default Login2;
