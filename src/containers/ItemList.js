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
    const { data: products } = await api.get('/api/categories/', {
      params: {
        pk,
      },
    });
    const arr = [];
    let category = null;
    products.forEach(p => {
      if (category !== p.main_category) {
        console.log(p.main_category);

        category = p.main_category;
        arr.push(p.photo);
      }
    });
    console.log(arr);
    this.setState({
      products,
      loading: false,
    });
  }
  render() {
    const { products, loading } = this.state;
    console.log('products', products);
    const itemList = products.map(p => ({
      pk: p.pk,
      main_category: p.main_category,
      photo: p.photo,
      sub_category: p.sub_category,
    }));
    return <ItemListView products={itemList} />;
  }
}
