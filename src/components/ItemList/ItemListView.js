import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ItemListView extends Component {
  static defaultProps = {
    products: [],
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        <h1>dddd</h1>
        {products.map(p => (
          <div key={p.pk}>
            <img src={p.imgURL} alt={p.title} />
            <Link to={`/categories/${p.itemId}`}>{p.item_name}</Link>
          </div>
        ))}
      </div>
    );
  }
}
