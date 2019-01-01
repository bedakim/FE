import React, { Component } from 'react';
import ItemListProduct from '../Main/ItemListProduct';
import './ItemListBox.scss';
import { Link } from 'react-router-dom';

export default class MainItemListBoxView extends Component {
  render() {
    const {
      current_categories,
      item_list,
      current_categories_title,
    } = this.props;
    return (
      <div className="wrap MainItemList">
        <div className=" content MainItemList__box">
          <div className="title">
            <h2>{current_categories.main_category}</h2>
            <p>{current_categories_title}</p>
          </div>
          <div className="MainItemList__thumb-slides-wrap">
            <div className="bx-wrapper">
              <div className="bx-viewport">
                <ul className="MainItemList__list">
                  {item_list.map(i => (
                    <ItemListProduct
                      key={i.item_pk}
                      item_pk={i.item_pk}
                      company={i.company}
                      item_name={i.item_name}
                      origin_price={i.origin_price}
                      sale_price={i.sale_price}
                      discount_rate={i.discount_rate}
                      list_thumbnail={i.list_thumbnail}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Link
            to={`/categories/?category_pk=${current_categories.category_pk}`}
            className="btn-more"
          >
            <span>
              {current_categories.main_category}&nbsp;
              {current_categories.sub_category}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
