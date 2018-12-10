import React, { Component } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class DetailContentView extends Component {
  constructor(props) {
    super(props);
    //bind this가 고정된 채로 함수를 실행
    this.toggle = this.toggle.bind(this);
    this.state = { activeTab: '1' };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    const { itemimage_set } = this.props;
    return (
      <div className="ItemDetail__detail--content">
        <div className="detail-bar">
          <Nav tabs className="detail-tab-inner">
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === '1',
                })}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                Tab1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: this.state.activeTab === '2',
                })}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                Moar Tabs
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" className="detail-information">
              <Row>
                <Col lg="24">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col lg="24">
                  <h4>Tab 2 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}
