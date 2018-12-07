import React, { Component } from 'react';
import './CartView.scss';
import { TableBody } from 'semantic-ui-react';

export default class CartView extends Component {
  static defaultProps = {
    products: [],
  };
  render() {
    return (
      <div className="Cart">
        <div className="Cart__title">
          <h1>장바구니</h1>
        </div>
        <div className="Cart__table">
          <table>
            <thead>
              <tr>
                <input type="checkbox" />
                <th>상품</th>
                <th>가격</th>
                <th>수량</th>
                <th>주문 금액</th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
        <input type="checkbox" checked />
        <img src="" alt="" />
        <h3>상품명:""</h3>
        <span>""원</span>
        <input type="number" name="quantity" />
        <button>변경</button>
        <span>""원</span>
        <button>삭제</button>

        <div className="Cart__price">
          <h3 className="price-title">구매가격</h3>
          <div className="price-box">
            <dl className="price">
              <dt>상품금액</dt>
              <dd>0원</dd>
              <dt>배송비</dt>
              <dd>0원</dd>
            </dl>
            <dl>
              <dt>총 주문금액</dt>
              <dd>0원</dd>
            </dl>
          </div>
        </div>
        <div className="Cart__button">
          <button className="keep-shopping">계속 쇼핑</button>
          <button className="choose-date">희망 배송일 선택하기</button>
        </div>
      </div>
    );
  }
}
