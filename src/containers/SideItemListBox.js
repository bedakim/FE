import React, { Component } from 'react';
import api from '../api';
import { withRouter } from 'react-router-dom';
import ItemListBoxView from '../components/Main/ItemListBoxView';

class SideItemListBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_categories: {},
      item_list: [],
      current_categories_title: '언제 먹어도 든든한 반찬',
    };
  }

  async componentDidMount() {
    const res = await api.get('/categories/?category_pk=1');
    // console.log('밑반찬전체:', res.data);
    this.setState({
      item_list: res.data.item_list,
      current_categories: res.data.current_categories,
    });
    console.log('밑반찬전체:', res.data.item_list);
  }

  render() {
    return <ItemListBoxView {...this.state} />;
  }
}
//  withRouter를 둘러준 컴포넌트는 match, history, location prop을 받게 된다.
export default withRouter(SideItemListBox);
