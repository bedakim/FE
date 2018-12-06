import React, { Component } from 'react';

export default class CartView extends Component {
  static defaultProps = {
    products: [],
  };
  render() {
    return (
      <>
        <div>
          <input type="checkbox" checked />
          <img src="" alt="" />
          <h3>상품명:""</h3>
          <span>""원</span>
          <input type="number" name="quantity" />
          <button>변경</button>
          <span>""원</span>
          <button>삭제</button>
        </div>
        <button>계속 쇼핑</button>
        <button>희망 배송일 선택하기</button>
      </>
    );
  }
}
