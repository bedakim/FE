import React, { Component } from 'react';

import api from '../api';

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userPk: null,
      username: null,
      login: this.login.bind(this),
      logout: this.logout.bind(this),
    };
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      await this.refreshUser();
    }
  }

  //페이스북 로그인

  //로그인
  async login(username, password) {
    const res = await api.post('/members/login/', {
      username,
      password,
    });
    localStorage.setItem('token', res.data.token);
    this.setState({
      userPk: res.data.user.pk,
      username: res.data.user.username,
    });
  }

  //로그아웃
  logout() {
    localStorage.removeItem('token');
    this.setState({
      id: null,
      username: null,
    });
  }

  //토큰이 있으면 로그인 상태 유지
  async refreshUser() {
    const res2 = await api.get('/members/user/');
    console.log(res2.data);
    this.setState({
      userPK: res2.data.user_pk,
      username: res2.data.username,
    });
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

function withUser(WrappedComponent) {
  return function(props) {
    return (
      <Consumer>{value => <WrappedComponent {...value} {...props} />}</Consumer>
    );
  };
}

export { UserProvider, Consumer as UserConsumer, withUser };
