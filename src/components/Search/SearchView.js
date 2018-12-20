import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationItem } from 'reactstrap';
import ItemListProduct from '../ItemList/ItemListProduct';
import './Search.scss';

export default class SearchView extends Component {
  render() {
    const { items, page_list, page, search_str, items_count } = this.props;
    console.log('현재페이지: ', page);
    return (
      <div className="Search">
        <div className="content">
          <div className="Search__result">
            <p className="msg">
              <strong className="search-str">{search_str} </strong>
              <span>검색결과: </span>
              <strong className="number"> {items_count}</strong>
              <span>건</span>
            </p>
          </div>
          <ul className="Search__list">
            {items.map(d => (
              <ItemListProduct
                key={d.item_pk}
                item_pk={d.item_pk}
                company={d.company}
                item_name={d.item_name}
                origin_price={d.origin_price}
                sale_price={d.sale_price}
                discount_rate={d.discount_rate}
                list_thumbnail={d.list_thumbnail}
                onCreateCartItem={this.props.onCreateCartItem}
              />
            ))}
          </ul>
          <div className="Search__pagination">
            <Pagination aria-label="Page navigation example">
              {page_list.map(p => (
                <PaginationItem key={p} active={p === parseInt(`${page}`)}>
                  <Link to={`/search/?search_str=${search_str}&page=${p}`}>
                    {p}
                  </Link>
                </PaginationItem>
              ))}
            </Pagination>
          </div>
        </div>
      </div>
    );
  }
}
