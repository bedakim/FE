import React, { Component } from 'react';
import api from '../../api';

export default class SignupFormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //현재입력필드에 입력된 사용자 이름/암호
      username: '',
      password: null,
    };
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    // FIXME : 사용자 이름 중복체크 해야함, TODO : 게시글 목록 보여주기
    // const { data: username, password } = await api.get('api/members/signup/');
    console.log('username', username);
    if (username.length > 0) {
      alert('이미사용중임');
      return;
    }
    const res = await api.post('api/members/signup/', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
  }

  handleUsernameChage(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handlePasswordChage(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // async handleLoginButtonClick() {
  //   const { onLogin } = this.props;
  //   const { username, password } = this.state;
  //   await onLogin(username, password);
  //   // 로그인이 성공적으로 끝났을 때
  //   this.setState({
  //     success: true,
  //   });

  handleFieldChange(e, name) {
    // name변수에 저장되어 있는 문자열을 그대로 속성이름으로 사용
    // const res의 username 변수?
    this.setState({
      [name]: e.target.value,
    });
  }

  // handleSubmit() {
  //   const username = e.target.elements.username.value;
  //   const password = e.target.elements.password.value;
  //   this.props.login(username, password);
  // }

  render() {
    const { username, password } = this.state;
    console.log('username', username);
    console.log('password', password);
    return (
      <>
        <input
          type="text"
          value={username}
          onChange={e => this.handleFieldChange(e, 'username')}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handleFieldChange(e, 'password')}
        />
        <button>SIGNUP</button>
      </>
    );
  }
}
