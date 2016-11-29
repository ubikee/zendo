import React from 'react';

// components
import Page from '../components/page';
import Form from '../components/form';
import Panel from '../components/panel';
import Header from '../components/header';
import { Field } from '../components/field';
import { Button } from '../components/button';

import './login.scss';

/**
 * Login Page
 */
class Login extends React.Component {

  static defaultProps = {
    user: '',
    password: '',
    message: '',
  }

  state = {
    user: this.props.user,
    password: this.props.password,
    message: '',
  }

  handleField = (field, value) => {
    this.setState({ [field]: value })
  }

  handleSubmit = () => {
    this.props.goto('DOSSIERS')
  }

  render() {
    return (
      <Page className="login">

        <div className="card">

          <div className="logo">
            <img src="/idossiers_icon_128.png"/>
            <br/>
            <span>iDossiers</span>
          </div>

          <div className="form">
            <Field id="user"     type="text"     label="Username"     value={this.state.user}     onChange={this.handleField}/>
            <Field id="password" type="password" label="Password" value={this.state.password} onChange={this.handleField}/>
            <br/><br/>
            <Button className="accent" label="SIGN IN" action={this.handleSubmit} />
            <div style={{ textAlign: 'center', margin: '1rem 0'}}>Forgot Password?</div>
            <div>{this.state.message}</div>
          </div>

        </div>

      </Page>
    );
  }
}

export default Login;
