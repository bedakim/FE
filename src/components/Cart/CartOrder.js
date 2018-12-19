import React, { Component } from 'react';
import './CartOrder.scss';
import { Link, Route } from 'react-router-dom';
import Layout from '../Layout';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import api from '../../api';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_item_pk: null,
      item_pk: null,
      modal: false,
      cartItems: [],
      amountObj: {},
      deleteObj: {},
      totalPrice: '',
      fullTotal: 0,
      date: '날짜',
    };
  }
  async componentDidMount() {
    const { cartItems } = this.state;
    let fullTotal = 0;
    const { data } = await api.get('/cart/');
    data.forEach(item => {
      fullTotal += item.item.sale_price * item.amount;
    });
    this.setState({
      cartItems: data,
      fullTotal,
    });
    console.log('무엇', cartItems);
  }
  // async handleOrderItem({ address, delivery_date, total_price }) {
  //   await api.post('/order/', {
  //     address,
  //     delivery_date,
  //     total_price,
  //   });
  // }

  handleDateChage() {
    const { date } = this.props;
    this.setState({
      date,
    });
    alert('zzz');
    console.log('바뀐날짜', date);
  }

  render() {
    const { cartItems, fullTotal } = this.state;
    const { date } = this.props;

    return (
      <>
        <Layout>
          <div className="Order">
            <div className="Cart__title">
              <h1>결제하기</h1>
            </div>
            <div className="Cart__table">
              <div>
                <div>
                  <ul>
                    <li>상품</li>
                    <li>개별 가격</li>
                    <li>수량</li>
                    <li>주문 금액</li>
                  </ul>
                </div>
                <div className="table-body">
                  {cartItems.map(c => (
                    <OrderItems
                      key={c.item.item_pk}
                      company={c.item.company}
                      amount={c.amount}
                      item_name={c.item.item_name}
                      sale_price={c.item.sale_price}
                      list_thumbnail={c.item.list_thumbnail}
                    />
                  ))}
                </div>
                {/* key={location.search}
                    amount={this.state.amountObj[c.cart_item_pk]}
                    item_pk={c.item.item_pk}
                   */}
              </div>
            </div>
            <div className="Cart__price">
              <h3 className="price-title">결제/배송일 정보</h3>
              <div className="price-box">
                <dl className="price">
                  <dt>예상 배송일</dt>
                  <dd>{date}</dd>
                </dl>
                <dl>
                  <dt>총 주문금액</dt>
                  <dd>{fullTotal}원</dd>
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
                      <label>배송지 주소</label>
                    </th>
                    <td>
                      <div>
                        <input type="text" size="100" />
                      </div>
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
                            <i className="radio_btn" />
                            <input type="radio" />
                            <label>신용카드</label>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="radio_btn" />
                            <input type="radio" />
                            <label>실시간계좌이체</label>
                          </span>
                        </li>
                        <li>
                          <span>
                            <i className="radio_btn" />
                            <input type="radio" />
                            <label>무통장 입금 (안전거래 가상계좌)</label>
                          </span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          안전한 거래를 제공하기 위해 현금결제시 구매안전
                          서비스를 제공하고 있습니다.
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="Cart__button">
              <button
                className="choose-date"
                onClick={() => {
                  alert('결제가 완료 됐슈!');
                }}
              >
                <Link to="/">결제하기</Link>
              </button>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

class OrderItems extends Component {
  render() {
    const {
      amount,
      item_pk,
      cart_item_pk,
      company,
      item_name,
      sale_price,
      list_thumbnail,
      onQuantityChange,
    } = this.props;
    const totalPrice = sale_price * amount;
    // const fullPrice = totalPrice ;
    // console.log('훅댜ㅐ햐ㅐㅐㅑ', cart_item_pk);
    return (
      <>
        <div className="tbody-list">
          <img className="table-img" src={list_thumbnail} alt="" />
          <h3>
            [{company}] {item_name}
          </h3>
          <span>{sale_price}원</span>
          <span>{amount}개</span>
          <span>{totalPrice}원</span>
        </div>
      </>
    );
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart_item_pk: null,
      item_pk: null,
      modal: false,
      cartItems: [],
      amountObj: {},
      deleteObj: {},
      totalPrice: '',
      fullTotal: 0,
      OrderData: '',
      amount: 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  async componentDidMount() {
    const { data } = await api.get('/cart/');
    // console.log('API데이터', data);
    const amountObj = {};
    let fullTotal = 0;
    data.forEach(item => {
      amountObj[item.cart_item_pk] = item.amount;
      console.log('수량', item.amount);
      console.log('가격', item.item.sale_price);
      console.log('합계가격', item.item.sale_price * item.amount);
      fullTotal += item.item.sale_price * item.amount;
    });
    console.log('fullTotal', fullTotal);
    this.setState({
      cartItems: data,
      amountObj: amountObj,
      fullTotal,
    });
  }

  handleQuantiyChange(cartItemPk, amount) {
    this.setState(prevState => ({
      amountObj: {
        ...prevState.amountObj,
        [cartItemPk]: amount,
      },
    }));
  }
  async handleChangeItem({ cart_item_pk, amount }) {
    try {
      const { data } = await api.patch('/cart/', {
        cart_item_pk,
        amount,
      });

      let fullTotal = 0;
      data.forEach(item => {
        fullTotal += item.item.sale_price * item.amount;
      });

      this.setState({
        cartItems: data,
        fullTotal,
      });
    } catch (e) {
      // 에러처리하는부분
      console.log(e);
    }
  }

  async handleDeleteItem({ cart_item_pk }) {
    const { data } = await api.delete('/cart/', {
      data: { cart_item_pk },
    });
    this.setState({
      cartItems: data,
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  handleOnDate(e) {
    const { onDate } = this.props;
    onDate(e.target.value);
  }

  render() {
    const { modal, cartItems, fullTotal, date } = this.state;
    const { location } = this.props;

    // const totalPrice = cartItems.sale_price * amount;
    return (
      <Layout>
        <div className="Cart">
          <div className="Cart__title">
            <h1>장바구니</h1>
          </div>
          <div className="Cart__table">
            <div>
              <div>
                <ul>
                  <li>상품</li>
                  <li>가격</li>
                  <li>수량</li>
                  <li>주문 금액</li>
                </ul>
              </div>
              <div className="table-body">
                {cartItems.map(c => (
                  <CartItems
                    onQuantityChange={this.handleQuantiyChange.bind(this)}
                    onDelete={this.handleDeleteItem.bind(this)}
                    onChange={this.handleChangeItem.bind(this)}
                    key={c.item.item_pk}
                    amount={this.state.amountObj[c.cart_item_pk]}
                    item_pk={c.item.item_pk}
                    cart_item_pk={c.cart_item_pk}
                    company={c.item.company}
                    item_name={c.item.item_name}
                    sale_price={c.item.sale_price}
                    list_thumbnail={c.item.list_thumbnail}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="Cart__price">
            <h3 className="price-title">구매가격</h3>
            <div className="price-box">
              <dl className="price">
                <dt>총 주문금액</dt>
                <dd>{fullTotal}원</dd>
              </dl>
            </div>
          </div>
          <div className="Cart__button">
            <button className="keep-shopping">
              <Link to="/">계속 쇼핑</Link>
            </button>
            <button
              className="choose-date"
              color="danger"
              onClick={this.toggle}
            >
              희망 배송일 선택하기
            </button>
            <Modal
              className="Cart__modal"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader className="modal-title">가격 정보</ModalHeader>
              <ModalBody>
                <form className="input-date">
                  <h3>희망 배송일자</h3>
                  <input
                    type="date"
                    min="2018-12-21"
                    max="2018-12-31"
                    onChange={e => this.handleOnDate(e)}
                  />
                  <dl className="price">
                    <dd>배송일 확인 : {}</dd>
                    <dt>총 주문금액</dt>
                    <dd>{fullTotal}원</dd>
                  </dl>
                </form>
              </ModalBody>
              <ModalFooter>
                <button
                  className="order-go"
                  // onCLick={}
                >
                  <Link to="/order/">주문 하기</Link>
                </button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </Layout>
    );
  }
}

class CartItems extends Component {
  render() {
    const {
      amount,
      item_pk,
      cart_item_pk,
      company,
      item_name,
      sale_price,
      list_thumbnail,
      onQuantityChange,
      onDelete,
      onChange,
    } = this.props;
    const totalPrice = sale_price * amount;
    // const fullPrice = totalPrice ;
    console.log('훅댜ㅐ햐ㅐㅐㅑ', cart_item_pk);
    return (
      <>
        <div className="tbody-list">
          <img className="table-img" src={list_thumbnail} alt="" />
          <h3>
            [{company}] {item_name}
          </h3>
          <span>{sale_price}원</span>
          <input
            className="body-input"
            type="number"
            value={amount}
            onChange={e =>
              onQuantityChange(cart_item_pk, parseInt(e.target.value))
            }
            min="1"
            max="10"
          />
          <button
            className="body-button"
            onClick={e => {
              e.preventDefault();
              onChange({ cart_item_pk, amount });
              console.log('이거염', cart_item_pk, amount);
            }}
          >
            변경
          </button>
          <span>{totalPrice}원</span>
          <button
            onClick={e => {
              e.preventDefault();
              onDelete({ cart_item_pk });
              console.log(cart_item_pk);
            }}
          >
            삭제
          </button>
        </div>
      </>
    );
  }
}
class CartOrder extends Component {
  static defaultProps = {
    products: [],
  };
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
  }
  handleDate = date => {
    this.setState({
      date,
    });
    console.log(this.state);
  };
  render() {
    const { date } = this.state;
    return (
      <React.Fragment>
        <Route path="/cart/" render={() => <Cart onDate={this.handleDate} />} />
        <Route path="/order/" render={() => <Order date={date} />} />
      </React.Fragment>
    );
  }
}

export default CartOrder;
