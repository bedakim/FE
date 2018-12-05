import React, { Component } from 'react';
import Category from '../containers/Category';
import logo from '../components/Main/images/blank_user.png';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>member</h1>
        <img src={logo} alt="배민찬 LOGO" />
        <Category />
      </div>
    );
  }
}
