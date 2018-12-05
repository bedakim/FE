import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.scss';

export default class ItemDetailView extends Component {
  render() {
    const {
      item_pk,
      company,
      item_name,
      origin_price,
      sale_price,
      discount_rate,
      description,
      itemimage_set,
    } = this.props;
    console.log(this.props)
    console.log('itemimage_set', itemimage_set);
    console.log('item_pk', item_pk);
    return (
      <div className="ItemDetail">
        <div className="ItemDetail__content">
          <div className="ItemDetail__breadcrumbs" />
          <div className="ItemDetail__detail--top">
            <div className="detail--top-image">
              {itemimage_set.map(p => (
                <div key={p.item_image_pk} className="image-top">
                  <img src={p.photo} alt={p.item_image_pk} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
