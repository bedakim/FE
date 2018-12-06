import React, { Component } from 'react';
import SignUpForm from '../containers/SignupForm';
import Layout from '../components/Layout';

export default class SignUpPage extends Component {
  render() {
    return (
      <Layout>
        <h1>SignUpPage</h1>
        <SignUpForm />
      </Layout>
    );
  }
}
