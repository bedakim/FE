import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  async componentDidMount() {
    this.setState({
      quantity: 1,
    });
  }
  handleQuantiyChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
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

    const { quantity } = this.state;
    const totalPrice = sale_price * quantity;
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
                  value={quantity}
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
                        quantity: this.state.quantity + 1,
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
                        quantity: this.state.quantity - 1,
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
                  const { quantity } = this.state;
                  if (quantity < 1) {
                    alert('1 이상의 수량을 입력하세요.');
                  } else {
                    this.props.onCreateCartItem(quantity);
                  }
                  this.props.onCreateCartItem(this.state.quantity);
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
