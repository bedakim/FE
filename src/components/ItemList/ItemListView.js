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
        {products.map(p => (
          <div key={p.pk}>
            <img src={p.photo} alt={p.main_category} />
            <Link to={`/categories/${p.itemId}`}>{p.item_name}</Link>
          </div>
        ))}
      </div>
    );
  }
}
