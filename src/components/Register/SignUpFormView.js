import React, { Component } from 'react';
import api from '../../api';

export default class SignupFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //현재입력필드에 입력된 사용자 이름/암호
      userId: '',
      password: null,
    };
  }

  async handleSubmit() {
    const { userId, password } = this.state;
    if (userId.length > 0) {
      alert('이미사용중인 아이디입니다.');
      this.setState({
        userId: '',
        password: '',
      });
    }
    // header에 포함시켜 요청 보낼때
    const res = await api.post('/members/signup/', {
      username: userId,
      password,
    });
  }

  handleUsernameChange(e) {
    this.setState({
      userId: e.target.value,
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  render() {
    const { userId, password } = this.state;
    return (
      <>
        <h1 className="title">회원가입</h1>
        <div className="registerView">
          <input
            className="registerView__input"
            type="text"
            value={userId}
            onChange={e => this.handleUsernameChange(e)}
          />
          <input
            className="registerView__input"
            type="password"
            value={password}
            onChange={e => this.handlePasswordChange(e)}
          />
          <button
            className="registerView__button"
            onClick={() => this.handleSubmit()}
          >
            SIGNUP
          </button>
        </div>
      </>
    );
  }
}
