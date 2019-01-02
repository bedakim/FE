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
      order_item_list: {},
      total_price: 0,
      delivery_date: '',
      address: '',
      cart_item_pk: null,
      item_pk: null,
      modal: false,
      cartItems: [],
      amountObj: {},
      deleteObj: {},
      totalPrice: '',
      fullTotal: 0,
      date: '날짜',
      cartItemPk: [],
    };
  }
  async componentDidMount() {
    const { cartItems } = this.state;
    let fullTotal = 0;
    let cartItemPk = [];
    const { data } = await api.get('/cart/');
    console.log(data);
    data.forEach(item => {
      fullTotal += item.item.sale_price * item.amount;
      cartItemPk.push({ cart_item_pk: item.cart_item_pk });
      this.setState({
        cartItems: data,
        fullTotal,
        cartItemPk,
      });
      if (fullTotal < 40000) {
        return (fullTotal += 2500);
      } else {
        return fullTotal;
      }
    });
  }
  handleAddress(e) {
    const { fullTotal, cartItemPk } = this.state;
    const { date } = this.props;
    this.setState({
      address: e.target.value,
      total_price: fullTotal,
      order_item_list: cartItemPk,
      delivery_date: date,
    });
    // console.log('쥬소', address);
    // console.log('가격', fullTotal);
    // console.log('날짜', date);
    // console.log('카트', cartItemPk);
  }

  async handleOrderItem() {
    //   {
    //     "address":"asdasd",
    //     "delivery_date":"2018-12-23",
    //     "total_price": 8820,
    //     "order_item_list":[{"cart_item_pk":109}]
    // }
    const { fullTotal, address, cartItemPk } = this.state;
    const { date } = this.props;
    console.log('쥬소', address);
    console.log('가격', fullTotal);
    console.log('날짜', date);
    console.log('카트', cartItemPk);
    const res = await api.post('/order/', {
      address: address,
      delivery_date: date,
      total_price: fullTotal,
      order_item_list: cartItemPk,
    });
    console.log('오더', res);
  }
  render() {
    const { cartItems, fullTotal, address } = this.state;
    const { date, cartItemPk } = this.props;

    return (
      <>
        <Layout>
          <div className="Order">
            <div className="Order__order-div">
              <div className="Cart__title">
                <h1>결제하기</h1>
              </div>
              <div className="Cart__table">
                <div>
                  <div>
                    <ul className="Cart__CartItems-menu">
                      <li className="Cart__CartItems-li cartitem-name">상품</li>
                      <li className="Cart__CartItems-li cartitem-price">
                        개별 가격
                      </li>
                      <li className="Cart__CartItems-li cartitem-amount">
                        수량
                      </li>
                      <li className="Cart__CartItems-li cartitem-total">
                        주문 금액
                      </li>
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
                </div>
              </div>
              <div className="Cart__price">
                <div className="Cart__title">
                  <h3>결제/배송일 정보</h3>
                </div>
                <div className="price-box">
                  <dl className="order-date">
                    <dt className="order-date-title">예상 배송일</dt>
                    <dd className="order-date-day">{date}</dd>
                  </dl>
                  <dl className="order-price">
                    <dt className="order-price-title">총 주문금액</dt>
                    <dd className="order-price-won">{fullTotal}원</dd>
                  </dl>
                </div>
              </div>
              <div className="order-info-div">
                <div className="Cart__title">
                  <h3>배송지 정보</h3>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <label className="order-label">받으시는 분</label>
                      </th>
                      <td>
                        <input className="order-input" type="text" size="29" />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <label className="order-label">배송지 주소</label>
                      </th>
                      <td>
                        <div>
                          <input
                            className="order-input"
                            type="text"
                            size="100"
                            placeholder="주소를 입력해주세요."
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="Cart__title">
                  <h3>결제수단</h3>
                </div>
                <div>
                  <ul className="radio-div">
                    <li className="radio-div-li">
                      <span>
                        <input type="radio" className="radio-btn" name="ck" />
                        <label>신용카드</label>
                      </span>
                    </li>
                    <li className="radio-div-li">
                      <span>
                        <input type="radio" className="radio-btn" name="ck" />
                        <label>실시간계좌이체</label>
                      </span>
                    </li>
                    <li className="radio-div-li">
                      <span>
                        <input type="radio" className="radio-btn" name="ck" />
                        <label>무통장 입금 (안전거래 가상계좌)</label>
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      안전한 거래를 제공하기 위해 현금결제시 구매안전 서비스를
                      제공하고 있습니다.
                    </li>
                  </ul>
                </div>
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
        <div className="orderItem Cart__CartItems-lists">
          <h3 className="cartiem-name-div">
            <img className="orderItem__img" src={list_thumbnail} alt="" />[
            {company}] {item_name}
          </h3>
          <div className="cartiem-price-div">
            <span>{sale_price}원</span>
          </div>
          <div className="cartitem-amount-div">
            <span>{amount}개</span>
          </div>
          <div className="cartitem-total">
            <span>{totalPrice}원</span>
          </div>
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
    let fullTotal = 0;
    data.forEach(item => {
      fullTotal += item.item.sale_price * item.amount;
    });
    this.setState({
      cartItems: data,
      fullTotal,
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
    const { modal, cartItems, fullTotal, handleOnDate } = this.state;
    const { onDate } = this.props;
    return (
      <>
        <Layout>
          <div className="Cart">
            <h1 className="Cart__title">장바구니</h1>

            <div className="Cart__CartItems">
              <ul className="Cart__CartItems-menu">
                <li className="Cart__CartItems-li cartitem-name">상품</li>
                <li className="Cart__CartItems-li cartitem-price">가격</li>
                <li className="Cart__CartItems-li cartitem-amount">수량</li>
                <li className="Cart__CartItems-li cartitem-total">주문 금액</li>
              </ul>
              <div>
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
            <div className="Cart__price-div">
              <h1 className="Cart__title">구매가격</h1>

              <dl className="price-box">
                <dt className="price-total-title">총 주문금액</dt>
                <dd className="price"> {fullTotal}원</dd>
              </dl>
            </div>
            <div className="Cart__button">
              <button className="keep-shopping">
                <Link className="keep-shopping-a" to="/">
                  계속 쇼핑
                </Link>
              </button>
              <button
                className="choose-date"
                color="danger"
                onClick={this.toggle}
              >
                희망 배송일 선택하기
              </button>
            </div>
            <Modal
              className="Cart__modal"
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader>가격/배송일 정보</ModalHeader>
              <ModalBody>
                <form className="input-date">
                  <div className="date-div">
                    <h3>희망 배송일자</h3>
                    <input
                      className="date-input"
                      type="date"
                      min="2018-12-21"
                      max="2018-12-31"
                      onChange={e => this.handleOnDate(e)}
                    />
                  </div>
                  <div className="date-check-div">
                    <span className="check">배송일 확인</span>
                    <span className="checked-date">{onDate}</span>
                  </div>
                  <dl className="modal-total">
                    <dt className="modal-total-title">총 주문금액</dt>
                    <dd className="modal-total-price">{fullTotal}원</dd>
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
        </Layout>
      </>
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
        <div className="Cart__CartItems-lists">
          <div className="cartiem-name-div">
            <img className="img" src={list_thumbnail} alt="" />
            <h3 className="name">
              [{company}] {item_name}
            </h3>
          </div>
          <span className="cartiem-price-div">{sale_price}원</span>
          <div className="cartitem-amount-div">
            <input
              className="cartitem-amount-input"
              type="number"
              value={amount}
              onChange={e =>
                onQuantityChange(cart_item_pk, parseInt(e.target.value))
              }
              min="1"
              max="10"
            />
            <button
              className="cartitem-amount-button"
              onClick={e => {
                e.preventDefault();
                onChange({ cart_item_pk, amount });
                console.log('이거염', cart_item_pk, amount);
              }}
            >
              변경
            </button>
          </div>
          <span className="cartitem-total">{totalPrice}원</span>
          <button
            className="cartitem-delete-btn"
            onClick={e => {
              e.preventDefault();
              onDelete({ cart_item_pk });
              console.log(cart_item_pk);
            }}
          >
            &times;
          </button>
        </div>
      </>
    );
  }
}

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myItems: [],
      OrderData: '',
    };
  }

  async componentDidMount() {
    const { data } = await api.get('/order/');
    this.setState({
      myItems: data,
    });
    console.log('my', data);
  }
  render() {
    const { myItems } = this.state;
    console.log('myItems', myItems);
    return (
      <>
        <Layout>
          <div className="Order">
            <div className="Order__order-div">
              <div className="Cart__title">
                <h1>주문 현황</h1>
              </div>
              <div className="Cart__table">
                <div>
                  <div>
                    <ul className="Cart__CartItems-menu">
                      <li className="Cart__CartItems-li cartitem-name">
                        주문상품
                      </li>
                    </ul>
                  </div>
                  <div className="table-body">
                    {myItems.map(c => (
                      <MyItems
                        key={c.order_pk}
                        delivery_date={c.delivery_date}
                        company={c.cart_items[0].item.company}
                        item_name={c.cart_items[0].item.item_name}
                        list_thumbnail={c.cart_items[0].item.list_thumbnail}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
    );
  }
}
class MyItems extends Component {
  render() {
    const { company, item_name, list_thumbnail, delivery_date } = this.props;
    return (
      <>
        <div className="orderItem Cart__CartItems-lists">
          <img className="orderItem__img" src={list_thumbnail} alt="" />
          <h3>
            [{company}] {item_name}
          </h3>
        </div>
        <div className="">
          <h3 className="">예상 배송일:{delivery_date} </h3>
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
        <Route path="/mypage/" component={Mypage} />
      </React.Fragment>
    );
  }
}

export default CartOrder;
