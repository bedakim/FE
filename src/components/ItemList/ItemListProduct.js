import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemListProduct.scss';

export default class ItemListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
      item_pk: null,
    };
  }
  async componentDidMount() {
    this.setState({
      amount: 1,
      item_pk: null,
    });
  }
  handleQuantiyChange(e) {
    this.setState({
      amount: parseInt(e.target.value),
    });
  }
  render() {
    const {
      item_pk,
      company,
      item_name,
      origin_price,
      sale_price,
      discount_rate,
      list_thumbnail,
    } = this.props;
    const { amount } = this.state;
    return (
      <>
        <li key={item_pk}>
          <div className="ItemList__list--imgthumb">
            <Link to={`/item/?item_pk=${item_pk}`}>
              <img src={list_thumbnail} alt={item_name} />
            </Link>
            <div>
              {discount_rate === 0 ? (
                ''
              ) : (
                <div className="badge">
                  <span>{discount_rate * 100 + '%'}</span>
                </div>
              )}
            </div>
          </div>
          <dl className="ItemList__list--info">
            <dt className="item-title">
              <Link to={`/item/${item_pk}`}>
                <span>
                  [{company}]{item_name}
                </span>
              </Link>
            </dt>
            <dd className="item-star" />
            <dd className="item-price">
              <span className="slae-price">
                {sale_price.toLocaleString() + '원'}
              </span>
              {origin_price === sale_price ? (
                ''
              ) : (
                <strike className="origin-price">
                  {origin_price.toLocaleString() + '원'}
                </strike>
              )}
            </dd>
            <dd className="item-basket">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  const { amount } = this.state;
                  this.props.onCreateCartItem(item_pk, amount);
                }}
              >
                <fieldset>
                  <legend>상품 옵션</legend>
                  <div className="item-account">
                    <input
                      type="number"
                      value={amount}
                      onChange={e => this.handleQuantiyChange(e)}
                      min="1"
                      max="10"
                    />
                    <span>
                      <a
                        title="수량 더하기"
                        className="up"
                        onClick={() =>
                          this.setState({
                            amount: this.state.amount + 1,
                          })
                        }
                      >
                        +
                      </a>
                      <a
                        title="수량 빼기"
                        className="down"
                        onClick={() =>
                          this.setState({
                            amount: this.state.amount - 1,
                          })
                        }
                      >
                        -
                      </a>
                    </span>
                  </div>
                  <button
                    className="btn-cart btn-gray"
                    onClick={() => {
                      // '어떤 반찬'을 '몇 개' 담을 건지를 서버에 전송
                      const { amount } = this.state;
                      if (amount < 1) {
                        alert('1 이상의 수량을 입력하세요.');
                      }
                    }}
                  >
                    <span>담기</span>
                  </button>
                </fieldset>
              </form>
            </dd>
          </dl>
        </li>
      </>
    );
  }
}
