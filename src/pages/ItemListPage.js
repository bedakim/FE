import React, { Component } from 'react';
import ItemList from '../containers/ItemList';

export default class ItemListPage extends Component {
  render() {
    const { match } = this.props;
    const itemId = match.params.pk;

    return (
      <div>
        <h1>vfidoebhio</h1>
        <ItemList itemId={itemId} />
      </div>
    );
  }
}
