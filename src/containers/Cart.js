import React, { Component } from 'react';
import CartView from '../components/Cart/CartView';
import api from '../api';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  // async componentDidMount(){
  //     const { data: }
  // }

  render() {
    return (
      <div>
        <CartView />
      </div>
    );
  }
}
