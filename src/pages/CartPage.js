import React, { Component } from 'react';
import Cart from '../containers/Cart';
import Layout from '../components/Layout';

export default class CartPage extends Component {
  render() {
    return (
      <Layout>
        <h1>장바구니쓰</h1>
        <Cart {...this.props} />
      </Layout>
    );
  }
}
