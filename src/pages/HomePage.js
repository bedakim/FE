import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <Link to="/categories/">밑반찬</Link>
        <Link to="/">/메인반찬</Link>
        <Link to="/">/국찌개탕</Link>
        <Link to="/">/아이반찬</Link>
        <Link to="/">/육류</Link>
        <Link to="/">/김치</Link>
        <Link to="/">/세계음식</Link>
        <Link to="/">/밥</Link>
        <Link to="/">/샐러드</Link>
        <Link to="/">/간식</Link>
        <Link to="/">/정기식단</Link>
        <Link to="/">/반찬 브랜드</Link>
      </div>
    );
  }
}
