import React, { Component } from 'react';
import LoginForm from '../containers/LoginForm';
import Layout from '../components/Layout';

export default class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <LoginForm />
      </Layout>
    );
  }
}
