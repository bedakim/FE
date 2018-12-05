import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ItemList.scss';

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
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { category_img, sub_categories, item_list } = this.props;
    console.log(item_list);
    return (
      <div className="ItemList">
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
