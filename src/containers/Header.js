import React, { Component } from 'react';

// Component
import Category from '../containers/Category';
import SearchBar from './SearchBar';

// Router
import { Link } from 'react-router-dom';

// SCSS [_Header.scss에서 관리함]
import HeaerScss from '../containers/_Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="members">
          <div className="members__container">
            <li class="members__li">
              <Link to="/members/login/">로그인</Link>
            </li>
            <li class="members__li">
              <Link to="/members/signup/">회원가입</Link>
            </li>
            <li class="members__li">
              <Link to="/member/login">마이페이지</Link>
            </li>
            <li class="members__li">
              <Link to="/members/cart">장바구니</Link>
            </li>
          </div>
        </div>

        <div className="searchBar">
          <div className="searchBar__container">
            <Link to="/">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/wps-9th-chajeehyung-practice/media/items/bmc-logo.png"
                alt="배민찬 LOGO"
              />
            </Link>
            <SearchBar />
          </div>
        </div>
        <Category />
      </>
    );
  }
}
