import React, { Component } from 'react';
import api from '../api';
import ItemDetailView from '../components/ItemDetail/ItemDetailView';

export default class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_pk: '',
      company: '',
      item_name: '',
      origin_price: '',
      sale_price: '',
      discount_rate: '',
      description: {},
      itemimage_set: [],
    };
  }

  async componentDidMount() {
    // const { item_pk } = this.props;
    const params = new URLSearchParams(this.props.location.search);
    console.log(this.props.location);
    const {
      data: {
        item_pk,
        company,
        item_name,
        origin_price,
        sale_price,
        discount_rate,
        description,
        itemimage_set,
      },
    } = await api.get('/api/item/', {
      params,
    });
    this.setState({
      item_pk,
      company,
      item_name,
      origin_price,
      sale_price,
      discount_rate,
      description,
      itemimage_set,
    });
    console.log(itemimage_set);
  }
  render() {
    return <ItemDetailView {...this.state} />;
  }
}
