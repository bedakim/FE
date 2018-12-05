import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';

export default class ItemListView extends Component {
  static defaultProps = {
    category_img: '',
    sub_categories: [
      // {
      //   category_pk: '',
      //   main_category: '',
      //   sub_category: '',
      //   photo: '',
      // },
    ],
    item_list: [
      // {
      //   item_pk: '',
      //   company: '',
      //   item_name: '',
      //   origin_price: '',
      //   sale_price: '',
      //   discount_rate: '',
      //   list_thumbnail: '',
      // },
    ],
  };
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { category_img, sub_categories, item_list } = this.props;
    console.log(item_list);
    return (
      <div className="ItemList">
        <div className="ItemList__visual">
          <img src={category_img} alt="비주얼이미지" align="center" />
        </div>
        <div className="ItemList__breadcrumbs" />
        <div className="ItemList__title" />
        <div className="ItemList__content">
          <ul className="ItemList__list">
            {item_list.map(p => (
              <li key={p.item_pk}>
                <div className="ItemList__list--imgthumb">
                  <img src={p.list_thumbnail} alt={p.item_name} />
                  <div>
                    {p.discount_rate === 0 ? (
                      ''
                    ) : (
                      <div className="thumb_badge">
                        <span>{p.discount_rate * 100 + '%'}</span>
                      </div>
                    )}
                  </div>
                </div>
                <dl className="ItemList__list--info">
                  <dt className="Item--tit">
                    <Link to={`/product/${p.id}`}>
                      <span>
                        [{p.company}]{p.item_name}
                      </span>
                    </Link>
                  </dt>
                  <dd className="Item--star" />
                  <dd className="Item--price">
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
