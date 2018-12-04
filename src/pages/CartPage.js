import React, { Component } from 'react';
import Cart from '../containers/Cart';

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <Cart {...this.props} />
      </div>
    );
  }
}
