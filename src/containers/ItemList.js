import React, { Component } from 'react';
import ItemListView from '../components/ItemList/ItemListView';
import api from '../api';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      current_categories: {},
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
      data: { current_categories, sub_categories, item_list },
    } = await api.get('/api/categories/', {
      params,
    });

    const urlPk = this.props.location.search;
    this.setState({
      current_categories,
      sub_categories,
      item_list,
      loading: false,
      urlPk,
    });
  }
  render() {
    const {
      current_categories,
      sub_categories,
      item_list,
      loading,
    } = this.state;
    return <ItemListView {...this.state} />;
  }
}
