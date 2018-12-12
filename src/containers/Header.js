import React, { Component } from 'react';

// Component
import Category from '../containers/Category';
import SearchBar from './SearchBar';

// Router
import { Link } from 'react-router-dom';

// SCSS
import HeaerScss from '../containers/_Header.scss';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="members-div">
          <div className="members-container">
            <Link to="/members/login/">로그인</Link>
            <Link to="/members/signup/">회원가입</Link>
            <Link to="/member/login">마이페이지</Link>
<<<<<<< HEAD
            <Link to="/members/cart/">장바구니</Link>
=======
            <Link to="/members/cart">장바구니</Link>
>>>>>>> f8ec0e3cab0d19c951f34a3eb4b1591c12199161
          </div>
        </div>

        <div className="searchBar-div">
          <div className="searchBar-container">
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
