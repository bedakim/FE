import React, { Component } from 'react';
import SearchView from '../components/Search/SearchView';
import api from '../api';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        // {
        //   item_pk: '',
        //   company: '',
        //   item_name: '',
        //   origin_price: null,
        //   sale_price: null,
        //   discount_rate: null,
        //   list_thumbnail: '',
        // }
      ],
      page_list: [],
      page: null,
      search_str: '',
      items_count: null,
    };
  }
  async componentDidMount() {
    const location = this.props.location;
    const params = new URLSearchParams(location.search);
    const search_str = params.get('search_str');
    console.log('params', new URLSearchParams(this.props.location.search));
    const {
      data: { items, page_list, page, items_count },
    } = await api.get('/search/', {
      params,
    });
    console.log('page', page);

    this.setState({ items, page_list, page, search_str, items_count });
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

  render() {
    return (
      <SearchView
        onCreateCartItem={this.handleCreateCartItem}
        {...this.state}
      />
    );
  }
}

export default withRouter(Search);
