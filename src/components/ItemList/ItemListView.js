import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './ItemList.scss';
import ItemVisualBanner from './ItemVisualBanner';
import ItemB2bBanner from './ItemB2bBanner';
import withLoading from '../../hoc/withLoading';

class ItemListView extends Component {
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
                <NavLink
                  href={`/categories/?category_pk=${c.category_pk}`}
                  active
                >
                  {c.sub_category}
                </NavLink>
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
            {item_list.map(p => (
              <li key={p.item_pk}>
                <div className="ItemList__list--imgthumb">
                  <Link to={`/item/?item_pk=${p.item_pk}`}>
                    <img src={p.list_thumbnail} alt={p.item_name} />
                  </Link>
                  <div>
                    {p.discount_rate === 0 ? (
                      ''
                    ) : (
                      <div className="badge">
                        <span>{p.discount_rate * 100 + '%'}</span>
                      </div>
                    )}
                  </div>
                </div>
                <dl className="ItemList__list--info">
                  <dt className="item-title">
                    <Link to={`/item/${p.item_pk}`}>
                      <span>
                        [{p.company}]{p.item_name}
                      </span>
                    </Link>
                  </dt>
                  <dd className="item-star" />
                  <dd className="item-price">
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
          <div className="ItemList__pagination" />
          <ItemB2bBanner />
        </div>
      </div>
    );
  }
}

export default withLoading(ItemListView);
