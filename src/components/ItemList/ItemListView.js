import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemListView extends Component {
  static defaultProps = {
    products: [
      {
        // company: '집반찬연구소',
        // discount_rate: 0,
        // item_name: '굴생채무침(2~3인분) 220g',
        // list_thumbnail: '',
        // origin_price: 9800,
        // pk: 1,
        // sale_price: 9800,
      },
    ],
  };
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>
        {products.map(p => (
          <div key={p.pk}>
            <img src={p.list_thumbnail} alt={p.item_name} />
            <span>{p.discount_rate}</span>
            <Link to={`/product/${p.id}`}>
              [{p.company}]{p.item_name}
            </Link>
            <span>{p.origin_price}</span>
            <span>{p.sale_price}</span>
          </div>
        ))}
      </div>
    );
  }
}
