import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPk: '',
      username: '',
      password: '',
      success: false,
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async handleLoginButtonClick() {
    const { onLogin } = this.props;
    const { username, password } = this.state;
    await onLogin(username, password);
    this.setState({
      success: true,
    });
    // React Router 의 redirect 컴포넌트를 렌더링 -> 주소표시줄의 상태가 바뀜
  }

  render() {
    const { username, password, success } = this.state;
    console.log('유져네힘', username);
    console.log(this.props.location);
    if (success) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <h1 className="title">로그인</h1>
        <div className="LoginFormView-container">
          <input
            type="text"
            value={username}
            onChange={e => this.handleUsernameChange(e)}
          />
          <input
            type="password"
            value={password}
            onChange={e => this.handlePasswordChange(e)}
          />
          <button onClick={() => this.handleLoginButtonClick()}>LOGIN</button>
          <button>페이스북 계정으로 시작하기</button>
        </div>
      </>
    );
  }
}
