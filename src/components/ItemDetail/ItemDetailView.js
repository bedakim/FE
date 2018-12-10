import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withLoading from '../../hoc/withLoading';
import './ItemDetail.scss';
import DetailInfoView from './DetailInfoView';

class ItemDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageTypeT: [],
      imageTypeD: [],
    };
  }

  handleImageChange() {}

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
    const imageTypeT = itemimage_set.filter(i => i.photo_type === 'T');
    const imageTypeD = itemimage_set.filter(i => i.photo_type === 'D');
    return (
      <div className="ItemDetail">
        <div className="ItemDetail__content">
          <div className="ItemDetail__breadcrumbs" />
          <div className="ItemDetail__detail--top">
            <div className="detail--top-image">
              <div className="image-top">
                <div>
                  {discount_rate === 0 ? (
                    ''
                  ) : (
                    <div className="badge">
                      <span>{discount_rate * 100 + '%'}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="image-thumb">
                {[0, 1, 2, 3, 4].map((item, index) => {
                  const p = imageTypeT[index];
                  return imageTypeT[index] ? (
                    <a
                      className="top-thumb"
                      onClick={() => this.handleImageChange}
                    >
                      <img src={p.photo} alt={p.item_image_pk} />
                    </a>
                  ) : (
                    <a className="top-thumb" />
                  );
                })}
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
          <div className="ItemDetail__detail--list-box" />
          <DetailInfoView itemimage_set={itemimage_set} />
        </div>
      </div>
    );
  }
}

export default withLoading(ItemDetailView);
