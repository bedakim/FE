import React, { Component } from 'react';
import ItemDetail from '../containers/ItemDetail';

export default class ItemDetailPage extends Component {
  render() {
    return <ItemDetail {...this.props} />;
  }
}
