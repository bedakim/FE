import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    const { location } = this.props;
    console.log(location.search);
    const p = new URLSearchParams(location.search);
    console.log(p.get('pk'));
    const itemId = p.get('pk');
    // 아래 코드를 레이아웃에 넣어주고
    // homepage에는 메인페이지만 있음
    // itemList에 props를 내려줌 => HOMEPAGE에서는 메인화면이 떠있고, 카테고리를 클릭했을때 리스트를 띄워야함
    // App.js에서 조건을 주고 페이지를 그려줌
    //
    return (
      <div>
        <h1>Home</h1>
        <Link to="/categories/1">밑반찬</Link>
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
