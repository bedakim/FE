import React, { Component } from 'react';
import SignUpFormView from '../components/Register/SignUpFormView';
import Register from '../components/Register/Register.scss';

export default class SignupForm extends Component {
  render() {
    return (
      <div>
        <SignUpFormView />
      </div>
    );
  }
}
