import React, { Component } from 'react';

const RightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <span className="fa-arrow-right">버튼</span>
    </div>
  );
};

export default RightArrow;
