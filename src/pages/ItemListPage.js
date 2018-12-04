import React, { Component } from 'react';
import ItemList from '../containers/ItemList';

export default class ItemListPage extends Component {
  render() {
    return (
      <div>
        <ItemList {...this.props} />
      </div>
    );
  }
}
