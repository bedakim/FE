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
    // FIXME : 사용자 이름 중복체크 해야함, TODO : 게시글 목록 보여주기
    // const { data: username, password } = await api.get('api/members/signup/');
    // if (userId.length > 0) {
    //   alert('이미사용중임');
    //   alert(userId);
    //   alert(password);
    //   return;
    // }
    // header에 포함시켜 요청 보낼때
    const res = await api.post('/members/signup/', {
      username: userId,
      password,
    });
    console.log('유저네ㅔㅔ임', res.data);
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

  // async handleLoginButtonClick() {
  //   const { onLogin } = this.props;
  //   const { username, password } = this.state;
  //   await onLogin(username, password);
  //   // 로그인이 성공적으로 끝났을 때
  //   this.setState({
  //     success: true,
  //   });

  // 추ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ

  // async handleSignUp() {
  //   const { userId } = this.state;
  //   console.log('userId', userId);
  //   // const { data: username } = await api.get('/members/signup/');
  //   const res = await api.post('/members/signup/', {
  //     username: userId,
  //   });
  //   localStorage.setItem('token', res.data.token);
  // }

  // handleFieldChange(e, name) {
  //   // name변수에 저장되어 있는 문자열을 그대로 속성이름으로 사용
  //   // const res의 username 변수?
  //   this.setState({
  //     // [name]: e.target.value,
  //     [name]: e.target.value,
  //   });
  // }

  // handleSubmit() {
  //   const username = e.target.elements.username.value;
  //   const password = e.target.elements.password.value;
  //   this.props.login(username, password);
  // }

  render() {
    const { userId, password } = this.state;

    console.log('유저아이디', userId);
    console.log('패스워드', password);
    return (
      <>
        <h1>회원가입</h1>
        <input
          type="text"
          value={userId}
          onChange={e => this.handleUsernameChange(e)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handlePasswordChange(e)}
        />
        <button onClick={() => this.handleSubmit()}>SIGNUP</button>
      </>
    );
  }
}
