import React, { Component } from 'react';
import { withUser } from '../contexts/UserContext';
import { withRouter } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';

// Component
import Category from '../containers/Category';
import SearchBar from './SearchBar';

// SCSS [_Header.scss에서 관리함]
import HeaerScss from '../containers/_Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutSuccess: false,
    };
  }
  render() {
    const { username, logout, history } = this.props;
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
    console.log('username :', username);
    return (
      <>
        {username ? (
          <>
            <div className="members">
              <div className="members__container">
                <li
                  className="members__li"
                  onClick={() => {
                    logout();
                    history.push('/');
                  }}
                >
                  <Link to="/">로그아웃</Link>
                </li>
                <li className="members__li">
                  <Link to="/members/signup/">회원가입</Link>
                </li>
                <li className="members__li">
                  <Link to="/member/login">마이페이지</Link>
                </li>
                <li className="members__li">
                  <Link to="/cart/">장바구니</Link>
                </li>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="members">
              <div className="members__container">
                <li className="members__li">
                  <Link to="/members/login/">로그인</Link>
                </li>
                <li className="members__li">
                  <Link to="/members/signup/">회원가입</Link>
                </li>
                <li className="members__li">
                  <Link to="/order/">마이페이지</Link>
                </li>
                <li className="members__li">
                  <Link to="/cart/">장바구니</Link>
                </li>
              </div>
            </div>
          </>
        )}
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

export default withRouter(withUser(Header));
