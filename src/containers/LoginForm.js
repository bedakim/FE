import React, { Component } from 'react';
import LoginFormView from '../components/Register/LoginFormView';
import { withUser } from '../contexts/UserContext';

class LoginForm extends Component {
  render() {
    const { login } = this.props;
    return (
      <div>
        <LoginFormView onLogin={login} />
      </div>
    );
  }
}

export default withUser(LoginForm);
