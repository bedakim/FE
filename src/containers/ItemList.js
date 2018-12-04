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
    //   const { pk } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    const { data: products } = await api.get('/api/categories/', {
      params,
    });
    this.setState({
      products,
      loading: false,
    });
  }
  render() {
    const { products, loading } = this.state;
    console.log('products', products);
    const itemList = products.map(p => ({
      company: p.company,
      discount_rate: p.discount_rate,
      item_name: p.item_name,
      list_thumbnail: p.list_thumbnail,
      origin_price: p.origin_price,
      pk: p.pk,
      sale_price: p.sale_price,
    }));
    return <ItemListView products={itemList} />;
  }
}
