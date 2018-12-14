import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }
  async componentDidMount() {
    this.setState({
      amount: 1,
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
    const totalPrice = sale_price * amount;
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
                  const { amount } = this.state;
                  if (amount < 1) {
                    alert('1 이상의 수량을 입력하세요.');
                  } else {
                    this.props.onCreateCartItem(amount);
                  }
                  this.props.onCreateCartItem(this.state.amount);
                }}
              >
                <span>담기</span>
              </button>
            </dd>
          </dl>
        </li>
      </>
    );
  }
}
