import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
export default class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
    };
  }

  // responseFacebook(response) {
  //   console.log(response);
  // }

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
  }

  render() {
    const { username, password, success } = this.state;
    const { setFacebookLogin } = this.props;
    console.log('username은', username);
    if (success) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <h1 className="title">로그인</h1>
        <div className="registerView">
          <span className="registerView__warning">
            로그인이 필요한 서비스입니다. 회원이 아니시면 회원가입을 해주세요.
          </span>
          <input
            className="registerView__input"
            type="text"
            value={username}
            placeHolder="아이디"
            onChange={e => this.handleUsernameChange(e)}
          />
          <input
            className="registerView__input"
            type="password"
            value={password}
            placeHolder="비밀번호"
            onChange={e => this.handlePasswordChange(e)}
          />
          <button
            className="registerView__button"
            onClick={() => this.handleLoginButtonClick()}
          >
            LOGIN
          </button>
          <FacebookLogin
            cssClass="my-facebook-button-class"
            appId="1088597931155576"
            autoLoad={false}
            fields="name,email,picture"
            callback={setFacebookLogin}
          />
        </div>
      </>
    );
  }
}
