import React, { Component } from 'react';
import ItemListView from '../components/ItemList/ItemListView';
import api from '../api';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: [],
    };
  }

  async componentDidMount() {
    const { pk } = this.props;
    const { data: categories } = await api.get('/api/categories/', {
      params: {
        pk,
      },
    });
    this.setState({
      categories,
      loading: false,
    });
  }
  render() {
    const { products, loading } = this.state;
    const itemList = products.map(p => ({
      item_name: p.item_name,
    }));
    return <ItemListView products={itemList} />;
  }
}
