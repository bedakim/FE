import React, { Component } from 'react';
import ItemListView from '../components/ItemList/ItemListView';
import api from '../api';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      category_img: '',
      sub_categories: [],
      item_list: [],
    };
  }
  async componentDidMount() {
    //   const { pk } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    console.log(this.props.location);
    console.log('params', new URLSearchParams(this.props.location.search));
    const {
      data: { category_img, sub_categories, item_list },
    } = await api.get('/api/categories/', {
      params,
    });
    //categories/?pk=1
    this.setState({
      category_img,
      sub_categories,
      item_list,
      loading: false,
    });
  }
  render() {
    const { category_img, sub_categories, item_list, loading } = this.state;
    return <ItemListView {...this.state} />;
  }
}
