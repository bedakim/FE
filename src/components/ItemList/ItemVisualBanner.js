import React, { Component } from 'react';

export default class ItemVisualBanner extends Component {
  render() {
    const { current_categories } = this.props;
    return (
      <div className="ItemList__visual">
        <img
          src={current_categories.photo}
          alt={current_categories.main_category}
          align="center"
        />
      </div>
    );
  }
}
