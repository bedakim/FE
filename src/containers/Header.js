import React, { Component } from 'react';
import Category from '../containers/Category';
import logo from '../components/Main/images/blank_user.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/members/login/">로그인</Link>
        <Link to="/members/signup/">회원가입</Link>
        <Link to="/member/login">마이페이지</Link>
        <Link to="/member/login">장바구니</Link>
        <img src={logo} alt="배민찬 LOGO" />
        <Category />
      </div>
    );
  }
}
