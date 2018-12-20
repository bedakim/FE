import React, { Component } from 'react';
import api from '../../api';
import { Redirect } from 'react-router-dom';

export default class SignupFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      password: null,
      goToMain: false,
    };
  }

  async handleSubmit() {
    const { userId, password } = this.state;

    try {
      const form = new FormData();
      form.append('username', userId);
      console.log(form);
      const { data: checked } = await api.post(
        '/members/signup/check-username/',
        form
      );
      if (checked.error) {
        alert('동일한 아이디가 존재합니다.');
      } else if (checked.pass) {
        const res = await api.post('/members/signup/', {
          username: userId,
          password,
        });
        // history.push('/');
        this.setState({
          goToMain: true,
        });
      }
    } catch (e) {
      if (e.response.data.password) {
        alert('비밀번호를 입력해주세요.');
      }
    }
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
    const { goToMain, userId, password } = this.state;
    if (goToMain) {
      return <Redirect to="/members/login/" />;
    }

    return (
      <>
        <h1 className="title">회원가입</h1>
        <div className="registerView">
          <input
            className="registerView__input"
            type="text"
            value={userId}
            placeholder="아이디"
            onChange={e => this.handleUsernameChange(e)}
          />
          <input
            className="registerView__input"
            type="password"
            value={password}
            placeholder="8-16자리 영문 숫자 조합"
            onChange={e => this.handlePasswordChange(e)}
          />
          <button
            className="registerView__button"
            onClick={() => this.handleSubmit()}
          >
            SIGN UP
          </button>
        </div>
      </>
    );
  }
}
