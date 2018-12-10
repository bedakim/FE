import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './ItemList.scss';
import ItemVisualBanner from './ItemVisualBanner';
import ItemB2bBanner from './ItemB2bBanner';
import withLoading from '../../hoc/withLoading';
import ItemListProduct from './ItemListProduct';
import { Link } from 'react-router-dom';

class ItemListView extends Component {
  static defaultProps = {};
  render() {
    const { sub_categories, item_list, current_categories } = this.props;
    return (
      <div className="ItemList">
        <ItemVisualBanner current_categories={current_categories} />
        <div className="ItemList__content">
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
          <ItemListProduct item_list={item_list} />
          <div className="ItemList__pagination" />
          <ItemB2bBanner />
        </div>
      </div>
    );
  }
}

export default withLoading(ItemListView);
