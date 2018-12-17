import React, { Component } from 'react';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
  };
  return <div className="slide" style={styles} />;
};

export default Slide;
