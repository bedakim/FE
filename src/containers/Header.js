import React, { Component } from 'react';
import Category from '../containers/Category';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>member</h1>
        <h1>searchbar</h1>
        <h1>category</h1>
        <Category />
      </div>
    );
  }
}
