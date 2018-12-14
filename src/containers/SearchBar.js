import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <>
        <input className="search-input" type="text" />
        <button className="search-btn">검색</button>
      </>
    );
  }
}
