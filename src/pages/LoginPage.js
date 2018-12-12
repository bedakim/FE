import React, { Component } from 'react';
import LoginForm from '../containers/LoginForm';
import Layout from '../components/Layout';

import RegisterScss from '../components/Register/_Register.scss';

export default class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <LoginForm />
      </Layout>
    );
  }
}
