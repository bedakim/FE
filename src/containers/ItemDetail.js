import React, { Component } from 'react';
import api from '../api';
import ItemDetailView from '../components/ItemDetail/ItemDetailView';

export default class ItemDetail extends Component {
  // static defaultProps = {
  //   // 표시해주어야 할 값
  //   item_pk: '',
  // };
  constructor(props) {
    super(props);
    this.state = {
      item_pk: null,
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
    } = await api.get('/item/', {
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

  // async handleCreateCartItem(item_pk, amount) {
  //   await api.post('/cart', {
  //     item_pk,
  //     amount,
  //   });
  // }

  // 서버측 장바구니에 항목을 추가하는 함수
  handleCreateCartItem = async (item_pk, amount) => {
    alert(`장바구니 테스트( 아이템PK, 수량), ${item_pk}, ${amount}`);
  };

  render() {
    return (
      <ItemDetailView
        onCreateCartItem={this.handleCreateCartItem}
        {...this.state}
      />
    );
  }
}
