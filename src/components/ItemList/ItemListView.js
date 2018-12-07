import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';
import ItemVisualBanner from './ItemVisualBanner';

export default class ItemListView extends Component {
  render() {
    const { sub_categories, item_list, current_categories } = this.props;
    return (
      <div className="ItemList">
        <ItemVisualBanner current_categories={current_categories} />
        <div className="ItemList__content">
          <div className="ItemList__breadcrumbs" />
          <ul className="ItemList__category--list">
            {sub_categories.map(c => (
              <li key={c.category_pk}>
                <Link to={`/categories/?category_pk=${c.category_pk}`}>
                  {c.sub_category}
                </Link>
              </li>
            ))}
          </ul>
          <div className="ItemList__title">
            {current_categories.sub_category === '전체보기' ? (
              <h2>{current_categories.main_category}</h2>
            ) : (
              <h2>{current_categories.sub_category}</h2>
            )}
          </div>
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
