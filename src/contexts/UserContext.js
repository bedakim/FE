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
      // await this.refreshUser();
    }
  }

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

  logout() {
    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token');
    // 사용자 정보 캐시 초기화
    this.setState({
      id: null,
      username: null,
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
