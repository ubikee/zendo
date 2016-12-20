import React from 'react';

// components
import { Page, Toolbar } from 'tatami';
import { Icon, Button, FAB, Link } from 'seito';

// styles
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

  render() {console.log(this.props)
    return (
      <Page className="login" >


      </Page>
    );
  }
}

export default Login;
