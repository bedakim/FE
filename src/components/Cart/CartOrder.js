import React, { Component } from 'react';
import './CartOrder.scss';
import { Link, Route } from 'react-router-dom';
import Layout from '../Layout';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { URLSearchParams } from 'url';
// import App from '../../App';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const Cart = () => (
//   <Layout>
//     <div className="Cart">
//       <div className="Cart__title">
//         <h1>장바구니</h1>
//       </div>
//       <div className="Cart__table">
//         <table>
//           <thead>
//             <tr>
//               <input type="checkbox" />
//               <th>상품</th>
//               <th>가격</th>
//               <th>수량</th>
//               <th>주문 금액</th>
//             </tr>
//           </thead>
//           <tbody />
//         </table>
//       </div>
//       <input type="checkbox" />
//       <img src="" alt="" />
//       <h3>상품명:""</h3>
//       <span>""원</span>
//       <input type="number" />
//       <button>변경</button>
//       <span>""원</span>
//       <button>삭제</button>
//       <div className="Cart__price">
//         <h3 className="price-title">구매가격</h3>
//         <div className="price-box">
//           <dl className="price">
//             <dt>상품금액</dt>
//             <dd>0원</dd>
//           </dl>
//           <dl>
//             <dt>총 주문금액</dt>
//             <dd>0원</dd>
//           </dl>
//         </div>
//       </div>

//       <div className="Cart__button">
//         <button className="keep-shopping">계속 쇼핑</button>
//         <button className="choose-date" color="danger" onClick={this.toggle}>
//           희망 배송일 선택하기
//         </button>
//         <Modal
//           className="Cart__modal"
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//         >
//           <ModalHeader>가격 정보</ModalHeader>
//           <ModalBody>
//             <input type="date" />
//             <dl className="price">
//               <dt>상품금액</dt>
//               <dd>0원</dd>
//             </dl>
//             <dl>
//               <dt>총 주문금액</dt>
//               <dd>0원</dd>
//             </dl>
//           </ModalBody>
//           <ModalFooter>
//             <button>주문하기</button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     </div>
//   </Layout>
// );
// const Order = () => (
//   <Layout>
//     <div className="Order">
//       <div className="Cart__title">
//         <h1>결제하기</h1>
//       </div>
//       <div className="Cart__table">
//         <table>
//           <thead>
//             <tr>
//               <th>상품</th>
//               <th>수량</th>
//               <th>상품 개별 가격</th>
//             </tr>
//           </thead>
//           <tbody />
//         </table>
//       </div>
//       <img src="" alt="" />
//       <h3>상품명:""</h3>
//       <span>""원</span>
//       <div className="Cart__price">
//         <h3 className="price-title">결제정보</h3>
//         <div className="price-box">
//           <dl className="price">
//             <dt>상품금액</dt>
//             <dd>0원</dd>
//           </dl>
//           <dl>
//             <dt>총 주문금액</dt>
//             <dd>0원</dd>
//           </dl>
//         </div>
//       </div>
//       <div>
//         <table>
//           <caption>배송지 정보</caption>
//           <tbody>
//             <tr>
//               <th>
//                 <label>받으시는 분</label>
//               </th>
//               <td>
//                 <input type="text" size="29" />
//               </td>
//             </tr>

//             <tr>
//               <th>
//                 <label>휴대 전화</label>
//               </th>
//               <td>
//                 <input type="text" size="10" maxLength="4" />
//                 <span> - </span>
//                 <input type="text" size="10" maxLength="4" />
//                 <span> - </span>
//                 <input type="text" size="10" maxLength="4" />
//               </td>
//             </tr>
//             <tr>
//               <th>
//                 <label>배송지 주소</label>
//               </th>
//               <td>
//                 <div>
//                   <input type="text" maxLength="7" size="10" />
//                   <button>주소찾기</button>
//                 </div>
//                 <div>
//                   <input type="text" size="52" />
//                   <input type="text" size="52" />
//                 </div>
//               </td>
//             </tr>

//             <tr>
//               <th>
//                 <label>주변 건물 정보 및 기타사항</label>
//               </th>
//               <td>
//                 <textarea
//                   type="text"
//                   placeholder="예시) OO빌딩 뒷편의 5층 빌라"
//                 />
//                 <p>
//                   원활한 배송을 위해 찾기 어려운 건물이나 출입 제한이 있는
//                   건물의 경우 건물 특징, 출입 방법 등을 기재해주세요. 상품 및
//                   주문 관련 요청 사항은 배민찬 고객센터(1600-1362)를 통해
//                   문의하여 주시기 바랍니다. (배송일 지정 및 변경 등)
//                 </p>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div>
//         <h3>결제 수단</h3>
//         <table>
//           <caption>결제 수단</caption>
//           <tbody>
//             <tr>
//               <td>
//                 <ul>
//                   <li>
//                     <span>
//                       <i class="radio_btn" />
//                       <input type="radio" checked="" />
//                       <label>신용카드</label>
//                     </span>
//                   </li>
//                   <li>
//                     <span>
//                       <i class="radio_btn" />
//                       <input type="radio" />
//                       <label for="pay_type5" class="lbl">
//                         실시간계좌이체
//                       </label>
//                     </span>
//                   </li>
//                   <li>
//                     <span>
//                       <i class="radio_btn" />
//                       <input type="radio" />
//                       <label>무통장 입금 (안전거래 가상계좌)</label>
//                     </span>
//                   </li>
//                 </ul>
//                 <ul>
//                   <li>
//                     안전한 거래를 제공하기 위해 현금결제시 구매안전 서비스를
//                     제공하고 있습니다.
//                   </li>
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <div className="Cart__button">
//         <button className="choose-date" onClick={this.done}>
//           결제하기
//         </button>
//       </div>
//     </div>
//   </Layout>
// );

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

class Order extends Component {
  render() {
    return (
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
                      건물의 경우 건물 특징, 출입 방법 등을 기재해주세요. 상품
                      및 주문 관련 요청 사항은 배민찬 고객센터(1600-1362)를 통해
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
    );
  }
}
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      page: 'cart',
      cartItems: [
        // {
        //   cart_item_pk: '11',
        //   user: {
        //     user_pk: '',
        //     username: '',
        //     first_name: 'test',
        //     last_name: '',
        //     email: '',
        //     img_profile: null,
        //   },
        //   item: {
        //     item_pk: '3',
        //     company: '탐나는밥상',
        //     item_name: '표고버섯 무나물 (1인분) 150g',
        //     origin_price: 4500,
        //     sale_price: 4050,
        //     discount_rate: 0.1,
        //     list_thumbnail: null,
        //   },
        //   amount: 2,
        // },
      ],
    };
    this.toggle = this.toggle.bind(this);
  }

  // async componentDidMount() {
  //   const params = new URLSearchParams(this.props.location.search);
  //   console.log(this.props.location);
  //   const {
  //     data: {
  //       cart_item_pk,
  //       item_pk,
  //       company,
  //       item_name,
  //       origin_price,
  //       sale_price,
  //       discount_rate,
  //       description,
  //       itemimage_set,
  //     },
  //   } = await api.get('/cart/', {
  //     params,
  //   });
  //   this.setState({
  //     sale_price,
  //   });
  // }

  toggle() {
    console.log('bi');
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    // const { cartItems } = this.state;
    // console.log('cart', cartItems);
    // console.log('cart', company);
    return (
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
          {/* {cartItems[0].item.company} */}
          <h3>상품명: </h3>
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
                <button className="order-go">
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

class CartOrder extends Component {
  static defaultProps = {
    products: [],
  };
  render() {
    return (
      <React.Fragment>
        <Route path="/cart/" component={Cart} />
        <Route path="/order/" component={Order} />
      </React.Fragment>
    );
  }
}

export default CartOrder;
