import React, { Component } from 'react';
import { withUser } from '../../contexts/UserContext';
import { Redirect } from 'react-router-dom';

import FacebookLogin from 'react-facebook-login';
import api from '../../api';
class LoginFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      success: false,
      facebookID: '',
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
  }

  render() {
    let fbContent;
    const { username, password, success } = this.state;
    const { responseFacebook, componentClicked } = this.props;
    console.log('facebook username은', username);

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
            placeholder="아이디"
            onChange={e => this.handleUsernameChange(e)}
          />
          <input
            className="registerView__input"
            type="password"
            value={password}
            placeholder="비밀번호"
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
            appId="2213596105573923"
            autoLoad={false}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.props.responseFacebook}
          />
        </div>
      </>
    );
  }
}

export default withUser(LoginFormView);
