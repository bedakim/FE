import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import Layout from '../components/Layout';
import main_banner from '../components/Main/images/main_banner_01.jpg';
import sub_left_banner from '../components/Main/images/sub_banner_left_01.jpg';
import sub_right_banner from '../components/Main/images/sub_banner_right.png';
import '../components/Main/Main.scss';

export default class HomePage extends Component {
  render() {
    // 아래 코드를 레이아웃에 넣어주고
    // homepage에는 메인페이지만 있음
    // itemList에 props를 내려줌 => HOMEPAGE에서는 메인화면이 떠있고, 카테고리를 클릭했을때 리스트를 띄워야함
    // App.js에서 조건을 주고 페이지를 그려줌
    // 쿼리스트링 =/ 진짜경로
    // link가 주소표시줄
    return (
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/cart">장바구니</Link>

        <Layout>
          <img src={main_banner} alt="main_banner_01.jpg" />
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
