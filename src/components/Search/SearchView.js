import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemListProduct from '../ItemList/ItemListProduct';
import './Search.scss';

export default class SearchView extends Component {
  render() {
    const { data, search_str } = this.props;

    return (
      <div className="Search">
        <div className="Search__content">
          <div className="Search__result">
            <p className="msg">
              <strong className="search-str">{search_str} </strong>
              <span>검색결과: </span>
              <strong className="number"> {data.length}</strong>
              <span>건</span>
            </p>
          </div>
          <ul className="Search__list">
            {data.map(d => (
              <ItemListProduct
                key={d.item_pk}
                item_pk={d.item_pk}
                company={d.company}
                item_name={d.item_name}
                origin_price={d.origin_price}
                sale_price={d.sale_price}
                discount_rate={d.discount_rate}
                list_thumbnail={d.list_thumbnail}
                onCreateCartItem={this.props.handleCreateCartItem}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
