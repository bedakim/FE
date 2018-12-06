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
    console.log(this.props);
    console.log('itemimage_set', itemimage_set);
    console.log('item_pk', item_pk);
    return (
      <div className="ItemDetail">
        <div className="ItemDetail__content">
          <div className="ItemDetail__breadcrumbs" />
          <div className="ItemDetail__detail--top">
            <div className="detail--top-image">
              <div className="image-top">
                {/* {itemimage_set.map(p => (
                  <div key={p.item_image_pk}>
                    <img src={p.photo} alt={p.item_image_pk} />
                  </div>
                ))} */}
              </div>
            </div>
            <div className="detail--top-desc">
              {discount_rate === 0 ? (
                ''
              ) : (
                <div className="badge-event">
                  <span>이벤트특가</span>
                </div>
              )}
              <div className="desc-item_name">
                [{company}]{item_name}
              </div>
              <div className="desc-bt_txt">{description.added_words}</div>
              <dl className="desc-info">
                <dt>적립금</dt>
                <dd>{description.point}</dd>
                <dt>배송타입</dt>
                <dd>{description.delivery_type}</dd>
                <dt>수령요일</dt>
                <dd>{description.receive_day}</dd>
                <dt className="readable-hidden">가격</dt>
                <dd className="desc_price">
                  {origin_price === sale_price ? (
                    ''
                  ) : (
                    <strike className="origin-price">
                      {origin_price.toLocaleString() + '원'}
                    </strike>
                  )}
                  <strong className="slae-price">
                    {sale_price.toLocaleString() + '원'}
                  </strong>
                </dd>
              </dl>
              <div className="desc-option-calc" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
