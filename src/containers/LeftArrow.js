import React, { Component } from 'react';

const LeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <span className="fa-arrow-left">버튼</span>
    </div>
  );
};

export default LeftArrow;
