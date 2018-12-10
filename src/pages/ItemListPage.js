import React, { Component } from 'react';
import ItemList from '../containers/ItemList';
import Layout from '../components/Layout';

export default class ItemListPage extends Component {
  render() {
    return (
      <Layout>
        <ItemList {...this.props} />
      </Layout>
    );
  }
}
