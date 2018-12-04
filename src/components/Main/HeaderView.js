import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
export default class HeaderView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutSuccess: false,
    };
  }
  render() {
    const { username, logout } = this.props;
    const { logoutSuccess } = this.state;
    if (logoutSuccess) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Link to="/">LOGO</Link>
        {username ? (
          <>
            <div>{username}</div>
            <button
              onClick={() => {
                logout();
                this.setState({
                  logoutSuccess: true,
                });
                //화면이 제대로 업데이트가 되지 않음
                //element type이나 key가 바뀌면 상태가 날아감
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    );
  }
}
