import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor';
import DetailInformation from './DetailInformation';

export default class DetailContentView extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const {
      item_pk,
      company,
      item_name,
      origin_price,
      sale_price,
      discount_rate,
      description,
      imageTypeD,
    } = this.props;

    return (
      <div className="ItemDetail__detail--content">
        <div className="detail-bar">
          <Nav tabs className="detail-tab-inner">
            <NavItem className="pdt-item fir">
              <NavLink
                href="#section1"
                className={classnames({
                  active: this.state.activeTab === '1',
                })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                상세정보
              </NavLink>
            </NavItem>
            <NavItem className="pdt-item">
              <NavLink
                href="#section2"
                className={classnames({
                  active: this.state.activeTab === '2',
                })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                후기
              </NavLink>
            </NavItem>
            <NavItem className="pdt-item">
              <NavLink
                href="#section3"
                className={classnames({
                  active: this.state.activeTab === '3',
                })}
                onClick={() => {
                  this.toggle('3');
                }}
              >
                Q&amp;A
              </NavLink>
            </NavItem>
            <NavItem className="pdt-item">
              <NavLink
                href="#section4"
                className={classnames({
                  active: this.state.activeTab === '4',
                })}
                onClick={() => {
                  this.toggle('4');
                }}
              >
                배송/교환/반품
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <DetailInformation imageTypeD={imageTypeD} />
        <ScrollableAnchor id={'section2'}>
          <div>
            <p>후기</p>
            <p>opinion</p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section3'}>
          <div>
            <p>Q&amp;A</p>
            <p>Qna</p>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section4'}>
          <div>
            <p>배송/교환/반품</p>
            <p>GeneralInformation</p>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}
