import React, { Component } from 'react';

const RightArrow = props => {
  return (
    <div className="arrow__next" onClick={props.goToNextSlide}>
      <span className="fa-arrow-right arrow" />
    </div>
  );
};

export default RightArrow;
