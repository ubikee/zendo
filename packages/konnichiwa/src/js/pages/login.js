import React from 'react';

// components
import { Page } from 'tatami';
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

  render() {
    return (
      <Page className="login">

        <h1>Components</h1>
        <h2>Icon</h2>
        <Icon icon="person" />
        <h2>Buttons</h2>
        <Button label="NORMAL" />
        <Button label="PRIMARY" className="primary" />
        <FAB icon="add" />
        <Link label="Link"/>
      </Page>
    );
  }
}

export default Login;
