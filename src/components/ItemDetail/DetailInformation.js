import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class DetailInformation extends Component {
  render() {
    const { imageTypeD } = this.props;
    return (
      <ScrollableAnchor id={'section1'} activeTab={this.props.activeTab}>
        <section className="detail-section">
          <div className="detail-img-box">
            {imageTypeD.map(i => (
              <img src={i.photo} alt={i.item_image_pk} key={i.item_image_pk} />
            ))}
          </div>
        </section>
      </ScrollableAnchor>
    );
  }
}
