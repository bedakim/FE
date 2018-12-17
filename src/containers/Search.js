import React, { Component } from 'react';
import SearchView from '../components/Search/SearchView';
import api from '../api';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
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
      search_str: '',
    };
  }
  async componentDidMount() {
    const location = this.props.location;
    const params = new URLSearchParams(location.search);
    const search_str = params.get('search_str');
    console.log('params', new URLSearchParams(this.props.location.search));
    const { data } = await api.get('/search/', {
      params: {
        search_str,
      },
    });

    this.setState({ data, search_str });
  }
  render() {
    return <SearchView {...this.state} />;
  }
}

export default withRouter(Search);
