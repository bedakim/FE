import React, { Component } from 'react';
import SignUpForm from '../containers/SignupForm';
import Layout from '../components/Layout';

export default class SignUpPage extends Component {
  render() {
    return (
      <Layout>
        <SignUpForm />
      </Layout>
    );
  }
}
