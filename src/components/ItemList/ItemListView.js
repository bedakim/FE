import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';

export default class ItemListView extends Component {
  render() {
    const { category_img, sub_categories, item_list } = this.props;
    console.log(item_list);
    return (
      <div className="ItemList">
        <div className="ItemList__visual">
          <img src={category_img} alt="비주얼이미지" align="center" />
        </div>
        <div className="ItemList__content">
          <div className="ItemList__breadcrumbs" />
          <div className="ItemList__title" />
          <ul className="ItemList__list">
            {item_list.map(p => (
              <li key={p.item_pk}>
                <div className="ItemList__list--imgthumb">
                  <Link to={`/item/?item_pk=${p.item_pk}`}>
                    <img src={p.list_thumbnail} alt={p.item_name} />
                  </Link>
                  <div>
                    {p.discount_rate === 0 ? (
                      ''
                    ) : (
                      <div className="badge">
                        <span>{p.discount_rate * 100 + '%'}</span>
                      </div>
                    )}
                  </div>
                </div>
                <dl className="ItemList__list--info">
                  <dt className="item-title">
                    <Link to={`/item/${p.item_pk}`}>
                      <span>
                        [{p.company}]{p.item_name}
                      </span>
                    </Link>
                  </dt>
                  <dd className="item-star" />
                  <dd className="item-price">
                    <span className="slae-price">
                      {p.sale_price.toLocaleString() + '원'}
                    </span>
                    {p.origin_price === p.sale_price ? (
                      ''
                    ) : (
                      <strike className="origin-price">
                        {p.origin_price.toLocaleString() + '원'}
                      </strike>
                    )}
                  </dd>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
