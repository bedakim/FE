import React, { Component } from 'react';
import './Collapse.scss';

export class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    const { title, children } = this.props;
    const { show } = this.state;
    return (
      <div className="item-detail-official">
        <header
          style={{
            userSelect: 'none',
            cursor: 'pointer',
            fontSize: '22px',
            fontWeight: 'bold',
          }}
          onClick={e => this.setState(prevState => ({ show: !prevState.show }))}
        >
          {title}
          {show ? (
            <span className="ico-box">
              <i className="ico-folding unfolded">▴</i>
            </span>
          ) : (
            <span className="ico-box">
              <i className="ico-folding">▾</i>
            </span>
          )}
        </header>
        {show && children}
      </div>
    );
  }
}
