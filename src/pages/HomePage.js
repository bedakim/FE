import React, { Component } from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Main/Slider';
import SideItemListBox from '../containers/SideItemListBox';
import '../components/Main/Main.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Slider />
          <div className="bottom_banner-container">
            <div className="bottom_banner">
              <img
                className="bottom_banner__first-img"
                src="https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/sub_banner_left_01.jpg"
                alt="sub_banner_left_01.jpg"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/sub_banner_right.png"
                alt="sub_banner_right.jpg"
              />
            </div>
          </div>
          <SideItemListBox />
        </Layout>
      </div>
    );
  }
}
