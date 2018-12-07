import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import CategoryView from '../components/Main/CategoryView';
import '../containers/Category.scss';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  // async componentDidMount() {
  //   const { data: categories } = await api.get('/api/categories/');

  //   const categoryArr = [];
  //   let category = null;
  //   categories.forEach((c, index) => {
  //     if (category !== c.main_category) {
  //       category = c.main_category;
  //       categoryArr.push({
  //         title: c.main_category,
  //         subCate: [c.sub_category],
  //       });
  //     }
  //   });
  //   console.log(categories);
  //   this.setState({
  //     categories: categoryArr,
  //   });
  // }

  render() {
    // const { categories } = this.state;
    // return <CategoryView categories={categories} />;
    return (
      <>
        <div className="category">
          <Link to="/categories/?category_pk=1" />
          <Link to="/categories/?category_pk=8">메인반찬</Link>
          <Link to="/categories/?category_pk=15">국&middot;찌개&middot;탕</Link>
          <Link to="/categories/?category_pk=15">아이반찬</Link>
          <Link to="/categories/?category_pk=15">육류 구이관</Link>
          <Link to="/categories/?category_pk=15">김치&middot;짱아찌</Link>
          <Link to="/categories/?category_pk=15">세계음식</Link>
          <Link to="/categories/?category_pk=15">밥&middot;죽&middot;면</Link>
          <Link to="/categories/?category_pk=15">샐러드</Link>
          <Link to="/categories/?category_pk=15">간식</Link>
          <Link to="/categories/?category_pk=15">정기식당</Link>
          <Link to="/categories/?category_pk=15">반찬브랜드</Link>
        </div>
      </>
    );
  }
}
