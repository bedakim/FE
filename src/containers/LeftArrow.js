import React, { Component } from 'react';

const LeftArrow = props => {
  return (
    <div className="arrow__back" onClick={props.goToPrevSlide}>
      <span className="fa-arrow-left  arrow" />
    </div>
  );
};

export default LeftArrow;
