import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withLoading from '../../hoc/withLoading';
import './ItemDetail.scss';
import DetailContentView from './DetailContentView';

class ItemDetailView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageTypeT: [],
      imageTypeD: [],
      quantity: 1,
    };
  }
  async componentDidMount() {
    this.setState({
      quantity: 1,
    });
  }
  handleQuantiyChange(e) {
    this.setState({
      quantity: parseInt(e.target.value),
    });
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
    const { quantity } = this.state;
    const totalPrice = sale_price * quantity;
    return (
      <div className="ItemDetail">
        <div className="ItemDetail__content">
          <div className="ItemDetail__breadcrumbs" />
          <div className="ItemDetail__detail--top">
            <div className="detail--top-image">
              <div className="image-top">
                <img src="" alt="" />
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
                      key={index}
                      className="top-thumb"
                      onClick={() => this.handleImageChange}
                    >
                      <img src={p.photo} alt={p.item_image_pk} />
                    </a>
                  ) : (
                    <a className="top-thumb" key={index} />
                  );
                })}
              </div>
            </div>
            <div className="detail--top-desc">
              {discount_rate === 0 ? (
                ''
              ) : (
                <div className="badge badge-event">
                  <span>이벤트특가</span>
                </div>
              )}
              <h1 className="desc-item_name">
                [{company}]{item_name}
              </h1>
              <p className="desc-bt_txt">{description.added_words}</p>
              <dl className="desc-info">
                <dt>적립금</dt>
                <dd>{`${description.point}원`}</dd>
                <dt>배송타입</dt>
                <dd>{description.delivery_type}</dd>
                <dt>수령요일</dt>
                <dd>{description.receive_day}</dd>
                <dt>정기배송</dt>
                {description.regular_delivery !== false ? (
                  <dd>가능</dd>
                ) : (
                  <dd>불가</dd>
                )}
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
                    {sale_price.toLocaleString()}
                    <span>원</span>
                  </strong>
                </dd>
              </dl>
              <div className="desc-option-calc">
                <form>
                  <fieldset>
                    <legend>옵션별 상품 금액 계산 </legend>
                    <div className="option-only-quantity">
                      <dl>
                        <dt>수량</dt>
                        <dd>
                          <div className="item-account">
                            <input
                              type="number"
                              value={quantity}
                              onChange={e => this.handleQuantiyChange(e)}
                              min="1"
                              max="10"
                            />
                            <span>
                              <a
                                title="수량 더하기"
                                className="up"
                                onClick={() =>
                                  this.setState({
                                    quantity: this.state.quantity + 1,
                                  })
                                }
                              >
                                +
                              </a>
                              <a
                                title="수량 빼기"
                                className="down"
                                onClick={() =>
                                  this.setState({
                                    quantity: this.state.quantity - 1,
                                  })
                                }
                              >
                                -
                              </a>
                            </span>
                          </div>
                        </dd>
                      </dl>
                    </div>
                    <p className="calculated-price">
                      <span className="price-label">총 상품금액</span>
                      <strong className="price-number">
                        {totalPrice.toLocaleString()}
                      </strong>
                      <span>원</span>
                    </p>
                    <button className="btn-mint btn-into-cart">담기</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <DetailContentView
            item_pk={item_pk}
            company={company}
            item_name={item_name}
            origin_price={origin_price}
            sale_price={sale_price}
            discount_rate={discount_rate}
            description={description}
            imageTypeD={imageTypeD}
          />
        </div>
      </div>
    );
  }
}

export default withLoading(ItemDetailView);
