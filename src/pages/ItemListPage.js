import React, { Component } from 'react';
import ItemList from '../containers/ItemList';
import Layout from '../components/Layout';

export default class ItemListPage extends Component {
  render() {
    const { location } = this.props;
    return (
      <Layout>
        <ItemList key={location.search} {...this.props} />
      </Layout>
    );
  }
}
