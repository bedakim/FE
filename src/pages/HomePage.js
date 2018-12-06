import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/Layout';
// import main_banner from 'https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/bmc-logo.png';
import sub_left_banner from '../components/Main/images/sub_banner_left_01.jpg';
import sub_right_banner from '../components/Main/images/sub_banner_right.png';
import '../components/Main/Main.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/main_banner_01.jpg"
            alt="main_banner_01.jpg"
          />
          <div className="img_container">
            <div className="flex">
              <img
                className="firstImg"
                src={sub_left_banner}
                alt="sub_banner_left_01.jpg"
              />
              <img src={sub_right_banner} alt="sub_banner_right.jpg" />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
