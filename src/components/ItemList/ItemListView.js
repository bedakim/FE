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
        div.ItemList
        <div className="ItemList__content">
          <ul className="ItemList__list">
            {item_list.map(p => (
              <li key={p.item_pk}>
                <div className="ItemList__list--imgthumb">
                  <img src={p.list_thumbnail} alt={p.item_name} />
                </div>
                <div>
                  {p.discount_rate === 0 ? '' : <span>{p.discount_rate}</span>}
                </div>
                <dl className="ItemList__list--info">
                  <Link to={`/product/${p.id}`}>
                    {p.company}]{p.item_name}
                  </Link>
                  <span>{p.origin_price}</span>
                  <span>{p.sale_price}</span>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
