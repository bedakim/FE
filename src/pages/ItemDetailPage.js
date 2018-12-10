import React, { Component } from 'react';
import ItemDetail from '../containers/ItemDetail';
import Layout from '../components/Layout';

export default class ItemDetailPage extends Component {
  render() {
    return (
      <Layout>
        <ItemDetail {...this.props} />
      </Layout>
    );
  }
}
