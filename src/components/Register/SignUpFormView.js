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
    console.log('유저네ㅔㅔ임', res.data.user_pk);
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
