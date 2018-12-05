import React, { Component } from 'react';

export default class CartView extends Component {
  static defaultProps = {
    products: [],
  };
  render() {
    return (
      <>
        <button>계속 쇼핑</button>
        <button>희망 배송일 선택하기</button>
      </>
    );
  }
}
