import React, { Component } from 'react';

export default class CategoryView extends Component {
  static defaultProps = {
    categories: [],
  };
  render() {
    const { categories } = this.props;

    return (
      <>
        <h1>카테고리</h1>
        {categories.map(c => (
          // 카테고리 62개를 불러왔음
          // p.main_category => 62개의 main_category를 출력해줘

          // 같은문자는 빼고 출력해줘

          // if(p.main_category===)

          <li key={c}>{c}</li>
        ))}
      </>
    );
  }
}
