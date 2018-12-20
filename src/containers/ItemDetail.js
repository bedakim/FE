import React, { Component } from 'react';
import api from '../api';
import ItemDetailView from '../components/ItemDetail/ItemDetailView';
import { withRouter } from 'react-router-dom';
class ItemDetail extends Component {
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
      amount: null,
      comment_set: [],
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
        comment_set,
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
      comment_set,
    });
    console.log(itemimage_set);
  }

  handleCreateCartItem = async (item_pk, amount) => {
    if (localStorage.getItem('token')) {
      const { data } = await api.get('/cart/');
      const cart_item = data.find(item => item.item.item_pk === item_pk);
      // data에서 item들을 순회하면서 data의 item_pk와 선택한 상품의 item_pk가
      // 같은 객체를 담는다.
      if (!cart_item) {
        // 없을경우
        await api.post('/cart/', { item_pk, amount });
        // TODO: 장바구니로 이동
        this.props.history.push('/cart/');
      } else {
        // 없을 경우
        if (cart_item.amount === amount) {
          // 카트에 담겨있는 수량이 현재와 같을 경우
          alert('같은 제품이 장바구니에 담겨있습니다');
          // TODO: 장바구니로 이동
          this.props.history.push('/cart/');
        } else {
          //카트에 담겨있는 수량이 현재와 다를 경우
          alert('같은 제품이 장바구니에 담겨있습니다');
          const res = await api.patch('/cart/', {
            cart_item_pk: cart_item.cart_item_pk,
            amount,
          });
          // TODO: 장바구니로 이동
          this.props.history.push('/cart/');
          console.log(res.data);
        }
      }
    } else {
      // TODO: 로그인으로 이동
      this.props.history.push('/members/login/');
    }
  };

  handleCreateComment = async (item_pk, content, nickname) => {
    // 댓글추가 요청
    const res = await api.post('/comment/', {
      item_pk,
      content,
      nickname,
    });
    console.log('comment data: ', res.data);
    this.setState({ comment_set: res.data });
  };

  render() {
    return (
      <ItemDetailView
        onCreateCartItem={this.handleCreateCartItem}
        onCreateComment={this.handleCreateComment}
        {...this.state}
      />
    );
  }
}

export default withRouter(ItemDetail);
