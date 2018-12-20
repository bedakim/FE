import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Pagination, PaginationItem } from 'reactstrap';
import './ItemList.scss';
import ItemVisualBanner from './ItemVisualBanner';
import ItemB2bBanner from './ItemB2bBanner';
import withLoading from '../../hoc/withLoading';
import ItemListProduct from './ItemListProduct';
import { Link } from 'react-router-dom';

class ItemListView extends Component {
  static defaultProps = {
    page_list: [],
  };
  render() {
    const {
      sub_categories,
      item_list,
      current_categories,
      page_list,
      page,
    } = this.props;
    console.log('page', page_list);
    return (
      <div className="ItemList">
        <ItemVisualBanner current_categories={current_categories} />
        <div className="content">
          <div className="ItemList__breadcrumbs">
            {current_categories.sub_category !== '전체보기' ? (
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="#">홈</a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <a>{current_categories.main_category}</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  {current_categories.sub_category}
                </BreadcrumbItem>
              </Breadcrumb>
            ) : (
              <Breadcrumb>
                <BreadcrumbItem>
                  <a href="#">홈</a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  {current_categories.main_category}
                </BreadcrumbItem>
              </Breadcrumb>
            )}
          </div>
          <Nav className="ItemList__category--list">
            {sub_categories.map(c => (
              <NavItem key={c.category_pk}>
                <Link to={`/categories/?category_pk=${c.category_pk}`}>
                  {c.sub_category}
                </Link>
              </NavItem>
            ))}
          </Nav>
          <div className="ItemList__title">
            {current_categories.sub_category === '전체보기' ? (
              <h2>{current_categories.main_category}</h2>
            ) : (
              <h2>{current_categories.sub_category}</h2>
            )}
          </div>
          <ul className="ItemList__list">
            {item_list.map(i => (
              <ItemListProduct
                key={i.item_pk}
                item_pk={i.item_pk}
                company={i.company}
                item_name={i.item_name}
                origin_price={i.origin_price}
                sale_price={i.sale_price}
                discount_rate={i.discount_rate}
                list_thumbnail={i.list_thumbnail}
                onCreateCartItem={this.props.onCreateCartItem}
              />
            ))}
          </ul>
          <div className="ItemList__pagination">
            <Pagination aria-label="Page navigation example">
              {page_list.map(p => (
                <PaginationItem key={p} active={p === parseInt(`${page}`)}>
                  <Link
                    to={`/categories/?category_pk=${
                      current_categories.category_pk
                    }&page=${p}`}
                  >
                    {p}
                  </Link>
                </PaginationItem>
              ))}
            </Pagination>
          </div>
          <ItemB2bBanner />
        </div>
      </div>
    );
  }
}

export default withLoading(ItemListView);
