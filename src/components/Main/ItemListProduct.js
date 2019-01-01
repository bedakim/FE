import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemListProduct extends Component {
  render() {
    const {
      item_pk,
      company,
      item_name,
      origin_price,
      sale_price,
      list_thumbnail,
      discount_rate,
    } = this.props;
    return (
      <>
        <li key={item_pk}>
          <div className="list-imgthumb">
            <Link to={`/item/?item_pk=${item_pk}`}>
              <img src={list_thumbnail} alt={item_name} />
            </Link>
          </div>
          <dl className="list-info">
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
                {sale_price.toLocaleString()}
                <span className="unit">원</span>
              </span>
              {origin_price === sale_price ? (
                ''
              ) : (
                <strike className="origin-price">
                  {origin_price.toLocaleString()}
                </strike>
              )}
            </dd>
          </dl>
          <div className="badge-area">
            {discount_rate === 0 ? (
              ''
            ) : (
              <div className="badge badge-event">
                <span>이벤트특가</span>
              </div>
            )}
          </div>
        </li>
      </>
    );
  }
}
