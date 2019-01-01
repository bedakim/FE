import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import api from '../api';
// import SearchView from '../components/Search/SearchView';
import SearchPage from '../pages/SearchPage';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchStr: '',
      search: false,
    };

    // 함수 객체의 bind 메소드를 호출하면, 메소드의 인수로 넘겨준 값이 this가 되는 새로운 함수를 반환
    this.handleSearch = this.handleSearch.bind(this);
    // this.handlekeyPress = this.handlekeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      console.log('enter', `?search_str=${e.target.value}`);
      this.setState({
        search: true,
      });
    }
  }

  handleSearch(e) {
    this.setState({
      searchStr: e.target.value,
    });
  }

  render() {
    const { searchStr, search } = this.state;
    if (search) {
      return <Redirect to={`/search/?search_str=${searchStr}`} />;
    }
    return (
      <>
        <input
          className="search-input"
          type="text"
          value={searchStr}
          onChange={e => this.handleSearch(e)}
          onKeyDown={e => this.handleKeyPress(e)}
        />
        <button className="search-btn">
          <Link
            className="search-btn__link"
            to={`/search/?search_str=${searchStr}`}
          />
        </button>
      </>
    );
  }
}
