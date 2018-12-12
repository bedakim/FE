import React, { Component } from 'react';
import './CartOrder.scss';
import { Link, Route } from 'react-router-dom';
import Layout from '../Layout';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import App from '../../App';

const Order = () => (
  <Layout>
    <div className="Order">
      <div className="Cart__title">
        <h1>결제하기</h1>
      </div>
      <div className="Cart__table">
        <table>
          <thead>
            <tr>
              <th>상품</th>
              <th>수량</th>
              <th>상품 개별 가격</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
      <img src="" alt="" />
      <h3>상품명:""</h3>
      <span>""원</span>
      <div className="Cart__price">
        <h3 className="price-title">결제정보</h3>
        <div className="price-box">
          <dl className="price">
            <dt>상품금액</dt>
            <dd>0원</dd>
          </dl>
          <dl>
            <dt>총 주문금액</dt>
            <dd>0원</dd>
          </dl>
        </div>
      </div>
      <div>
        <table>
          <caption>배송지 정보</caption>
          <tbody>
            <tr>
              <th>
                <label>받으시는 분</label>
              </th>
              <td>
                <input type="text" size="29" />
              </td>
            </tr>

            <tr>
              <th>
                <label>휴대 전화</label>
              </th>
              <td>
                <input type="text" size="10" maxLength="4" />
                <span> - </span>
                <input type="text" size="10" maxLength="4" />
                <span> - </span>
                <input type="text" size="10" maxLength="4" />
              </td>
            </tr>
            <tr>
              <th>
                <label>배송지 주소</label>
              </th>
              <td>
                <div>
                  <input type="text" maxLength="7" size="10" />
                  <button>주소찾기</button>
                </div>
                <div>
                  <input type="text" size="52" />
                  <input type="text" size="52" />
                </div>
              </td>
            </tr>

            <tr>
              <th>
                <label>주변 건물 정보 및 기타사항</label>
              </th>
              <td>
                <textarea
                  type="text"
                  placeholder="예시) OO빌딩 뒷편의 5층 빌라"
                />
                <p>
                  원활한 배송을 위해 찾기 어려운 건물이나 출입 제한이 있는
                  건물의 경우 건물 특징, 출입 방법 등을 기재해주세요. 상품 및
                  주문 관련 요청 사항은 배민찬 고객센터(1600-1362)를 통해
                  문의하여 주시기 바랍니다. (배송일 지정 및 변경 등)
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3>결제 수단</h3>
        <table>
          <caption>결제 수단</caption>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    <span>
                      <i class="radio_btn" />
                      <input type="radio" checked="" />
                      <label>신용카드</label>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="radio_btn" />
                      <input type="radio" />
                      <label for="pay_type5" class="lbl">
                        실시간계좌이체
                      </label>
                    </span>
                  </li>
                  <li>
                    <span>
                      <i class="radio_btn" />
                      <input type="radio" />
                      <label>무통장 입금 (안전거래 가상계좌)</label>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    무통장입금은 2018년 12월 11일 16시 19분까지 유효하며
                    입금시간 경과시 주문이 자동 취소되니 유의해 주시길 바랍니다.
                  </li>
                  <li>
                    안전한 거래를 제공하기 위해 현금결제시 구매안전 서비스를
                    제공하고 있습니다.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="Cart__button">
        <button className="choose-date" color="danger">
          결제하기
        </button>
      </div>
    </div>
  </Layout>
);

// const Toggle = onToggle => (
//   //isOpen={this.state.modal} toggle={this.toggle}
/* <Modal className="Cart__modal" isOpen={this.state.modal} toggle={this.toggle}>
  <ModalHeader>가격 정보</ModalHeader>
  <ModalBody>
    <input type="date" />
    <dl className="price">
      <dt>상품금액</dt>
      <dd>0원</dd>
    </dl>
    <dl>
      <dt>총 주문금액</dt>
      <dd>0원</dd>
    </dl>
  </ModalBody>
  <ModalFooter>
    <button>주문하기</button>
  </ModalFooter>
</Modal>; */
// );

const Cart = ({ history } = this.state) => (
  <Layout>
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
      <input type="checkbox" />
      <img src="" alt="" />
      <h3>상품명:""</h3>
      <span>""원</span>
      <input type="number" />
      <button>변경</button>
      <span>""원</span>
      <button>삭제</button>
      <div className="Cart__price">
        <h3 className="price-title">구매가격</h3>
        <div className="price-box">
          <dl className="price">
            <dt>상품금액</dt>
            <dd>0원</dd>
          </dl>
          <dl>
            <dt>총 주문금액</dt>
            <dd>0원</dd>
          </dl>
        </div>
      </div>

      <div className="Cart__button">
        <button
          onClick={() => {
            history.push('/members/order/');
          }}
          className="keep-shopping"
        >
          계속 쇼핑
        </button>
        {/* onClick={this.toggle} */}
        <button className="choose-date" color="danger">
          희망 배송일 선택하기
        </button>
        {/* <Modal
          className="Cart__modal"
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader>가격 정보</ModalHeader>
          <ModalBody>
            <input type="date" />
            <dl className="price">
              <dt>상품금액</dt>
              <dd>0원</dd>
            </dl>
            <dl>
              <dt>총 주문금액</dt>
              <dd>0원</dd>
            </dl>
          </ModalBody>
          <ModalFooter>
            <button>주문하기</button>
          </ModalFooter>
        </Modal> */}
      </div>
    </div>
  </Layout>
);
class CartOrder extends Component {
  // static defaultProps = {
  //   products: [],
  // };
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      page: 'cart',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('bi');
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    return (
      <div>
        <Route path="/members/cart/" component={Cart} />
        {/* <Toggle onToggle={() => this.toggle()} component={Toggle} /> */}
        <Route path="/members/order/" component={Order} />
      </div>
    );
  }
}

export default CartOrder;
